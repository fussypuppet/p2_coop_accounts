# Coop Accounts Documentation

## Inspiration

I currently live in a self-managed housing cooperative in Seattle.  Because we've hired no outsiders to run the building for us, each of our residents contributes to the maintenance of our community however they're able.  For the past 14 years, my side-gig has been to handle our budget & finances, including making sure that all of our residents stay current on their monthly fees.  I use a constellation of spreadsheets and finance software to keep track of them all, and have always wished that there was a less convoluted way to answer simple, frequent questions like "how and when did this resident fall behind?",  "Have we received all the checks they say they've submitted?", or "Why is there no way for them to check their balances short of asking me personally?"

Creating an app with the features I wished for seemed like a great way to get some practice with database associations, RESTful routing of CRUD functions, and authentication/authorization.  I hope you enjoy exploring it.

**A note on vocabulary:**  
Coops are similar to condo buildings, but because of their different legal structure, the terminology used to describe their workings differs from what some people are used to.  Throughout this app, you will frequently see the words "shareholder" and "dues".  Shareholders are equivalent to a condo unit owner, and dues are equivalent to monthly HOA fees.

All payments and charges in the database are entirely made up.  All names in the database belong to hobbits.

## Getting Started

The app is deployed at https://coop-accounts.herokuapp.com.  You will have to register as a new user to log in - feel free to pick any unit number listed on the registration form, and to explore the app with both administrator and non-administrator accounts.  When you're finished exploring, you can delete your user accounts by clicking on the "Edit User Info" link in the nav bar, and then on the Delete button.

## User Stories

While designing this app, I had the following user stories in mind:
- "As an administrator, I want to be able to quickly see if any shareholders are behind on their payments and what they owe."
- "As an administrator, I want to be able to access details such as check numbers and deposit dates from past transactions."
- "As an administrator, I want to see graphically whether an individual shareholder is chronically late."
- "As an administrator, I want to add new transactions as shareholders make payments."
- "As an administrator, I want to be able to correct past transactions when needed."
- "As an administrator, I want to be able to update the monthly dues being charged to units as new rates come into effect."
- "As a shareholder, I want to see what my monthly dues rate and current balance are."
- "As a shareholder, I want to be able to see in detail how my current balance was arrived at."
- "As a shareholder, I want to be able to see if the coop has received my payment."

## Technologies Used

Coop Accounts is built using Node and an Express server.  Its views are managed with EJS Layouts.  Styling is done using a combination of Bootstrap 4 and custom CSS.  It uses a Postgres database accessed using the Sequelize ORM.  Authentication & authorization are handled using Express-session, Bcrypt, PassportJS, and Helmet.

## App Overview

### Front End

The nav bar at the top of all pages contains links tailored to the user's login and administrator status.  All users are provided a link to these documents.  Logged-out users are given login and registration links.  Logged-in, non-administrator users are given links to log out, to update or delete their user account, and to their account homepage.  Logged-in, administrator users are given the same links as non-administrators (substituting the shareholder index for the single-account page), plus links to add new transactions & dues schemes.

![Screenshot of shareholder index](./public/images/indexSS.png)
The Shareholder Index page at /shareholders displays a list of all current shareholders, their unit number, and their current overall balance.  Since one of my user stories describes a user who wants to quickly see who is behind on their dues payments, negative balances are made to stand out by displaying them in red and using a slightly larger font.  Clicking on any shareholder's chart row links to their Show Shareholder page.  The clickability of the chart rows is made more intuitive by giving each row the same color-inversion mouseover effect shared by all buttons in the app, and also by on-screen instructions.


![Screenshot of show shareholder page](./public/images/showSS.png)
The Show Shareholder page at /shareholders/:id is the default landing page for logged-in, non-administrator shareholders, and also where administrators would go to examine individual accounts.  Since once of my user stories describes a shareholder who wants to quickly find out what they owe, their current monthly dues rate and current overall balance are listed at the top of the screen.

Below that is a graph showing the shareholder's balance history and a list of the most recent transactions on their account.  These are displayed to help individual shareholders understand how their current balance was arrived at, and also to allow them to verify that the coop's records for things like check numbers and payment amounts match the shareholder's own personal records.  By default, only the last 2 years' account history is displayed, but a button allows the viewer to toggle between the 2-year view and the shareholder's entire account history.  A search field allows the viewer to filter the transaction list by check number.  Administrators are additionally provided with buttons to edit or delete each listed payment.  Dues charges do not have those buttons, since dues are calculated automatically, and not even adminstrators should have the ability to modify them individually.

