const db = require('./models');

let unit22StartingCheck = 1503;

db.transaction.bulkCreate([
    {
        date: "10/10/2014",
        amount: 400,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "11/10/2014",
        amount: 400,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "12/10/2014",
        amount: 400,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "01/10/2015",
        amount: 400,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "02/10/2015",
        amount: 400,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "03/10/2015",
        amount: 400,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "04/10/2015",
        amount: 425,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "05/10/2015",
        amount: 425,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "06/10/2015",
        amount: 425,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "07/10/2015",
        amount: 425,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "08/10/2015",
        amount: 425,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "09/10/2015",
        amount: 425,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "10/10/2015",
        amount: 425,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "11/10/2015",
        amount: 425,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "12/10/2015",
        amount: 425,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "01/10/2016",
        amount: 445,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "02/10/2016",
        amount: 445,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "03/10/2016",
        amount: 445,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "04/10/2016",
        amount: 445,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "05/10/2016",
        amount: 445,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "06/10/2016",
        amount: 445,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "07/10/2016",
        amount: 545,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "08/10/2016",
        amount: 470,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "09/10/2016",
        amount: 470,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "10/10/2016",
        amount: 470,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "11/10/2016",
        amount: 470,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "12/10/2016",
        amount: 470,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "01/10/2017",
        amount: 470,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "02/10/2017",
        amount: 470,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "03/10/2017",
        amount: 470,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "04/10/2017",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "05/10/2017",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "06/10/2017",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "07/10/2017",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "08/10/2017",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "09/10/2017",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "10/10/2017",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "11/10/2017",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "12/10/2017",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "01/10/2018",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "02/10/2018",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "03/10/2018",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "04/10/2018",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "05/10/2018",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "06/10/2018",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "07/10/2018",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "08/10/2018",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "09/10/2018",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "10/10/2018",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "11/10/2018",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "12/10/2018",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "01/10/2019",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "02/10/2019",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "03/10/2019",
        amount: 515,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "04/10/2019",
        amount: 570,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "05/10/2019",
        amount: 570,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "06/10/2019",
        amount: 570,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "07/10/2019",
        amount: 570,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "08/10/2019",
        amount: 570,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "09/10/2019",
        amount: 570,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "10/10/2019",
        amount: 570,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "11/10/2019",
        amount: 570,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "12/10/2019",
        amount: 570,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "01/10/2020",
        amount: 570,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "02/10/2020",
        amount: 570,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "03/10/2020",
        amount: 570,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "04/10/2020",
        amount: 570,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "05/10/2020",
        amount: 570,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    },    {
        date: "06/10/2020",
        amount: 570,
        checkNumber: unit22StartingCheck++,
        category: "dues payment",
        shareholderId: 9
    }    
])
.then(result => {
    console.log("lots of transactions added successfully");
})
.catch(error => {
    console.log(`Error seeding transactions: ${error}`);
})