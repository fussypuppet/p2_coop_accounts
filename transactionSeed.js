const db = require('./models');

let unit1StartingCheck = 1100;
let unit2StartingCheck = 401;

db.transaction.bulkCreate([
    {
        date: "04/10/2010",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "05/10/2010",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "06/10/2010",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "07/10/2010",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "08/10/2010",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "09/10/2010",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "10/10/2010",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "11/10/2010",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "12/10/2010",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "01/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "02/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "03/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "04/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "05/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "06/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "07/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "08/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "09/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "10/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "11/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "12/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "01/10/2012",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "02/10/2012",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "03/10/2012",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "04/10/2012",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "05/10/2012",
        amount: 675,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "06/10/2012",
        amount: 350,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "07/10/2012",
        amount: 350,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "08/10/2012",
        amount: 350,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "09/10/2012",
        amount: 350,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "10/10/2012",
        amount: 350,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "11/10/2012",
        amount: 350,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "12/10/2012",
        amount: 350,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "01/10/2013",
        amount: 350,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "02/10/2013",
        amount: 350,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "03/10/2013",
        amount: 350,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "04/10/2013",
        amount: 360,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "05/10/2013",
        amount: 360,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "06/10/2013",
        amount: 360,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "07/10/2013",
        amount: 360,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "08/10/2013",
        amount: 360,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "09/10/2013",
        amount: 360,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "10/10/2013",
        amount: 360,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "11/10/2013",
        amount: 360,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "12/10/2013",
        amount: 360,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "01/10/2014",
        amount: 360,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "02/10/2014",
        amount: 360,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "03/10/2014",
        amount: 360,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "04/10/2014",
        amount: 375,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "05/10/2014",
        amount: 375,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "06/10/2014",
        amount: 375,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "08/10/2014",
        amount: 750,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "09/10/2014",
        amount: 375,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "10/10/2014",
        amount: 375,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "11/10/2014",
        amount: 375,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "12/10/2014",
        amount: 375,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "01/10/2015",
        amount: 375,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "02/10/2015",
        amount: 375,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "03/10/2015",
        amount: 375,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "04/10/2015",
        amount: 395,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "05/10/2015",
        amount: 395,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "06/10/2015",
        amount: 395,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "07/10/2015",
        amount: 395,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "08/10/2015",
        amount: 395,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "09/10/2015",
        amount: 395,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "10/10/2015",
        amount: 395,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "11/10/2015",
        amount: 395,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "12/10/2015",
        amount: 395,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "01/10/2016",
        amount: 415,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "02/10/2016",
        amount: 415,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "03/10/2016",
        amount: 415,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "04/10/2016",
        amount: 415,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "05/10/2016",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "06/10/2016",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "07/10/2016",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "08/10/2016",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "09/10/2016",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "10/10/2016",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "11/10/2016",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "12/10/2016",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "01/10/2017",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "02/10/2017",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "03/10/2017",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "04/10/2017",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "05/10/2017",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "06/10/2017",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "07/10/2017",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "08/10/2017",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "09/10/2017",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "10/10/2017",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "11/10/2017",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "12/10/2017",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "01/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "02/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "03/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "04/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "05/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "06/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "07/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "08/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "09/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "10/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "11/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "1/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "01/10/2019",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "02/10/2019",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "03/10/2019",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "04/10/2019",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "05/10/2019",
        amount: 510,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "06/10/2019",
        amount: 510,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "07/10/2019",
        amount: 510,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "08/10/2019",
        amount: 510,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "09/10/2019",
        amount: 510,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "10/10/2019",
        amount: 510,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "11/10/2019",
        amount: 510,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "12/10/2019",
        amount: 510,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "01/10/2020",
        amount: 510,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "02/10/2020",
        amount: 510,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "03/10/2020",
        amount: 250,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "04/10/2020",
        amount: 250,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "05/10/2020",
        amount: 1030,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    },    {
        date: "06/10/2020",
        amount: 510,
        checkNumber: unit1StartingCheck++,
        category: "dues",
        shareholderId: 1
    }    
])
.then(result => {
    console.log("lots of transactions added successfully");
})
.catch(error => {
    console.log(`Error seeding transactions: ${error}`);
})


