const db = require('./models');

let unit27StartingCheck = 1272;

db.transaction.bulkCreate([
    {
        date: "04/10/2010",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "05/10/2010",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "06/10/2010",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "07/10/2010",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "08/10/2010",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "09/10/2010",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "10/10/2010",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "11/10/2010",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "12/10/2010",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "01/10/2011",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "02/10/2011",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "03/10/2011",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "04/10/2011",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "05/10/2011",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "06/10/2011",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "07/10/2011",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "08/10/2011",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "09/10/2011",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "10/10/2011",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "11/10/2011",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "12/10/2011",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "01/10/2012",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "02/10/2012",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "03/10/2012",
        amount: 300,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "04/10/2012",
        amount: 320,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "05/10/2012",
        amount: 320,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "06/10/2012",
        amount: 320,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "07/10/2012",
        amount: 320,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "08/10/2012",
        amount: 320,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "09/10/2012",
        amount: 320,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "10/10/2012",
        amount: 320,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "11/10/2012",
        amount: 320,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "12/10/2012",
        amount: 320,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "01/10/2013",
        amount: 320,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "02/10/2013",
        amount: 320,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "03/10/2013",
        amount: 320,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "04/10/2013",
        amount: 325,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "05/10/2013",
        amount: 325,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "06/10/2013",
        amount: 325,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "07/10/2013",
        amount: 325,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "08/10/2013",
        amount: 325,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "09/10/2013",
        amount: 325,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "10/10/2013",
        amount: 325,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "11/10/2013",
        amount: 325,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "12/10/2013",
        amount: 325,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "01/10/2014",
        amount: 325,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "02/10/2014",
        amount: 325,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "03/10/2014",
        amount: 325,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "04/10/2014",
        amount: 345,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "05/10/2014",
        amount: 345,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "06/10/2014",
        amount: 345,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "07/10/2014",
        amount: 345,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "08/10/2014",
        amount: 345,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "09/10/2014",
        amount: 345,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "10/10/2014",
        amount: 345,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "11/10/2014",
        amount: 345,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "12/10/2014",
        amount: 345,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "01/10/2015",
        amount: 345,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "02/10/2015",
        amount: 345,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "03/10/2015",
        amount: 345,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "04/10/2015",
        amount: 355,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "05/10/2015",
        amount: 355,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "06/10/2015",
        amount: 355,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "07/10/2015",
        amount: 355,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "08/10/2015",
        amount: 355,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "09/10/2015",
        amount: 355,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "10/10/2015",
        amount: 355,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "11/10/2015",
        amount: 355,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "12/10/2015",
        amount: 355,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "01/10/2016",
        amount: 375,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "02/10/2016",
        amount: 375,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "03/10/2016",
        amount: 375,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "04/10/2016",
        amount: 375,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "05/10/2016",
        amount: 375,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "06/10/2016",
        amount: 375,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "07/10/2016",
        amount: 375,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "08/10/2016",
        amount: 375,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "09/10/2016",
        amount: 375,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "10/10/2016",
        amount: 375,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "11/10/2016",
        amount: 375,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "12/10/2016",
        amount: 375,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "01/10/2017",
        amount: 375,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "02/10/2017",
        amount: 375,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "03/10/2017",
        amount: 375,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "04/10/2017",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "05/10/2017",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "06/10/2017",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "07/10/2017",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "08/10/2017",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "09/10/2017",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "10/10/2017",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "11/10/2017",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "12/10/2017",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "01/10/2018",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "02/10/2018",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "03/10/2018",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "04/10/2018",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "05/10/2018",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "06/10/2018",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "07/10/2018",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "08/10/2018",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "09/10/2018",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "10/10/2018",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "11/10/2018",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "12/10/2018",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "01/10/2019",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "02/10/2019",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "03/10/2019",
        amount: 395,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "04/10/2019",
        amount: 430,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "05/10/2019",
        amount: 430,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "06/10/2019",
        amount: 430,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "07/10/2019",
        amount: 430,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "08/10/2019",
        amount: 430,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "09/10/2019",
        amount: 430,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "10/10/2019",
        amount: 430,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "11/10/2019",
        amount: 430,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "12/10/2019",
        amount: 430,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "01/10/2020",
        amount: 430,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "02/10/2020",
        amount: 430,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "03/10/2020",
        amount: 430,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "04/10/2020",
        amount: 430,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "05/10/2020",
        amount: 430,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    },    {
        date: "06/10/2020",
        amount: 430,
        checkNumber: unit27StartingCheck++,
        category: "dues payment",
        shareholderId: 5
    }    
])
.then(result => {
    console.log("lots of transactions added successfully");
})
.catch(error => {
    console.log(`Error seeding transactions: ${error}`);
})