The running balance graph is generated by a query sent to the quickchart.io API.  To maximize readiblity, it charts only end-of-month balances.  Graphing daily balances would result in a mass of zig-zagging lines that is more difficult to interpret.


![Screenshot of update dues page](./public/images/duesSS.png)
Most forms in the app are pretty straightforward, but the Update Dues form at /dues/new may be a bit more confusing for newcomers.  Despite the word 'update' in the header, the form's purpose is mainly to **create** dues database entries, and so is routed as a new/create route pair.
Dues adjustments happen to the entire building at once, so the form requires the user to enter new monthly dues charges for every class of unit, along with the date that change takes effect.

### Back End

#### Database Models

![Database entity relationship diagram](./public/images/dbERD.png)
This app makes use of five database models:  

1. The most connected one is the Shareholder model, which holds the shareholder's name (with room for a co-owner's name also) and the timespan of their tenancy.  

2. Shareholders may be associated with up to one User model.  The User model contains the necessary information for managing app authentication & authorization.  I've constructed it as a separate entity from the Shareholder model because while no shareholder is required to have any User attributes, if they have any, they must have them all.  A shareholder doesn't need to have a password, for instance, but if they do have one, they also need an email address.

3. Shareholders are associated with many transactions.  The Transaction model is used specifically for payments made by shareholders, not for charges levied against them.

4. Shareholders and Units are associated in a 1:1 relationship.  These two models could also potentially have been fused together, but I constructed them as separate entities to allow for future app expansion that would support units having multiple shareholders over time.  Also, on a conceptual level, Dues are determined by & charged to a Unit, and the Shareholder is responsible for paying those charges (via a Transaction) by virtue of the Shareholder's relationship to that Unit.  It seemed most natural for the database structure to reflect that.

5. The Dues model is probably the app's least intuitive model.  I constructed it with the intention of making the process of charging fees to shareholders as foolproof as possible - there is little worse than mistakenly charging a shareholder for an extra month because of a careless typo.  To minimize the risk of errors, the model's structure minimizes the number of separate dues database entries.  Each Dues entry consist simply of an amount, a unit size it applies to, a start date, and possibly an end date.  Even though dues are charged monthly, the app contains entries only for the date that the dollar amount of the monthly charge was last adjusted.  These entries are reconstructed into lists of monthly charges by the controller after retrieval from the database.  This allows for new charges to appear on the shareholder's account as time progresses without requiring any action from a human being.  This structure has the side benefit of minimizing database space usage - as it's currently seeded, the app contains nearly 3,000 Transaction entries, but only needs 27 Dues entries.

    Dues conceptually have a many-to-many relationship with Units.  Because of the unique nature of that many-to-many relationship, though, Dues are not associated to any other model on a database level.  Units have many dues values over time as building maintenance expenses inevitably increase.  Dues charges are scaled according to unit size, so any given monthly Dues amount will be relevant to all units of a given size.  The two models are therefore associated (in the controller, not the database) via the 'size' (i.e. unit size) row in each model.  A given medium-size unit is related to all medium-size dues entries, and a given medium-size dues entry is related to all medium-size units.

#### RESTful Routes

![Chart of app routes](./public/images/routes.png)
For the most part, the app uses standard RESTful routing.  User IDs were left out of User-related URLs because they were unnecessary to perform their function, and because it seemed like everything related to user accounts should be kept as private as possible.

## Unsolved mysteries and future directions

- The flash messages displayed in the app usually work, but only usually.  I've fixed the bugs that I've been able to reproduce, but bugs that appear and vanish at random are harder to figure out.

- The app is currently functional when viewed on mobile devices, but some charts are too wide to display elegantly.

- While the current registration form is great for letting people explore the interior of the app, freely letting strangers become administrators and pick units is clearly not ok.

- A more complete set of CRUD functions covering all models could be useful.  A Dues index could help people understand what is going on behind the scenes with dues.  A Shareholder Create function would let the app handle move-ins and move-outs.

- Making graphs with quickchart.io has been interesting as practice using APIs, but that API is pretty limited in its styling options.  There are npm packages that could make much better-looking, interactive graphs.