db.transaction.bulkCreate([
    {
        date: "04/10/2010",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "05/10/2010",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "06/10/2010",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "07/10/2010",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "08/10/2010",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "10/10/2010",
        amount: 650,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "11/10/2010",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "12/10/2010",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "01/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "02/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "03/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "04/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "05/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "06/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "07/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "08/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "09/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "10/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "11/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "12/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "01/10/2012",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "02/10/2012",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "03/10/2012",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "04/10/2012",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "05/10/2012",
        amount: 375,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "06/10/2012",
        amount: 350,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "07/10/2012",
        amount: 350,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "08/10/2012",
        amount: 350,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "09/10/2012",
        amount: 350,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "10/10/2012",
        amount: 350,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "11/10/2012",
        amount: 350,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "12/10/2012",
        amount: 350,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "01/10/2013",
        amount: 350,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "02/10/2013",
        amount: 350,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "03/10/2013",
        amount: 350,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "04/10/2013",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "05/10/2013",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "06/10/2013",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "07/10/2013",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "08/10/2013",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "09/10/2013",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "10/10/2013",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "11/10/2013",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "12/10/2013",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "01/10/2014",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "02/10/2014",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "03/10/2014",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "04/10/2014",
        amount: 375,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "05/10/2014",
        amount: 375,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "06/10/2014",
        amount: 375,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "08/10/2014",
        amount: 750,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "09/10/2014",
        amount: 375,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "10/10/2014",
        amount: 375,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "11/10/2014",
        amount: 375,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "12/10/2014",
        amount: 375,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "01/10/2015",
        amount: 375,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "02/10/2015",
        amount: 375,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "03/10/2015",
        amount: 375,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "04/10/2015",
        amount: 395,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "05/10/2015",
        amount: 395,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "06/10/2015",
        amount: 395,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "07/10/2015",
        amount: 395,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "08/10/2015",
        amount: 395,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "09/10/2015",
        amount: 395,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "10/10/2015",
        amount: 395,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "11/10/2015",
        amount: 395,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "12/10/2015",
        amount: 395,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "01/10/2016",
        amount: 415,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "02/10/2016",
        amount: 415,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "04/10/2016",
        amount: 830,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "05/10/2016",
        amount: 430,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "06/10/2016",
        amount: 430,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "07/10/2016",
        amount: 430,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "08/10/2016",
        amount: 430,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "09/10/2016",
        amount: 430,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "10/10/2016",
        amount: 430,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "11/10/2016",
        amount: 430,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "12/10/2016",
        amount: 430,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "01/10/2017",
        amount: 430,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "02/10/2017",
        amount: 430,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "04/10/2017",
        amount: 860,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "06/10/2017",
        amount: 930,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "07/10/2017",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "08/10/2017",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "09/10/2017",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "10/10/2017",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "11/10/2017",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "12/10/2017",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "01/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "02/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "03/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "04/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "05/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "06/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "07/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "08/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "09/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "10/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "11/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "1/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "01/10/2019",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "02/10/2019",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "03/10/2019",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "04/10/2019",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "05/10/2019",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "06/10/2019",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "07/10/2019",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "08/10/2019",
        amount: 645,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "09/10/2019",
        amount: 510,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "10/10/2019",
        amount: 510,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "11/10/2019",
        amount: 510,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "12/10/2019",
        amount: 510,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "01/10/2020",
        amount: 510,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "02/10/2020",
        amount: 510,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "03/10/2020",
        amount: 510,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "04/10/2020",
        amount: 510,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "05/10/2020",
        amount: 510,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    },    {
        date: "06/10/2020",
        amount: 510,
        checkNumber: unit2StartingCheck++,
        category: "dues",
        shareholderId: 2
    }
])
.then(result => {
    console.log("lots of transactions added successfully");
})
.catch(error => {
    console.log(`Error seeding transactions: ${error}`);
})