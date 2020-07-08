const db = require('./models');

let unit1StartingCheck = 1100;
let unit2StartingCheck = 401;
let unit10StartingCheck = 00003438555;
let unit11StartingCheck = 254;
let unit19StartingCheck = 105;
let unit20StartingCheck = 2476;
let unit28StartingCheck = 1026;
let unit29StartingCheck = 432;
let unit4StartingCheck = 2441;
let unit5StartingCheck = 333;
let unit12StartingCheck = 730;
let unit14StartingCheck = 300532298;
let unit21StartingCheck = 198;
let unit22StartingCheck = 1503;
let unit3StartingCheck = 408;
let unit6StartingCheck = 147;
let unit7StartingCheck = 714;
let unit8StartingCheck = 101;
let unit9StartingCheck = 2601;
let unit15StartingCheck = 258;
let unit16StartingCheck = 145;
let unit17StartingCheck = 184;
let unit18StartingCheck = 1054;
let unit24StartingCheck = 90002041;
let unit25StartingCheck = 70204894;

db.transaction.bulkCreate([
    {
        date: "04/10/2010",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "05/10/2010",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "06/10/2010",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "07/10/2010",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "08/10/2010",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "09/10/2010",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "10/10/2010",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "11/10/2010",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "12/10/2010",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "01/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "02/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "03/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "04/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "05/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "06/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "07/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "08/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "09/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "10/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "11/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "12/10/2011",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "01/10/2012",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "02/10/2012",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "03/10/2012",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "04/10/2012",
        amount: 325,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "05/10/2012",
        amount: 355,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "06/10/2012",
        amount: 350,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "07/10/2012",
        amount: 300,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "08/10/2012",
        amount: 350,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "09/10/2012",
        amount: 350,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "10/10/2012",
        amount: 350,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "11/10/2012",
        amount: 350,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "12/10/2012",
        amount: 400,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "01/10/2013",
        amount: 350,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "02/10/2013",
        amount: 350,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "03/10/2013",
        amount: 350,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "04/10/2013",
        amount: 360,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "06/10/2013",
        amount: 360,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "07/10/2013",
        amount: 360,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "08/10/2013",
        amount: 360,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "09/10/2013",
        amount: 360,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "10/10/2013",
        amount: 720,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "11/10/2013",
        amount: 360,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "12/10/2013",
        amount: 360,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "01/10/2014",
        amount: 360,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "02/10/2014",
        amount: 360,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "03/10/2014",
        amount: 360,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "04/10/2014",
        amount: 375,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "05/10/2014",
        amount: 375,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "06/10/2014",
        amount: 375,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "07/10/2014",
        amount: 375,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "08/10/2014",
        amount: 375,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "09/10/2014",
        amount: 375,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "10/10/2014",
        amount: 375,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "11/10/2014",
        amount: 375,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "12/10/2014",
        amount: 375,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "01/10/2015",
        amount: 375,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "02/10/2015",
        amount: 375,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "03/10/2015",
        amount: 375,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "04/10/2015",
        amount: 395,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "05/10/2015",
        amount: 395,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "06/10/2015",
        amount: 395,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "07/10/2015",
        amount: 395,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "08/10/2015",
        amount: 395,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "09/10/2015",
        amount: 395,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "10/10/2015",
        amount: 395,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "11/10/2015",
        amount: 395,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "12/10/2015",
        amount: 395,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "01/10/2016",
        amount: 1245,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "04/10/2016",
        amount: 415,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "05/10/2016",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "06/10/2016",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "07/10/2016",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "08/10/2016",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "09/10/2016",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "10/10/2016",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "11/10/2016",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "12/10/2016",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "01/10/2017",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "02/10/2017",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "03/10/2017",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "04/10/2017",
        amount: 430,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "05/10/2017",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "06/10/2017",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "07/10/2017",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "08/10/2017",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "09/10/2017",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "10/10/2017",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "11/10/2017",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "12/10/2017",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "01/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "02/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "03/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "04/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "05/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "06/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "07/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "08/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "09/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "10/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "11/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "12/10/2018",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "01/10/2019",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "02/10/2019",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "03/10/2019",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "04/10/2019",
        amount: 465,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "05/10/2019",
        amount: 510,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "06/10/2019",
        amount: 510,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "07/10/2019",
        amount: 510,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "08/10/2019",
        amount: 510,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "09/10/2019",
        amount: 510,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "10/10/2019",
        amount: 510,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "11/10/2019",
        amount: 510,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "12/10/2019",
        amount: 510,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "01/10/2020",
        amount: 510,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "02/10/2020",
        amount: 510,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "03/10/2020",
        amount: 250,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "04/10/2020",
        amount: 250,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "05/10/2020",
        amount: 1030,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
        shareholderId: 1
    },    {
        date: "06/10/2020",
        amount: 510,
        checkNumber: unit1StartingCheck++,
        category: "dues payment",
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
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "05/10/2010",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "06/10/2010",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "07/10/2010",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "08/10/2010",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "10/10/2010",
        amount: 650,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "11/10/2010",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "12/10/2010",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "01/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "02/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "03/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "04/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "05/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "06/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "07/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "08/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "09/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "10/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "11/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "12/10/2011",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "01/10/2012",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "02/10/2012",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "03/10/2012",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "04/10/2012",
        amount: 325,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "05/10/2012",
        amount: 375,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "06/10/2012",
        amount: 350,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "07/10/2012",
        amount: 350,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "08/10/2012",
        amount: 350,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "09/10/2012",
        amount: 350,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "10/10/2012",
        amount: 350,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "11/10/2012",
        amount: 350,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "12/10/2012",
        amount: 350,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "01/10/2013",
        amount: 350,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "02/10/2013",
        amount: 350,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "03/10/2013",
        amount: 350,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "04/10/2013",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "05/10/2013",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "06/10/2013",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "07/10/2013",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "08/10/2013",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "09/10/2013",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "10/10/2013",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "11/10/2013",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "12/10/2013",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "01/10/2014",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "02/10/2014",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "03/10/2014",
        amount: 360,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "04/10/2014",
        amount: 375,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "05/10/2014",
        amount: 375,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "06/10/2014",
        amount: 375,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "08/10/2014",
        amount: 750,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "09/10/2014",
        amount: 375,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "10/10/2014",
        amount: 375,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "11/10/2014",
        amount: 375,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "12/10/2014",
        amount: 375,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "01/10/2015",
        amount: 375,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "02/10/2015",
        amount: 375,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "03/10/2015",
        amount: 375,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "04/10/2015",
        amount: 395,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "05/10/2015",
        amount: 395,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "06/10/2015",
        amount: 395,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "07/10/2015",
        amount: 395,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "08/10/2015",
        amount: 395,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "09/10/2015",
        amount: 395,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "10/10/2015",
        amount: 395,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "11/10/2015",
        amount: 395,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "12/10/2015",
        amount: 395,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "01/10/2016",
        amount: 415,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "02/10/2016",
        amount: 415,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "04/10/2016",
        amount: 830,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "05/10/2016",
        amount: 430,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "06/10/2016",
        amount: 430,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "07/10/2016",
        amount: 430,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "08/10/2016",
        amount: 430,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "09/10/2016",
        amount: 430,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "10/10/2016",
        amount: 430,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "11/10/2016",
        amount: 430,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "12/10/2016",
        amount: 430,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "01/10/2017",
        amount: 430,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "02/10/2017",
        amount: 430,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "04/10/2017",
        amount: 860,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "06/10/2017",
        amount: 930,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "07/10/2017",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "08/10/2017",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "09/10/2017",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "10/10/2017",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "11/10/2017",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "12/10/2017",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "01/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "02/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "03/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "04/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "05/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "06/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "07/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "08/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "09/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "10/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "11/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "12/10/2018",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "01/10/2019",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "02/10/2019",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "03/10/2019",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "04/10/2019",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "05/10/2019",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "06/10/2019",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "07/10/2019",
        amount: 465,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "08/10/2019",
        amount: 645,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "09/10/2019",
        amount: 510,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "10/10/2019",
        amount: 510,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "11/10/2019",
        amount: 510,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "12/10/2019",
        amount: 510,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "01/10/2020",
        amount: 510,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "02/10/2020",
        amount: 510,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "03/10/2020",
        amount: 510,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "04/10/2020",
        amount: 510,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "05/10/2020",
        amount: 510,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
    },    {
        date: "06/10/2020",
        amount: 510,
        checkNumber: unit2StartingCheck++,
        category: "dues payment",
        shareholderId: 2
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
        date: "07/10/2010",
        amount: 325,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "08/10/2010",
        amount: 325,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "09/10/2010",
        amount: 325,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "10/10/2010",
        amount: 325,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "11/10/2010",
        amount: 325,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "12/10/2010",
        amount: 325,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "01/10/2011",
        amount: 325,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "02/10/2011",
        amount: 325,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "03/10/2011",
        amount: 325,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "04/10/2011",
        amount: 325,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "05/10/2011",
        amount: 325,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "06/10/2011",
        amount: 325,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "07/10/2011",
        amount: 325,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "08/10/2011",
        amount: 325,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "09/10/2011",
        amount: 325,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "10/10/2011",
        amount: 325,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "11/10/2011",
        amount: 325,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "12/10/2011",
        amount: 325,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "01/10/2012",
        amount: 325,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "02/10/2012",
        amount: 325,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "03/10/2012",
        amount: 325,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "04/10/2012",
        amount: 325,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "05/10/2012",
        amount: 675,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "06/10/2012",
        amount: 350,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "07/10/2012",
        amount: 350,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "08/10/2012",
        amount: 350,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "09/10/2012",
        amount: 350,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "10/10/2012",
        amount: 350,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "11/10/2012",
        amount: 350,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "12/10/2012",
        amount: 350,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "01/10/2013",
        amount: 350,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "02/10/2013",
        amount: 350,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "03/10/2013",
        amount: 350,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "04/10/2013",
        amount: 360,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "05/10/2013",
        amount: 360,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "06/10/2013",
        amount: 360,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "07/10/2013",
        amount: 360,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "08/10/2013",
        amount: 360,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "09/10/2013",
        amount: 360,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "10/10/2013",
        amount: 360,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "11/10/2013",
        amount: 340,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "12/10/2013",
        amount: 360,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "01/10/2014",
        amount: 360,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "02/10/2014",
        amount: 360,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "03/10/2014",
        amount: 380,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "04/10/2014",
        amount: 375,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "05/10/2014",
        amount: 375,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "06/10/2014",
        amount: 375,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "08/10/2014",
        amount: 750,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "09/10/2014",
        amount: 375,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "10/10/2014",
        amount: 375,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "11/10/2014",
        amount: 375,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "12/10/2014",
        amount: 375,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "01/10/2015",
        amount: 375,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "02/10/2015",
        amount: 375,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "03/10/2015",
        amount: 375,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "04/10/2015",
        amount: 395,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "05/10/2015",
        amount: 395,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "06/10/2015",
        amount: 395,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "07/10/2015",
        amount: 395,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "08/10/2015",
        amount: 395,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "09/10/2015",
        amount: 395,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "10/10/2015",
        amount: 395,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "11/10/2015",
        amount: 395,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "12/10/2015",
        amount: 395,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "01/10/2016",
        amount: 415,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "02/10/2016",
        amount: 415,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "03/10/2016",
        amount: 415,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "04/10/2016",
        amount: 415,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "05/10/2016",
        amount: 430,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "06/10/2016",
        amount: 430,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "07/10/2016",
        amount: 430,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "08/10/2016",
        amount: 430,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "09/10/2016",
        amount: 430,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "10/10/2016",
        amount: 430,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "11/10/2016",
        amount: 430,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "12/10/2016",
        amount: 430,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "01/10/2017",
        amount: 430,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "02/10/2017",
        amount: 430,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "03/10/2017",
        amount: 430,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "06/10/2017",
        amount: 565,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "07/10/2017",
        amount: 565,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "08/10/2017",
        amount: 565,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "09/10/2017",
        amount: 565,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "10/10/2017",
        amount: 565,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "11/10/2017",
        amount: 565,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "12/10/2017",
        amount: 565,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "01/10/2018",
        amount: 565,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "02/10/2018",
        amount: 560,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "03/10/2018",
        amount: 465,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "04/10/2018",
        amount: 465,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "05/10/2018",
        amount: 465,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "06/10/2018",
        amount: 465,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "07/10/2018",
        amount: 465,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "08/10/2018",
        amount: 465,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "09/10/2018",
        amount: 465,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "10/10/2018",
        amount: 465,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "11/10/2018",
        amount: 465,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "12/10/2018",
        amount: 465,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "01/10/2019",
        amount: 465,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "02/10/2019",
        amount: 465,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "03/10/2019",
        amount: 465,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "04/10/2019",
        amount: 465,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "05/10/2019",
        amount: 510,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "06/10/2019",
        amount: 510,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "07/10/2019",
        amount: 510,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "08/10/2019",
        amount: 510,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "09/10/2019",
        amount: 510,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "10/10/2019",
        amount: 510,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "11/10/2019",
        amount: 510,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "12/10/2019",
        amount: 510,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "01/10/2020",
        amount: 510,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "02/10/2020",
        amount: 510,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "03/10/2020",
        amount: 250,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "04/10/2020",
        amount: 250,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "05/10/2020",
        amount: 1030,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
    },    {
        date: "06/10/2020",
        amount: 510,
        checkNumber: unit10StartingCheck++,
        category: "dues payment",
        shareholderId: 20
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
        date: "01/10/2011",
        amount: 325,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "02/10/2011",
        amount: 325,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "03/10/2011",
        amount: 325,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "04/10/2011",
        amount: 325,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "05/10/2011",
        amount: 325,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "06/10/2011",
        amount: 325,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "07/10/2011",
        amount: 325,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "08/10/2011",
        amount: 325,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "09/10/2011",
        amount: 325,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "10/10/2011",
        amount: 325,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "11/10/2011",
        amount: 325,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "12/10/2011",
        amount: 325,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "01/10/2012",
        amount: 325,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "02/10/2012",
        amount: 325,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "03/10/2012",
        amount: 325,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "04/10/2012",
        amount: 325,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "05/10/2012",
        amount: 325,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "06/10/2012",
        amount: 350,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "07/10/2012",
        amount: 350,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "08/10/2012",
        amount: 400,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "09/10/2012",
        amount: 350,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "10/10/2012",
        amount: 350,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "11/10/2012",
        amount: 350,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "01/10/2013",
        amount: 700,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "02/10/2013",
        amount: 350,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "03/10/2013",
        amount: 350,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "04/10/2013",
        amount: 360,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "05/10/2013",
        amount: 360,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "06/10/2013",
        amount: 360,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "07/10/2013",
        amount: 360,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "08/10/2013",
        amount: 360,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "09/10/2013",
        amount: 360,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "10/10/2013",
        amount: 360,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "11/10/2013",
        amount: 340,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "12/10/2013",
        amount: 360,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "01/10/2014",
        amount: 360,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "02/10/2014",
        amount: 360,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "03/10/2014",
        amount: 380,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "04/10/2014",
        amount: 375,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "05/10/2014",
        amount: 375,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "06/10/2014",
        amount: 375,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "08/10/2014",
        amount: 750,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "09/10/2014",
        amount: 375,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "10/10/2014",
        amount: 375,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "11/10/2014",
        amount: 375,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "12/10/2014",
        amount: 375,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "01/10/2015",
        amount: 375,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "02/10/2015",
        amount: 375,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "03/10/2015",
        amount: 375,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "04/10/2015",
        amount: 395,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "05/10/2015",
        amount: 375,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "06/10/2015",
        amount: 395,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "07/10/2015",
        amount: 395,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "08/10/2015",
        amount: 395,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "09/10/2015",
        amount: 415,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "10/10/2015",
        amount: 395,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "11/10/2015",
        amount: 395,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "12/10/2015",
        amount: 395,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "01/10/2016",
        amount: 415,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "02/10/2016",
        amount: 415,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "03/10/2016",
        amount: 415,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "04/10/2016",
        amount: 415,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "05/10/2016",
        amount: 430,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "06/10/2016",
        amount: 430,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "07/10/2016",
        amount: 430,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "08/10/2016",
        amount: 430,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "09/10/2016",
        amount: 430,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "10/10/2016",
        amount: 430,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "11/10/2016",
        amount: 430,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "12/10/2016",
        amount: 430,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "01/10/2017",
        amount: 430,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "03/10/2017",
        amount: 430,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "03/10/2017",
        amount: 430,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "04/10/2017",
        amount: 465,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "05/10/2017",
        amount: 465,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "06/10/2017",
        amount: 465,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "07/10/2017",
        amount: 465,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "08/10/2017",
        amount: 465,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "09/10/2017",
        amount: 465,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "10/10/2017",
        amount: 565,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "11/10/2017",
        amount: 565,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "12/10/2017",
        amount: 565,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "01/10/2018",
        amount: 465,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "02/10/2018",
        amount: 465,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "03/10/2018",
        amount: 465,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "04/10/2018",
        amount: 465,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "05/10/2018",
        amount: 465,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "06/10/2018",
        amount: 465,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "08/10/2018",
        amount: 465,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "08/10/2018",
        amount: 465,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "09/10/2018",
        amount: 465,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "10/10/2018",
        amount: 465,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "11/10/2018",
        amount: 465,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "12/10/2018",
        amount: 465,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "01/10/2019",
        amount: 465,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "02/10/2019",
        amount: 465,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "03/10/2019",
        amount: 465,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "04/10/2019",
        amount: 465,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "05/10/2019",
        amount: 510,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "05/10/2019",
        amount: 510,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "07/10/2019",
        amount: 510,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "08/10/2019",
        amount: 510,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "09/10/2019",
        amount: 510,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "10/10/2019",
        amount: 510,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "11/10/2019",
        amount: 510,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "12/10/2019",
        amount: 510,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "01/10/2020",
        amount: 510,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "02/10/2020",
        amount: 510,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "03/10/2020",
        amount: 250,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "04/10/2020",
        amount: 250,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "05/10/2020",
        amount: 1030,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
    },    {
        date: "06/10/2020",
        amount: 510,
        checkNumber: unit11StartingCheck++,
        category: "dues payment",
        shareholderId: 19
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
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "05/10/2010",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "06/10/2010",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "07/10/2010",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "08/10/2010",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "09/10/2010",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "10/10/2010",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "11/10/2010",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "12/10/2010",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "02/10/2011",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "02/10/2011",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "03/10/2011",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "04/10/2011",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "05/10/2011",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "06/10/2011",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "07/10/2011",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "08/10/2011",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "09/10/2011",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "10/10/2011",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "11/10/2011",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "12/10/2011",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "01/10/2012",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "02/10/2012",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "03/10/2012",
        amount: 325,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "04/10/2012",
        amount: 350,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "05/10/2012",
        amount: 350,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "06/10/2012",
        amount: 350,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "08/10/2012",
        amount: 350,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "08/10/2012",
        amount: 350,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "10/10/2012",
        amount: 350,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "10/10/2012",
        amount: 350,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "11/10/2012",
        amount: 350,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "12/10/2012",
        amount: 350,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "01/10/2013",
        amount: 350,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "02/10/2013",
        amount: 350,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "03/10/2013",
        amount: 350,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "04/10/2013",
        amount: 360,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "06/10/2013",
        amount: 720,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "07/10/2013",
        amount: 360,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "09/10/2013",
        amount: 360,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "09/10/2013",
        amount: 360,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "10/10/2013",
        amount: 360,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "11/10/2013",
        amount: 360,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "12/10/2013",
        amount: 360,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "01/10/2014",
        amount: 360,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "02/10/2014",
        amount: 360,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "03/10/2014",
        amount: 360,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "05/10/2014",
        amount: 375,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "05/10/2014",
        amount: 375,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "06/10/2014",
        amount: 375,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "08/10/2014",
        amount: 375,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "08/10/2014",
        amount: 375,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "10/10/2014",
        amount: 750,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "11/10/2014",
        amount: 375,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "12/10/2014",
        amount: 375,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "01/10/2015",
        amount: 375,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "02/10/2015",
        amount: 375,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "03/10/2015",
        amount: 375,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "04/10/2015",
        amount: 395,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "05/10/2015",
        amount: 395,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "06/10/2015",
        amount: 395,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "07/10/2015",
        amount: 395,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "08/10/2015",
        amount: 395,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "09/10/2015",
        amount: 395,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "10/10/2015",
        amount: 395,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "11/10/2015",
        amount: 395,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "12/10/2015",
        amount: 395,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "01/10/2016",
        amount: 415,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "02/10/2016",
        amount: 415,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "03/10/2016",
        amount: 415,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "04/10/2016",
        amount: 415,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "05/10/2016",
        amount: 430,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "06/10/2016",
        amount: 430,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "07/10/2016",
        amount: 430,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "08/10/2016",
        amount: 430,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "09/10/2016",
        amount: 430,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "10/10/2016",
        amount: 430,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "12/10/2016",
        amount: 430,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "12/10/2016",
        amount: 430,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "01/10/2017",
        amount: 430,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "02/10/2017",
        amount: 430,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "03/10/2017",
        amount: 430,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "04/10/2017",
        amount: 430,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "05/10/2017",
        amount: 465,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "07/10/2017",
        amount: 465,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "07/10/2017",
        amount: 465,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "08/10/2017",
        amount: 465,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "10/10/2017",
        amount: 465,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "10/10/2017",
        amount: 465,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "12/10/2017",
        amount: 930,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "01/10/2018",
        amount: 465,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "02/10/2018",
        amount: 465,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "03/10/2018",
        amount: 465,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "04/10/2018",
        amount: 465,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "05/10/2018",
        amount: 465,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "06/10/2018",
        amount: 465,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "07/10/2018",
        amount: 465,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "08/10/2018",
        amount: 465,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "09/10/2018",
        amount: 465,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "10/10/2018",
        amount: 465,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "11/10/2018",
        amount: 465,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "12/10/2018",
        amount: 465,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "01/10/2019",
        amount: 465,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "02/10/2019",
        amount: 465,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "03/10/2019",
        amount: 465,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "04/10/2019",
        amount: 465,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "05/10/2019",
        amount: 510,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "06/10/2019",
        amount: 510,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "07/10/2019",
        amount: 510,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "08/10/2019",
        amount: 510,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "09/10/2019",
        amount: 510,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "10/10/2019",
        amount: 510,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "12/10/2019",
        amount: 510,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "12/10/2019",
        amount: 510,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "01/10/2020",
        amount: 510,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "02/10/2020",
        amount: 510,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "03/10/2020",
        amount: 250,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "04/10/2020",
        amount: 250,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "05/10/2020",
        amount: 1030,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
    },    {
        date: "06/10/2020",
        amount: 510,
        checkNumber: unit19StartingCheck++,
        category: "dues payment",
        shareholderId: 12
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
        date: "03/10/2013",
        amount: 350,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "04/10/2013",
        amount: 350,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "05/10/2013",
        amount: 350,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "06/10/2013",
        amount: 420,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "07/10/2013",
        amount: 360,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "08/10/2013",
        amount: 350,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "09/10/2013",
        amount: 360,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "10/10/2013",
        amount: 360,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "11/10/2013",
        amount: 360,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "12/10/2013",
        amount: 360,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "01/10/2014",
        amount: 360,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "02/10/2014",
        amount: 360,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "03/10/2014",
        amount: 360,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "04/10/2014",
        amount: 375,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "05/10/2014",
        amount: 375,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "06/10/2014",
        amount: 375,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "07/10/2014",
        amount: 375,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "08/10/2014",
        amount: 750,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "09/10/2014",
        amount: 375,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "10/10/2014",
        amount: 375,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "11/10/2014",
        amount: 375,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "12/10/2014",
        amount: 375,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "01/10/2015",
        amount: 375,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "02/10/2015",
        amount: 375,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "03/10/2015",
        amount: 375,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "04/10/2015",
        amount: 375,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "05/10/2015",
        amount: 375,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "06/10/2015",
        amount: 375,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "07/10/2015",
        amount: 395,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "08/10/2015",
        amount: 455,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "09/10/2015",
        amount: 395,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "10/10/2015",
        amount: 395,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "11/10/2015",
        amount: 395,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "12/10/2015",
        amount: 395,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "01/10/2016",
        amount: 415,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "02/10/2016",
        amount: 415,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "03/10/2016",
        amount: 415,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "04/10/2016",
        amount: 430,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "05/10/2016",
        amount: 430,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "06/10/2016",
        amount: 430,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "07/10/2016",
        amount: 430,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "08/10/2016",
        amount: 430,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "09/10/2016",
        amount: 430,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "10/10/2016",
        amount: 430,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "11/10/2016",
        amount: 430,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "12/10/2016",
        amount: 430,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "01/10/2017",
        amount: 430,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "02/10/2017",
        amount: 430,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "03/10/2017",
        amount: 430,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "04/10/2017",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "05/10/2017",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "06/10/2017",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "07/10/2017",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "08/10/2017",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "09/10/2017",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "10/10/2017",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "11/10/2017",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "12/10/2017",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "01/10/2018",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "02/10/2018",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "03/10/2018",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "04/10/2018",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "05/10/2018",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "06/10/2018",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "07/10/2018",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "08/10/2018",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "09/10/2018",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "10/10/2018",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "11/10/2018",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "12/10/2018",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "01/10/2019",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "02/10/2019",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "03/10/2019",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "04/10/2019",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "05/10/2019",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "06/10/2019",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "07/10/2019",
        amount: 465,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "08/10/2019",
        amount: 645,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "09/10/2019",
        amount: 510,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "10/10/2019",
        amount: 510,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "11/10/2019",
        amount: 510,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "12/10/2019",
        amount: 510,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "01/10/2020",
        amount: 510,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "02/10/2020",
        amount: 510,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "03/10/2020",
        amount: 510,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "04/10/2020",
        amount: 510,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "05/10/2020",
        amount: 510,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
    },    {
        date: "06/10/2020",
        amount: 510,
        checkNumber: unit20StartingCheck++,
        category: "dues payment",
        shareholderId: 11
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
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "05/10/2010",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "06/10/2010",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "07/10/2010",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "08/10/2010",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "09/10/2010",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "10/10/2010",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "11/10/2010",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "12/10/2010",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "01/10/2011",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "02/10/2011",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "03/10/2011",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "04/10/2011",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "05/10/2011",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "06/10/2011",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "07/10/2011",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "08/10/2011",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "09/10/2011",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "10/10/2011",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "11/10/2011",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "12/10/2011",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "01/10/2012",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "02/10/2012",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "03/10/2012",
        amount: 325,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "04/10/2012",
        amount: 350,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "05/10/2012",
        amount: 350,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "06/10/2012",
        amount: 350,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "07/10/2012",
        amount: 350,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "08/10/2012",
        amount: 350,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "09/10/2012",
        amount: 350,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "10/10/2012",
        amount: 350,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "11/10/2012",
        amount: 350,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "12/10/2012",
        amount: 350,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "01/10/2013",
        amount: 350,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "02/10/2013",
        amount: 350,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "03/10/2013",
        amount: 350,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "04/10/2013",
        amount: 360,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "05/10/2013",
        amount: 360,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "06/10/2013",
        amount: 360,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "07/10/2013",
        amount: 360,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "08/10/2013",
        amount: 360,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "09/10/2013",
        amount: 360,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "10/10/2013",
        amount: 360,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "11/10/2013",
        amount: 360,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "12/10/2013",
        amount: 360,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "01/10/2014",
        amount: 360,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "02/10/2014",
        amount: 360,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "03/10/2014",
        amount: 360,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "04/10/2014",
        amount: 375,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "05/10/2014",
        amount: 375,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "06/10/2014",
        amount: 375,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "07/10/2014",
        amount: 375,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "08/10/2014",
        amount: 375,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "09/10/2014",
        amount: 375,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "10/10/2014",
        amount: 375,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "11/10/2014",
        amount: 375,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "12/10/2014",
        amount: 375,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "01/10/2015",
        amount: 375,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "02/10/2015",
        amount: 375,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "03/10/2015",
        amount: 375,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "04/10/2015",
        amount: 395,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "05/10/2015",
        amount: 395,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "06/10/2015",
        amount: 395,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "07/10/2015",
        amount: 395,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "08/10/2015",
        amount: 395,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "09/10/2015",
        amount: 395,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "10/10/2015",
        amount: 395,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "11/10/2015",
        amount: 395,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "12/10/2015",
        amount: 395,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "01/10/2016",
        amount: 415,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "02/10/2016",
        amount: 415,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "03/10/2016",
        amount: 415,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "04/10/2016",
        amount: 430,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "05/10/2016",
        amount: 430,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "06/10/2016",
        amount: 430,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "07/10/2016",
        amount: 430,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "08/10/2016",
        amount: 430,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "09/10/2016",
        amount: 430,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "10/10/2016",
        amount: 430,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "11/10/2016",
        amount: 430,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "12/10/2016",
        amount: 430,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "01/10/2017",
        amount: 430,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "02/10/2017",
        amount: 430,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "03/10/2017",
        amount: 430,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "04/10/2017",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "05/10/2017",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "06/10/2017",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "07/10/2017",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "08/10/2017",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "09/10/2017",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "10/10/2017",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "11/10/2017",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "12/10/2017",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "01/10/2018",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "02/10/2018",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "03/10/2018",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "04/10/2018",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "05/10/2018",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "06/10/2018",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "07/10/2018",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "08/10/2018",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "09/10/2018",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "10/10/2018",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "11/10/2018",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "12/10/2018",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "01/10/2019",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "02/10/2019",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "03/10/2019",
        amount: 465,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "04/10/2019",
        amount: 510,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "05/10/2019",
        amount: 510,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "06/10/2019",
        amount: 510,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "07/10/2019",
        amount: 510,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "08/10/2019",
        amount: 510,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "09/10/2019",
        amount: 510,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "10/10/2019",
        amount: 510,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "11/10/2019",
        amount: 510,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "12/10/2019",
        amount: 510,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "01/10/2020",
        amount: 510,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "02/10/2020",
        amount: 510,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "03/10/2020",
        amount: 510,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "04/10/2020",
        amount: 510,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "05/10/2020",
        amount: 510,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
    },    {
        date: "06/10/2020",
        amount: 510,
        checkNumber: unit28StartingCheck++,
        category: "dues payment",
        shareholderId: 4
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
        date: "04/10/2011",
        amount: 325,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "05/10/2011",
        amount: 325,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "06/10/2011",
        amount: 325,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "07/10/2011",
        amount: 325,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "08/10/2011",
        amount: 325,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "09/10/2011",
        amount: 325,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "10/10/2011",
        amount: 325,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "12/10/2011",
        amount: 325,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "01/10/2012",
        amount: 650,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "02/10/2012",
        amount: 325,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "03/10/2012",
        amount: 325,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "04/10/2012",
        amount: 350,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "05/10/2012",
        amount: 350,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "06/10/2012",
        amount: 350,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "07/10/2012",
        amount: 350,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "08/10/2012",
        amount: 350,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "09/10/2012",
        amount: 350,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "10/10/2012",
        amount: 350,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "11/10/2012",
        amount: 350,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "12/10/2012",
        amount: 350,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "01/10/2013",
        amount: 350,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "02/10/2013",
        amount: 350,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "03/10/2013",
        amount: 350,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "04/10/2013",
        amount: 360,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "05/10/2013",
        amount: 360,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "06/10/2013",
        amount: 360,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "07/10/2013",
        amount: 360,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "08/10/2013",
        amount: 360,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "09/10/2013",
        amount: 360,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "10/10/2013",
        amount: 360,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "11/10/2013",
        amount: 360,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "12/10/2013",
        amount: 360,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "01/10/2014",
        amount: 360,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "02/10/2014",
        amount: 360,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "03/10/2014",
        amount: 360,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "04/10/2014",
        amount: 375,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "05/10/2014",
        amount: 375,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "06/10/2014",
        amount: 375,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "07/10/2014",
        amount: 375,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "08/10/2014",
        amount: 375,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "09/10/2014",
        amount: 375,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "10/10/2014",
        amount: 375,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "11/10/2014",
        amount: 375,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "12/10/2014",
        amount: 375,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "01/10/2015",
        amount: 375,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "02/10/2015",
        amount: 375,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "03/10/2015",
        amount: 375,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "04/10/2015",
        amount: 395,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "05/10/2015",
        amount: 395,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "06/10/2015",
        amount: 395,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "08/10/2015",
        amount: 395,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "08/10/2015",
        amount: 395,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "09/10/2015",
        amount: 395,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "10/10/2015",
        amount: 395,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "11/10/2015",
        amount: 395,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "12/10/2015",
        amount: 395,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "01/10/2016",
        amount: 415,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "02/10/2016",
        amount: 415,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "03/10/2016",
        amount: 415,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "04/10/2016",
        amount: 430,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "05/10/2016",
        amount: 430,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "06/10/2016",
        amount: 430,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "07/10/2016",
        amount: 430,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "08/10/2016",
        amount: 430,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "09/10/2016",
        amount: 430,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "11/10/2016",
        amount: 430,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "11/10/2016",
        amount: 430,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "12/10/2016",
        amount: 430,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "01/10/2017",
        amount: 430,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "02/10/2017",
        amount: 430,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "03/10/2017",
        amount: 430,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "04/10/2017",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "05/10/2017",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "06/10/2017",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "07/10/2017",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "09/10/2017",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "09/10/2017",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "10/10/2017",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "11/10/2017",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "12/10/2017",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "01/10/2018",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "02/10/2018",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "03/10/2018",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "04/10/2018",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "05/10/2018",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "06/10/2018",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "07/10/2018",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "08/10/2018",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "09/10/2018",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "10/10/2018",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "11/10/2018",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "12/10/2018",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "01/10/2019",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "02/10/2019",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "03/10/2019",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "04/10/2019",
        amount: 465,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "05/10/2019",
        amount: 555,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "06/10/2019",
        amount: 510,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "07/10/2019",
        amount: 510,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "08/10/2019",
        amount: 510,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "09/10/2019",
        amount: 510,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "10/10/2019",
        amount: 510,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "11/10/2019",
        amount: 510,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "12/10/2019",
        amount: 510,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "01/10/2020",
        amount: 510,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "02/10/2020",
        amount: 510,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "03/10/2020",
        amount: 510,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "04/10/2020",
        amount: 510,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "05/10/2020",
        amount: 510,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
    },    {
        date: "06/10/2020",
        amount: 510,
        checkNumber: unit29StartingCheck++,
        category: "dues payment",
        shareholderId: 3
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
        date: "04/10/2014",
        amount: 400,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "05/10/2014",
        amount: 400,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "06/10/2014",
        amount: 400,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "07/10/2014",
        amount: 400,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "08/10/2014",
        amount: 400,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "09/10/2014",
        amount: 400,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "10/10/2014",
        amount: 400,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "11/10/2014",
        amount: 400,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "12/10/2014",
        amount: 400,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "01/10/2015",
        amount: 400,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "02/10/2015",
        amount: 400,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "03/10/2015",
        amount: 400,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "04/10/2015",
        amount: 425,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "05/10/2015",
        amount: 425,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "06/10/2015",
        amount: 425,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "07/10/2015",
        amount: 425,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "08/10/2015",
        amount: 425,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "09/10/2015",
        amount: 425,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "10/10/2015",
        amount: 425,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "11/10/2015",
        amount: 425,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "12/10/2015",
        amount: 425,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "01/10/2016",
        amount: 445,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "02/10/2016",
        amount: 445,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "03/10/2016",
        amount: 445,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "04/10/2016",
        amount: 470,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "05/10/2016",
        amount: 470,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "06/10/2016",
        amount: 470,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "07/10/2016",
        amount: 470,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "08/10/2016",
        amount: 470,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "09/10/2016",
        amount: 470,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "10/10/2016",
        amount: 470,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "11/10/2016",
        amount: 470,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "12/10/2016",
        amount: 470,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "01/10/2017",
        amount: 470,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "02/10/2017",
        amount: 470,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "03/10/2017",
        amount: 470,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "04/10/2017",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "05/10/2017",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "06/10/2017",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "07/10/2017",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "08/10/2017",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "09/10/2017",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "10/10/2017",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "11/10/2017",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "12/10/2017",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "01/10/2018",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "02/10/2018",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "03/10/2018",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "04/10/2018",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "05/10/2018",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "06/10/2018",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "07/10/2018",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "08/10/2018",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "09/10/2018",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "10/10/2018",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "11/10/2018",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "12/10/2018",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "01/10/2019",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "02/10/2019",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "03/10/2019",
        amount: 515,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "04/10/2019",
        amount: 570,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "05/10/2019",
        amount: 570,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "06/10/2019",
        amount: 570,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "07/10/2019",
        amount: 570,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "08/10/2019",
        amount: 570,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "09/10/2019",
        amount: 570,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "10/10/2019",
        amount: 570,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "11/10/2019",
        amount: 570,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "12/10/2019",
        amount: 570,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "01/10/2020",
        amount: 570,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "02/10/2020",
        amount: 570,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "03/10/2020",
        amount: 570,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "04/10/2020",
        amount: 570,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "05/10/2020",
        amount: 570,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
    },    {
        date: "06/10/2020",
        amount: 570,
        checkNumber: unit4StartingCheck++,
        category: "dues payment",
        shareholderId: 26
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
        date: "01/10/2016",
        amount: 445,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "02/10/2016",
        amount: 445,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "03/10/2016",
        amount: 445,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "04/10/2016",
        amount: 470,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "05/10/2016",
        amount: 470,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "06/10/2016",
        amount: 470,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "07/10/2016",
        amount: 470,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "08/10/2016",
        amount: 470,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "09/10/2016",
        amount: 470,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "10/10/2016",
        amount: 470,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "11/10/2016",
        amount: 470,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "12/10/2016",
        amount: 470,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "01/10/2017",
        amount: 470,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "02/10/2017",
        amount: 470,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "03/10/2017",
        amount: 470,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "04/10/2017",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "05/10/2017",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "06/10/2017",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "07/10/2017",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "08/10/2017",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "09/10/2017",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "10/10/2017",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "11/10/2017",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "12/10/2017",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "01/10/2018",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "02/10/2018",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "03/10/2018",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "04/10/2018",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "05/10/2018",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "06/10/2018",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "08/10/2018",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "08/10/2018",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "09/10/2018",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "10/10/2018",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "11/10/2018",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "12/10/2018",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "01/10/2019",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "02/10/2019",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "03/10/2019",
        amount: 515,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "04/10/2019",
        amount: 570,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "05/10/2019",
        amount: 570,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "06/10/2019",
        amount: 570,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "07/10/2019",
        amount: 570,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "08/10/2019",
        amount: 570,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "09/10/2019",
        amount: 570,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "10/10/2019",
        amount: 570,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "11/10/2019",
        amount: 570,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "12/10/2019",
        amount: 570,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "01/10/2020",
        amount: 570,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "02/10/2020",
        amount: 570,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "03/10/2020",
        amount: 570,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "05/10/2020",
        amount: 570,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "05/10/2020",
        amount: 570,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
    },    {
        date: "06/10/2020",
        amount: 570,
        checkNumber: unit5StartingCheck++,
        category: "dues payment",
        shareholderId: 25
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
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "05/10/2010",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "06/10/2010",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "07/10/2010",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "08/10/2010",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "09/10/2010",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "10/10/2010",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "11/10/2010",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "12/10/2010",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "01/10/2011",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "02/10/2011",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "03/10/2011",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },{
        date: "04/10/2011",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "05/10/2011",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "06/10/2011",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "07/10/2011",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "08/10/2011",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "09/10/2011",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "10/10/2011",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "11/10/2011",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "12/10/2011",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "01/10/2012",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "02/10/2012",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "03/10/2012",
        amount: 340,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },{
        date: "04/10/2012",
        amount: 375,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "05/10/2012",
        amount: 375,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "06/10/2012",
        amount: 375,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "07/10/2012",
        amount: 375,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "08/10/2012",
        amount: 375,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "09/10/2012",
        amount: 375,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "10/10/2012",
        amount: 375,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "11/10/2012",
        amount: 375,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "12/10/2012",
        amount: 375,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "01/10/2013",
        amount: 375,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "02/10/2013",
        amount: 375,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "03/10/2013",
        amount: 375,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },{
        date: "04/10/2013",
        amount: 385,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "05/10/2013",
        amount: 385,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "06/10/2013",
        amount: 385,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "07/10/2013",
        amount: 385,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "08/10/2013",
        amount: 385,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "09/10/2013",
        amount: 385,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "10/10/2013",
        amount: 385,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "11/10/2013",
        amount: 385,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "12/10/2013",
        amount: 385,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "01/10/2014",
        amount: 385,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "02/10/2014",
        amount: 385,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "03/10/2014",
        amount: 385,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },{
        date: "04/10/2014",
        amount: 400,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "05/10/2014",
        amount: 400,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "06/10/2014",
        amount: 400,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "07/10/2014",
        amount: 400,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "08/10/2014",
        amount: 400,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "09/10/2014",
        amount: 400,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "10/10/2014",
        amount: 400,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "11/10/2014",
        amount: 400,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "12/10/2014",
        amount: 400,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "01/10/2015",
        amount: 400,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "02/10/2015",
        amount: 400,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "03/10/2015",
        amount: 400,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "04/10/2015",
        amount: 425,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "05/10/2015",
        amount: 425,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "06/10/2015",
        amount: 425,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "07/10/2015",
        amount: 425,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "08/10/2015",
        amount: 425,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "09/10/2015",
        amount: 425,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "10/10/2015",
        amount: 425,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "11/10/2015",
        amount: 425,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "12/10/2015",
        amount: 425,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "01/10/2016",
        amount: 445,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "02/10/2016",
        amount: 445,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "03/10/2016",
        amount: 445,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "04/10/2016",
        amount: 470,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "05/10/2016",
        amount: 470,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "06/10/2016",
        amount: 470,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "07/10/2016",
        amount: 470,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "08/10/2016",
        amount: 470,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "09/10/2016",
        amount: 470,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "10/10/2016",
        amount: 470,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "11/10/2016",
        amount: 470,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "12/10/2016",
        amount: 470,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "01/10/2017",
        amount: 470,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "02/10/2017",
        amount: 470,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "03/10/2017",
        amount: 470,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "04/10/2017",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "05/10/2017",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "06/10/2017",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "07/10/2017",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "08/10/2017",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "09/10/2017",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "10/10/2017",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "11/10/2017",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "12/10/2017",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "01/10/2018",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "02/10/2018",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "03/10/2018",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "04/10/2018",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "05/10/2018",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "06/10/2018",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "07/10/2018",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "08/10/2018",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "09/10/2018",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "10/10/2018",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "11/10/2018",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "12/10/2018",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "01/10/2019",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "02/10/2019",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "03/10/2019",
        amount: 515,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "04/10/2019",
        amount: 570,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "05/10/2019",
        amount: 570,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "06/10/2019",
        amount: 570,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "07/10/2019",
        amount: 570,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "08/10/2019",
        amount: 570,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "09/10/2019",
        amount: 570,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "10/10/2019",
        amount: 570,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "11/10/2019",
        amount: 570,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "12/10/2019",
        amount: 570,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "01/10/2020",
        amount: 570,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "02/10/2020",
        amount: 570,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "03/10/2020",
        amount: 570,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "04/10/2020",
        amount: 570,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "05/10/2020",
        amount: 570,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
    },    {
        date: "06/10/2020",
        amount: 570,
        checkNumber: unit12StartingCheck++,
        category: "dues payment",
        shareholderId: 18
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
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "05/10/2010",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "06/10/2010",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "07/10/2010",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "08/10/2010",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "09/10/2010",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "10/10/2010",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "11/10/2010",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "12/10/2010",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "01/10/2011",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "02/10/2011",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "03/10/2011",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },{
        date: "04/10/2011",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "05/10/2011",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "06/10/2011",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "07/10/2011",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "08/10/2011",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "09/10/2011",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "10/10/2011",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "11/10/2011",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "12/10/2011",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "01/10/2012",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "02/10/2012",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "03/10/2012",
        amount: 340,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },{
        date: "04/10/2012",
        amount: 375,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "05/10/2012",
        amount: 375,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "06/10/2012",
        amount: 375,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "07/10/2012",
        amount: 375,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "08/10/2012",
        amount: 375,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "09/10/2012",
        amount: 375,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "10/10/2012",
        amount: 375,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "11/10/2012",
        amount: 375,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "12/10/2012",
        amount: 375,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "01/10/2013",
        amount: 375,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "02/10/2013",
        amount: 375,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "03/10/2013",
        amount: 375,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },{
        date: "04/10/2013",
        amount: 385,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "05/10/2013",
        amount: 385,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "06/10/2013",
        amount: 385,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "07/10/2013",
        amount: 385,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "08/10/2013",
        amount: 385,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "09/10/2013",
        amount: 385,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "10/10/2013",
        amount: 385,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "11/10/2013",
        amount: 385,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "12/10/2013",
        amount: 385,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "01/10/2014",
        amount: 385,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "02/10/2014",
        amount: 385,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "03/10/2014",
        amount: 385,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },{
        date: "04/10/2014",
        amount: 400,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "05/10/2014",
        amount: 400,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "06/10/2014",
        amount: 400,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "07/10/2014",
        amount: 400,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "08/10/2014",
        amount: 400,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "09/10/2014",
        amount: 400,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "10/10/2014",
        amount: 400,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "11/10/2014",
        amount: 400,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "12/10/2014",
        amount: 400,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "01/10/2015",
        amount: 400,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "02/10/2015",
        amount: 400,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "03/10/2015",
        amount: 400,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "04/10/2015",
        amount: 400,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "05/10/2015",
        amount: 425,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "06/10/2015",
        amount: 450,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "07/10/2015",
        amount: 425,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "08/10/2015",
        amount: 425,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "09/10/2015",
        amount: 425,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "10/10/2015",
        amount: 425,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "11/10/2015",
        amount: 425,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "12/10/2015",
        amount: 425,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "01/10/2016",
        amount: 445,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "02/10/2016",
        amount: 445,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "03/10/2016",
        amount: 445,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "04/10/2016",
        amount: 470,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "05/10/2016",
        amount: 470,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "06/10/2016",
        amount: 470,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "07/10/2016",
        amount: 470,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "08/10/2016",
        amount: 470,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "09/10/2016",
        amount: 470,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "10/10/2016",
        amount: 470,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "11/10/2016",
        amount: 470,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "12/10/2016",
        amount: 470,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "01/10/2017",
        amount: 470,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "02/10/2017",
        amount: 470,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "03/10/2017",
        amount: 470,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "04/10/2017",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "05/10/2017",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "06/10/2017",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "07/10/2017",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "09/10/2017",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "09/10/2017",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "10/10/2017",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "11/10/2017",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "12/10/2017",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "01/10/2018",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "02/10/2018",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "03/10/2018",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "04/10/2018",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "05/10/2018",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "06/10/2018",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "07/10/2018",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "08/10/2018",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "09/10/2018",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "10/10/2018",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "11/10/2018",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "12/10/2018",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "01/10/2019",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "02/10/2019",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "03/10/2019",
        amount: 515,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "04/10/2019",
        amount: 570,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "05/10/2019",
        amount: 570,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "06/10/2019",
        amount: 570,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "07/10/2019",
        amount: 570,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "08/10/2019",
        amount: 570,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "09/10/2019",
        amount: 570,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "10/10/2019",
        amount: 570,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "11/10/2019",
        amount: 570,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "12/10/2019",
        amount: 570,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "01/10/2020",
        amount: 570,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "02/10/2020",
        amount: 570,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "03/10/2020",
        amount: 570,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "04/10/2020",
        amount: 570,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "05/10/2020",
        amount: 570,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
    },    {
        date: "06/10/2020",
        amount: 570,
        checkNumber: unit14StartingCheck++,
        category: "dues payment",
        shareholderId: 17
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
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "05/10/2010",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "06/10/2010",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "07/10/2010",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "08/10/2010",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "09/10/2010",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "10/10/2010",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "11/10/2010",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "12/10/2010",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "01/10/2011",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "02/10/2011",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "03/10/2011",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },{
        date: "04/10/2011",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "05/10/2011",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "06/10/2011",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "07/10/2011",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "09/10/2011",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "09/10/2011",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "10/10/2011",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "11/10/2011",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "12/10/2011",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "01/10/2012",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "02/10/2012",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "03/10/2012",
        amount: 340,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },{
        date: "04/10/2012",
        amount: 375,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "05/10/2012",
        amount: 375,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "06/10/2012",
        amount: 375,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "07/10/2012",
        amount: 375,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "08/10/2012",
        amount: 375,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "09/10/2012",
        amount: 375,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "10/10/2012",
        amount: 375,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "11/10/2012",
        amount: 375,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "12/10/2012",
        amount: 375,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "02/10/2013",
        amount: 375,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "02/10/2013",
        amount: 375,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "03/10/2013",
        amount: 375,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },{
        date: "04/10/2013",
        amount: 385,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "05/10/2013",
        amount: 385,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "06/10/2013",
        amount: 385,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "07/10/2013",
        amount: 385,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "08/10/2013",
        amount: 385,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "09/10/2013",
        amount: 385,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "10/10/2013",
        amount: 385,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "11/10/2013",
        amount: 385,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "12/10/2013",
        amount: 385,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "01/10/2014",
        amount: 385,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "02/10/2014",
        amount: 385,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "03/10/2014",
        amount: 385,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },{
        date: "05/10/2014",
        amount: 400,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "05/10/2014",
        amount: 400,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "06/10/2014",
        amount: 400,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "07/10/2014",
        amount: 400,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "08/10/2014",
        amount: 400,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "09/10/2014",
        amount: 400,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "10/10/2014",
        amount: 400,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "11/10/2014",
        amount: 400,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "12/10/2014",
        amount: 400,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "01/10/2015",
        amount: 400,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "02/10/2015",
        amount: 400,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "03/10/2015",
        amount: 400,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "04/10/2015",
        amount: 425,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "05/10/2015",
        amount: 425,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "06/10/2015",
        amount: 425,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "07/10/2015",
        amount: 425,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "08/10/2015",
        amount: 425,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "09/10/2015",
        amount: 425,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "10/10/2015",
        amount: 425,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "11/10/2015",
        amount: 425,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "12/10/2015",
        amount: 425,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "01/10/2016",
        amount: 445,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "02/10/2016",
        amount: 445,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "03/10/2016",
        amount: 445,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "04/10/2016",
        amount: 470,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "05/10/2016",
        amount: 470,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "06/10/2016",
        amount: 470,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "07/10/2016",
        amount: 470,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "08/10/2016",
        amount: 470,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "10/10/2016",
        amount: 470,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "10/10/2016",
        amount: 470,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "11/10/2016",
        amount: 470,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "12/10/2016",
        amount: 470,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "01/10/2017",
        amount: 470,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "02/10/2017",
        amount: 470,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "03/10/2017",
        amount: 470,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "04/10/2017",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "05/10/2017",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "06/10/2017",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "07/10/2017",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "08/10/2017",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "09/10/2017",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "10/10/2017",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "11/10/2017",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "12/10/2017",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "01/10/2018",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "02/10/2018",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "03/10/2018",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "04/10/2018",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "05/10/2018",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "06/10/2018",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "07/10/2018",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "08/10/2018",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "09/10/2018",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "10/10/2018",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "11/10/2018",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "12/10/2018",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "01/10/2019",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "02/10/2019",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "03/10/2019",
        amount: 515,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "04/10/2019",
        amount: 570,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "05/10/2019",
        amount: 570,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "06/10/2019",
        amount: 570,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "07/10/2019",
        amount: 570,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "08/10/2019",
        amount: 570,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "09/10/2019",
        amount: 570,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "10/10/2019",
        amount: 570,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "11/10/2019",
        amount: 570,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "12/10/2019",
        amount: 570,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "01/10/2020",
        amount: 570,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "02/10/2020",
        amount: 570,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "03/10/2020",
        amount: 570,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "04/10/2020",
        amount: 570,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "05/10/2020",
        amount: 570,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
    },    {
        date: "06/10/2020",
        amount: 570,
        checkNumber: unit21StartingCheck++,
        category: "dues payment",
        shareholderId: 10
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


db.transaction.bulkCreate([
    {
        date: "01/10/2014",
        amount: 325,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "02/10/2014",
        amount: 325,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "03/10/2014",
        amount: 325,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "04/10/2014",
        amount: 345,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "05/10/2014",
        amount: 345,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "06/10/2014",
        amount: 345,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "07/10/2014",
        amount: 345,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "08/10/2014",
        amount: 345,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "09/10/2014",
        amount: 345,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "10/10/2014",
        amount: 345,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "11/10/2014",
        amount: 345,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "12/10/2014",
        amount: 345,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "01/10/2015",
        amount: 345,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "02/10/2015",
        amount: 345,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "03/10/2015",
        amount: 345,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "04/10/2015",
        amount: 355,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "05/10/2015",
        amount: 355,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "06/10/2015",
        amount: 355,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "07/10/2015",
        amount: 355,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "08/10/2015",
        amount: 355,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "09/10/2015",
        amount: 355,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "10/10/2015",
        amount: 355,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "11/10/2015",
        amount: 355,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "12/10/2015",
        amount: 355,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "01/10/2016",
        amount: 375,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "02/10/2016",
        amount: 375,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "03/10/2016",
        amount: 375,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "04/10/2016",
        amount: 375,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "05/10/2016",
        amount: 375,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "06/10/2016",
        amount: 375,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "07/10/2016",
        amount: 375,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "08/10/2016",
        amount: 375,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "09/10/2016",
        amount: 375,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "10/10/2016",
        amount: 375,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "11/10/2016",
        amount: 375,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "12/10/2016",
        amount: 375,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "01/10/2017",
        amount: 375,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "02/10/2017",
        amount: 375,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "03/10/2017",
        amount: 375,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "10/10/2017",
        amount: 1185,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "11/10/2017",
        amount: 1185,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "12/10/2017",
        amount: 1185,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "01/10/2018",
        amount: 395,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "02/10/2018",
        amount: 395,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "03/10/2018",
        amount: 395,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "04/10/2018",
        amount: 395,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "05/10/2018",
        amount: 395,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "06/10/2018",
        amount: 395,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "07/10/2018",
        amount: 395,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "08/10/2018",
        amount: 395,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "09/10/2018",
        amount: 395,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "10/10/2018",
        amount: 395,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "11/10/2018",
        amount: 395,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "12/10/2018",
        amount: 395,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "01/10/2019",
        amount: 395,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "02/10/2019",
        amount: 395,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "03/10/2019",
        amount: 395,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "04/10/2019",
        amount: 430,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "05/10/2019",
        amount: 430,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "06/10/2019",
        amount: 430,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "07/10/2019",
        amount: 430,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "08/10/2019",
        amount: 430,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "09/10/2019",
        amount: 430,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "10/10/2019",
        amount: 430,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "11/10/2019",
        amount: 430,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "12/10/2019",
        amount: 430,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "01/10/2020",
        amount: 430,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "02/10/2020",
        amount: 430,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "03/10/2020",
        amount: 430,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "04/10/2020",
        amount: 430,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "05/10/2020",
        amount: 430,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
    },    {
        date: "06/10/2020",
        amount: 430,
        checkNumber: unit3StartingCheck++,
        category: "dues payment",
        shareholderId: 27
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
    date: "10/10/2017",
    amount: 395,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "11/10/2017",
    amount: 395,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "01/10/2018",
    amount: 395,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "01/10/2018",
    amount: 395,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "02/10/2018",
    amount: 395,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "03/10/2018",
    amount: 395,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "04/10/2018",
    amount: 395,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "05/10/2018",
    amount: 395,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "06/10/2018",
    amount: 395,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "07/10/2018",
    amount: 395,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "08/10/2018",
    amount: 395,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "09/10/2018",
    amount: 395,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "10/10/2018",
    amount: 395,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "11/10/2018",
    amount: 395,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "12/10/2018",
    amount: 395,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "01/10/2019",
    amount: 395,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "02/10/2019",
    amount: 395,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "03/10/2019",
    amount: 395,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "04/10/2019",
    amount: 395,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "05/10/2019",
    amount: 395,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "06/10/2019",
    amount: 395,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "07/10/2019",
    amount: 535,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "08/10/2019",
    amount: 430,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "09/10/2019",
    amount: 430,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "10/10/2019",
    amount: 430,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "11/10/2019",
    amount: 430,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "12/10/2019",
    amount: 430,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "01/10/2020",
    amount: 430,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "02/10/2020",
    amount: 430,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "03/10/2020",
    amount: 430,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "04/10/2020",
    amount: 430,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "05/10/2020",
    amount: 430,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
},    {
    date: "06/10/2020",
    amount: 430,
    checkNumber: unit6StartingCheck++,
    category: "dues payment",
    shareholderId: 24
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
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "05/10/2010",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "06/10/2010",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "07/10/2010",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "08/10/2010",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "09/10/2010",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "10/10/2010",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "11/10/2010",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "12/10/2010",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "01/10/2011",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "02/10/2011",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "03/10/2011",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "04/10/2011",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "05/10/2011",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "06/10/2011",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "07/10/2011",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "08/10/2011",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "09/10/2011",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "10/10/2011",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "11/10/2011",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "12/10/2011",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "01/10/2012",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "02/10/2012",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "03/10/2012",
        amount: 300,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "04/10/2012",
        amount: 320,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "05/10/2012",
        amount: 320,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "06/10/2012",
        amount: 320,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "07/10/2012",
        amount: 320,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "08/10/2012",
        amount: 320,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "09/10/2012",
        amount: 320,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "10/10/2012",
        amount: 320,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "11/10/2012",
        amount: 320,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "12/10/2012",
        amount: 320,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "01/10/2013",
        amount: 320,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "02/10/2013",
        amount: 320,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "03/10/2013",
        amount: 320,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "04/10/2013",
        amount: 325,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "05/10/2013",
        amount: 325,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "06/10/2013",
        amount: 325,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "07/10/2013",
        amount: 325,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "08/10/2013",
        amount: 325,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "09/10/2013",
        amount: 325,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "10/10/2013",
        amount: 325,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "11/10/2013",
        amount: 325,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "12/10/2013",
        amount: 325,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "01/10/2014",
        amount: 325,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "02/10/2014",
        amount: 325,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "03/10/2014",
        amount: 325,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "04/10/2014",
        amount: 345,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "05/10/2014",
        amount: 345,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "06/10/2014",
        amount: 345,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "07/10/2014",
        amount: 345,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "08/10/2014",
        amount: 345,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "09/10/2014",
        amount: 345,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "10/10/2014",
        amount: 345,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "11/10/2014",
        amount: 345,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "12/10/2014",
        amount: 345,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "01/10/2015",
        amount: 345,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "02/10/2015",
        amount: 345,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "03/10/2015",
        amount: 345,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "04/10/2015",
        amount: 355,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "05/10/2015",
        amount: 355,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "06/10/2015",
        amount: 355,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "07/10/2015",
        amount: 355,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "08/10/2015",
        amount: 355,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "09/10/2015",
        amount: 355,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "10/10/2015",
        amount: 355,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "11/10/2015",
        amount: 355,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "12/10/2015",
        amount: 355,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "01/10/2016",
        amount: 375,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "02/10/2016",
        amount: 375,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "03/10/2016",
        amount: 375,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "04/10/2016",
        amount: 375,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "05/10/2016",
        amount: 375,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "06/10/2016",
        amount: 375,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "07/10/2016",
        amount: 375,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "08/10/2016",
        amount: 375,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "09/10/2016",
        amount: 375,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "10/10/2016",
        amount: 375,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "11/10/2016",
        amount: 375,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "12/10/2016",
        amount: 375,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "01/10/2017",
        amount: 375,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "02/10/2017",
        amount: 375,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "03/10/2017",
        amount: 375,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "04/10/2017",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "05/10/2017",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "06/10/2017",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "07/10/2017",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "08/10/2017",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "09/10/2017",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "10/10/2017",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "11/10/2017",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "12/10/2017",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "01/10/2018",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "02/10/2018",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "03/10/2018",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "04/10/2018",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "05/10/2018",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "06/10/2018",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "07/10/2018",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "08/10/2018",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "09/10/2018",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "10/10/2018",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "11/10/2018",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "12/10/2018",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "01/10/2019",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "02/10/2019",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "03/10/2019",
        amount: 395,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "04/10/2019",
        amount: 430,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "05/10/2019",
        amount: 430,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "06/10/2019",
        amount: 430,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "07/10/2019",
        amount: 430,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "08/10/2019",
        amount: 430,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "09/10/2019",
        amount: 430,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "10/10/2019",
        amount: 430,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "11/10/2019",
        amount: 430,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "12/10/2019",
        amount: 430,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "01/10/2020",
        amount: 430,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "02/10/2020",
        amount: 430,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "03/10/2020",
        amount: 430,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "04/10/2020",
        amount: 430,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "05/10/2020",
        amount: 430,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
    },    {
        date: "06/10/2020",
        amount: 430,
        checkNumber: unit7StartingCheck++,
        category: "dues payment",
        shareholderId: 23
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
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "05/10/2010",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "06/10/2010",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "07/10/2010",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "08/10/2010",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "09/10/2010",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "10/10/2010",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "11/10/2010",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "12/10/2010",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "01/10/2011",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "02/10/2011",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "03/10/2011",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "04/10/2011",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "05/10/2011",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "06/10/2011",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "07/10/2011",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "08/10/2011",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "09/10/2011",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "10/10/2011",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "11/10/2011",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "12/10/2011",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "01/10/2012",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "02/10/2012",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "03/10/2012",
        amount: 300,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "04/10/2012",
        amount: 320,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "05/10/2012",
        amount: 320,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "06/10/2012",
        amount: 320,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "07/10/2012",
        amount: 320,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "08/10/2012",
        amount: 320,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "09/10/2012",
        amount: 320,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "10/10/2012",
        amount: 320,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "11/10/2012",
        amount: 320,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "12/10/2012",
        amount: 320,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "01/10/2013",
        amount: 320,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "02/10/2013",
        amount: 320,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "03/10/2013",
        amount: 320,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "04/10/2013",
        amount: 325,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "05/10/2013",
        amount: 325,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "06/10/2013",
        amount: 325,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "07/10/2013",
        amount: 325,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "08/10/2013",
        amount: 325,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "09/10/2013",
        amount: 325,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "10/10/2013",
        amount: 325,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "11/10/2013",
        amount: 325,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "12/10/2013",
        amount: 325,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "01/10/2014",
        amount: 325,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "02/10/2014",
        amount: 325,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "03/10/2014",
        amount: 325,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "04/10/2014",
        amount: 345,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "05/10/2014",
        amount: 345,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "06/10/2014",
        amount: 345,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "07/10/2014",
        amount: 345,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "08/10/2014",
        amount: 345,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "09/10/2014",
        amount: 345,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "10/10/2014",
        amount: 345,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "11/10/2014",
        amount: 345,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "12/10/2014",
        amount: 345,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "01/10/2015",
        amount: 345,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "02/10/2015",
        amount: 345,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "03/10/2015",
        amount: 345,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "04/10/2015",
        amount: 355,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "05/10/2015",
        amount: 355,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "06/10/2015",
        amount: 355,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "07/10/2015",
        amount: 355,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "08/10/2015",
        amount: 355,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "09/10/2015",
        amount: 355,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "10/10/2015",
        amount: 355,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "11/10/2015",
        amount: 355,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "12/10/2015",
        amount: 355,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "01/10/2016",
        amount: 375,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "02/10/2016",
        amount: 375,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "03/10/2016",
        amount: 375,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "04/10/2016",
        amount: 375,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "05/10/2016",
        amount: 375,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "06/10/2016",
        amount: 375,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "07/10/2016",
        amount: 375,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "08/10/2016",
        amount: 375,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "09/10/2016",
        amount: 375,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "10/10/2016",
        amount: 375,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "11/10/2016",
        amount: 375,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "12/10/2016",
        amount: 375,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "01/10/2017",
        amount: 375,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "02/10/2017",
        amount: 375,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "03/10/2017",
        amount: 375,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "04/10/2017",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "05/10/2017",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "06/10/2017",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "07/10/2017",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "08/10/2017",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "09/10/2017",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "10/10/2017",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "11/10/2017",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "12/10/2017",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "01/10/2018",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "02/10/2018",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "03/10/2018",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "04/10/2018",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "05/10/2018",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "06/10/2018",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "07/10/2018",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "08/10/2018",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "09/10/2018",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "10/10/2018",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "11/10/2018",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "12/10/2018",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "01/10/2019",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "02/10/2019",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "03/10/2019",
        amount: 395,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "04/10/2019",
        amount: 430,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "05/10/2019",
        amount: 430,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "06/10/2019",
        amount: 430,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "07/10/2019",
        amount: 430,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "08/10/2019",
        amount: 430,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "09/10/2019",
        amount: 430,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "10/10/2019",
        amount: 430,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "11/10/2019",
        amount: 430,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "12/10/2019",
        amount: 430,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "01/10/2020",
        amount: 430,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "02/10/2020",
        amount: 430,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "03/10/2020",
        amount: 430,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "04/10/2020",
        amount: 430,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "05/10/2020",
        amount: 430,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
    },    {
        date: "06/10/2020",
        amount: 430,
        checkNumber: unit8StartingCheck++,
        category: "dues payment",
        shareholderId: 22
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
        date: "12/10/2013",
        amount: 325,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "01/10/2014",
        amount: 325,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "02/10/2014",
        amount: 325,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "03/10/2014",
        amount: 325,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "04/10/2014",
        amount: 345,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "05/10/2014",
        amount: 345,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "06/10/2014",
        amount: 345,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "07/10/2014",
        amount: 345,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "08/10/2014",
        amount: 345,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "09/10/2014",
        amount: 345,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "10/10/2014",
        amount: 345,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "11/10/2014",
        amount: 345,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "12/10/2014",
        amount: 345,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "01/10/2015",
        amount: 345,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "02/10/2015",
        amount: 345,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "03/10/2015",
        amount: 345,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "04/10/2015",
        amount: 355,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "05/10/2015",
        amount: 355,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "06/10/2015",
        amount: 355,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "07/10/2015",
        amount: 355,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "08/10/2015",
        amount: 355,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "09/10/2015",
        amount: 355,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "10/10/2015",
        amount: 355,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "11/10/2015",
        amount: 355,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "12/10/2015",
        amount: 355,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "01/10/2016",
        amount: 375,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "02/10/2016",
        amount: 375,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "03/10/2016",
        amount: 375,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "04/10/2016",
        amount: 375,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "05/10/2016",
        amount: 375,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "06/10/2016",
        amount: 375,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "07/10/2016",
        amount: 375,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "08/10/2016",
        amount: 375,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "09/10/2016",
        amount: 375,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "10/10/2016",
        amount: 375,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "11/10/2016",
        amount: 375,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "12/10/2016",
        amount: 375,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "01/10/2017",
        amount: 375,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "02/10/2017",
        amount: 375,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "03/10/2017",
        amount: 375,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "04/10/2017",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "05/10/2017",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "06/10/2017",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "07/10/2017",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "08/10/2017",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "09/10/2017",
        amount: 375,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "10/10/2017",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "11/10/2017",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "12/10/2017",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "01/10/2018",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "02/10/2018",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "03/10/2018",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "04/10/2018",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "05/10/2018",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "06/10/2018",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "07/10/2018",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "08/10/2018",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "09/10/2018",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "10/10/2018",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "11/10/2018",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "12/10/2018",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "01/10/2019",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "02/10/2019",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "03/10/2019",
        amount: 395,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "04/10/2019",
        amount: 430,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "05/10/2019",
        amount: 430,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "06/10/2019",
        amount: 430,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "07/10/2019",
        amount: 430,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "08/10/2019",
        amount: 430,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "09/10/2019",
        amount: 430,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "11/10/2019",
        amount: 430,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "11/10/2019",
        amount: 430,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "01/10/2020",
        amount: 430,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "01/10/2020",
        amount: 430,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "03/10/2020",
        amount: 430,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "03/10/2020",
        amount: 430,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "05/10/2020",
        amount: 430,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
    },    {
        date: "05/10/2020",
        amount: 430,
        checkNumber: unit9StartingCheck++,
        category: "dues payment",
        shareholderId:21
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
        date: "07/10/2014",
        amount: 345,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "08/10/2014",
        amount: 345,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "09/10/2014",
        amount: 345,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "10/10/2014",
        amount: 345,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "11/10/2014",
        amount: 345,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "12/10/2014",
        amount: 345,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "01/10/2015",
        amount: 345,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "02/10/2015",
        amount: 345,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "03/10/2015",
        amount: 345,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "04/10/2015",
        amount: 355,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "05/10/2015",
        amount: 355,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "06/10/2015",
        amount: 355,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "07/10/2015",
        amount: 355,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "08/10/2015",
        amount: 355,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "09/10/2015",
        amount: 355,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "10/10/2015",
        amount: 355,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "11/10/2015",
        amount: 355,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "12/10/2015",
        amount: 355,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "01/10/2016",
        amount: 375,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "02/10/2016",
        amount: 375,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "03/10/2016",
        amount: 375,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "04/10/2016",
        amount: 375,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "05/10/2016",
        amount: 375,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "06/10/2016",
        amount: 375,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "07/10/2016",
        amount: 375,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "08/10/2016",
        amount: 375,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "09/10/2016",
        amount: 375,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "10/10/2016",
        amount: 375,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "11/10/2016",
        amount: 375,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "12/10/2016",
        amount: 375,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "01/10/2017",
        amount: 375,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "02/10/2017",
        amount: 375,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "03/10/2017",
        amount: 375,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "04/10/2017",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "05/10/2017",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "06/10/2017",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "07/10/2017",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "08/10/2017",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "09/10/2017",
        amount: 375,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "10/10/2017",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "11/10/2017",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "12/10/2017",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "01/10/2018",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "02/10/2018",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "03/10/2018",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "04/10/2018",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "05/10/2018",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "06/10/2018",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "07/10/2018",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "08/10/2018",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "09/10/2018",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "10/10/2018",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "11/10/2018",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "12/10/2018",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "01/10/2019",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "02/10/2019",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "03/10/2019",
        amount: 395,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "04/10/2019",
        amount: 430,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "05/10/2019",
        amount: 430,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "06/10/2019",
        amount: 430,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "07/10/2019",
        amount: 430,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "08/10/2019",
        amount: 430,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "09/10/2019",
        amount: 430,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "10/10/2019",
        amount: 430,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "11/10/2019",
        amount: 430,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "12/10/2019",
        amount: 430,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "01/10/2020",
        amount: 430,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "02/10/2020",
        amount: 430,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "03/10/2020",
        amount: 430,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "04/10/2020",
        amount: 430,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "05/10/2020",
        amount: 430,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
    },    {
        date: "06/10/2020",
        amount: 430,
        checkNumber: unit15StartingCheck++,
        category: "dues payment",
        shareholderId: 16
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
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "05/10/2010",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "06/10/2010",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "07/10/2010",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "08/10/2010",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "09/10/2010",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "10/10/2010",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "11/10/2010",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "12/10/2010",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "01/10/2011",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "02/10/2011",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "03/10/2011",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "04/10/2011",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "05/10/2011",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "06/10/2011",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "07/10/2011",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "08/10/2011",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "09/10/2011",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "10/10/2011",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "11/10/2011",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "12/10/2011",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "01/10/2012",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "02/10/2012",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "03/10/2012",
        amount: 300,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "04/10/2012",
        amount: 320,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "05/10/2012",
        amount: 320,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "06/10/2012",
        amount: 320,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "07/10/2012",
        amount: 320,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "08/10/2012",
        amount: 320,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "09/10/2012",
        amount: 320,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "10/10/2012",
        amount: 320,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "11/10/2012",
        amount: 320,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "12/10/2012",
        amount: 320,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "01/10/2013",
        amount: 320,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "02/10/2013",
        amount: 320,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "03/10/2013",
        amount: 320,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "04/10/2013",
        amount: 325,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "05/10/2013",
        amount: 325,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "06/10/2013",
        amount: 325,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "07/10/2013",
        amount: 325,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "08/10/2013",
        amount: 325,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "09/10/2013",
        amount: 325,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "10/10/2013",
        amount: 325,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "11/10/2013",
        amount: 325,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "12/10/2013",
        amount: 325,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "01/10/2014",
        amount: 325,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "02/10/2014",
        amount: 325,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "03/10/2014",
        amount: 325,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "04/10/2014",
        amount: 345,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "05/10/2014",
        amount: 345,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "06/10/2014",
        amount: 345,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "07/10/2014",
        amount: 345,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "08/10/2014",
        amount: 345,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "09/10/2014",
        amount: 345,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "10/10/2014",
        amount: 345,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "11/10/2014",
        amount: 345,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "12/10/2014",
        amount: 345,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "01/10/2015",
        amount: 345,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "02/10/2015",
        amount: 345,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "03/10/2015",
        amount: 345,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "04/10/2015",
        amount: 355,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "05/10/2015",
        amount: 355,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "06/10/2015",
        amount: 355,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "07/10/2015",
        amount: 355,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "08/10/2015",
        amount: 355,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "09/10/2015",
        amount: 355,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "10/10/2015",
        amount: 355,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "11/10/2015",
        amount: 355,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "12/10/2015",
        amount: 355,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "01/10/2016",
        amount: 375,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "02/10/2016",
        amount: 375,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "03/10/2016",
        amount: 375,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "04/10/2016",
        amount: 375,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "05/10/2016",
        amount: 375,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "06/10/2016",
        amount: 375,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "07/10/2016",
        amount: 375,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "08/10/2016",
        amount: 375,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "09/10/2016",
        amount: 375,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "10/10/2016",
        amount: 375,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "11/10/2016",
        amount: 375,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "12/10/2016",
        amount: 375,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "01/10/2017",
        amount: 375,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "02/10/2017",
        amount: 375,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "03/10/2017",
        amount: 375,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "04/10/2017",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "05/10/2017",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "06/10/2017",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "07/10/2017",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "08/10/2017",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "09/10/2017",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "10/10/2017",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "11/10/2017",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "12/10/2017",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "01/10/2018",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "02/10/2018",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "03/10/2018",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "04/10/2018",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "05/10/2018",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "06/10/2018",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "07/10/2018",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "08/10/2018",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "09/10/2018",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "10/10/2018",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "11/10/2018",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "12/10/2018",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "01/10/2019",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "02/10/2019",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "03/10/2019",
        amount: 395,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "04/10/2019",
        amount: 430,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "05/10/2019",
        amount: 430,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "06/10/2019",
        amount: 430,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "07/10/2019",
        amount: 430,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "08/10/2019",
        amount: 430,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "09/10/2019",
        amount: 430,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "10/10/2019",
        amount: 430,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "11/10/2019",
        amount: 430,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "12/10/2019",
        amount: 430,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "01/10/2020",
        amount: 430,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "02/10/2020",
        amount: 430,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "03/10/2020",
        amount: 430,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "04/10/2020",
        amount: 430,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "05/10/2020",
        amount: 430,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
    },    {
        date: "06/10/2020",
        amount: 430,
        checkNumber: unit16StartingCheck++,
        category: "dues payment",
        shareholderId: 15
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
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "05/10/2010",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "06/10/2010",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "07/10/2010",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "08/10/2010",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "09/10/2010",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "10/10/2010",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "11/10/2010",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "12/10/2010",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "01/10/2011",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "02/10/2011",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "03/10/2011",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "04/10/2011",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "05/10/2011",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "06/10/2011",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "07/10/2011",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "08/10/2011",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "09/10/2011",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "10/10/2011",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "11/10/2011",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "12/10/2011",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "01/10/2012",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "02/10/2012",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "03/10/2012",
        amount: 300,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "04/10/2012",
        amount: 320,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "05/10/2012",
        amount: 320,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "06/10/2012",
        amount: 320,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "07/10/2012",
        amount: 320,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "08/10/2012",
        amount: 320,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "09/10/2012",
        amount: 320,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "10/10/2012",
        amount: 320,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "11/10/2012",
        amount: 320,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "12/10/2012",
        amount: 320,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "01/10/2013",
        amount: 320,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "02/10/2013",
        amount: 320,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "03/10/2013",
        amount: 320,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "04/10/2013",
        amount: 325,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "05/10/2013",
        amount: 325,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "06/10/2013",
        amount: 325,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "07/10/2013",
        amount: 325,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "08/10/2013",
        amount: 325,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "09/10/2013",
        amount: 325,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "10/10/2013",
        amount: 325,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "11/10/2013",
        amount: 325,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "12/10/2013",
        amount: 325,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "01/10/2014",
        amount: 325,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "02/10/2014",
        amount: 325,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "03/10/2014",
        amount: 325,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "04/10/2014",
        amount: 345,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "05/10/2014",
        amount: 345,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "06/10/2014",
        amount: 345,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "07/10/2014",
        amount: 345,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "08/10/2014",
        amount: 345,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "09/10/2014",
        amount: 345,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "10/10/2014",
        amount: 345,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "11/10/2014",
        amount: 345,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "12/10/2014",
        amount: 345,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "01/10/2015",
        amount: 345,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "02/10/2015",
        amount: 345,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "03/10/2015",
        amount: 345,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "04/10/2015",
        amount: 355,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "05/10/2015",
        amount: 355,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "06/10/2015",
        amount: 355,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "07/10/2015",
        amount: 355,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "08/10/2015",
        amount: 355,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "09/10/2015",
        amount: 355,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "10/10/2015",
        amount: 355,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "11/10/2015",
        amount: 355,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "12/10/2015",
        amount: 355,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "01/10/2016",
        amount: 375,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "02/10/2016",
        amount: 375,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "03/10/2016",
        amount: 375,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "04/10/2016",
        amount: 375,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "05/10/2016",
        amount: 375,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "06/10/2016",
        amount: 375,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "07/10/2016",
        amount: 375,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "08/10/2016",
        amount: 375,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "09/10/2016",
        amount: 375,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "10/10/2016",
        amount: 375,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "11/10/2016",
        amount: 375,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "12/10/2016",
        amount: 375,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "01/10/2017",
        amount: 375,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "02/10/2017",
        amount: 375,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "03/10/2017",
        amount: 375,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "04/10/2017",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "05/10/2017",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "06/10/2017",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "07/10/2017",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "08/10/2017",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "09/10/2017",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "10/10/2017",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "11/10/2017",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "12/10/2017",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "01/10/2018",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "02/10/2018",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "03/10/2018",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "04/10/2018",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "05/10/2018",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "06/10/2018",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "07/10/2018",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "08/10/2018",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "09/10/2018",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "10/10/2018",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "11/10/2018",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "12/10/2018",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "01/10/2019",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "02/10/2019",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "03/10/2019",
        amount: 395,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "04/10/2019",
        amount: 430,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "05/10/2019",
        amount: 430,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "06/10/2019",
        amount: 430,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "07/10/2019",
        amount: 430,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "08/10/2019",
        amount: 430,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "09/10/2019",
        amount: 430,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "10/10/2019",
        amount: 430,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "11/10/2019",
        amount: 430,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "12/10/2019",
        amount: 430,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "01/10/2020",
        amount: 430,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "02/10/2020",
        amount: 430,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "03/10/2020",
        amount: 430,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "04/10/2020",
        amount: 430,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "05/10/2020",
        amount: 430,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
    },    {
        date: "06/10/2020",
        amount: 430,
        checkNumber: unit17StartingCheck++,
        category: "dues payment",
        shareholderId: 14
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
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "05/10/2010",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "06/10/2010",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "07/10/2010",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "08/10/2010",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "09/10/2010",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "10/10/2010",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "11/10/2010",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "12/10/2010",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "01/10/2011",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "02/10/2011",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "03/10/2011",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "04/10/2011",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "05/10/2011",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "06/10/2011",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "07/10/2011",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "08/10/2011",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "09/10/2011",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "10/10/2011",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "11/10/2011",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "12/10/2011",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "01/10/2012",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "02/10/2012",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "03/10/2012",
        amount: 300,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "04/10/2012",
        amount: 320,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "05/10/2012",
        amount: 320,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "06/10/2012",
        amount: 320,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "07/10/2012",
        amount: 320,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "08/10/2012",
        amount: 320,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "09/10/2012",
        amount: 320,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "10/10/2012",
        amount: 320,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "11/10/2012",
        amount: 320,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "12/10/2012",
        amount: 320,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "01/10/2013",
        amount: 320,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "02/10/2013",
        amount: 320,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "03/10/2013",
        amount: 320,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "04/10/2013",
        amount: 325,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "05/10/2013",
        amount: 325,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "06/10/2013",
        amount: 325,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "07/10/2013",
        amount: 325,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "08/10/2013",
        amount: 325,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "09/10/2013",
        amount: 325,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "10/10/2013",
        amount: 325,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "11/10/2013",
        amount: 325,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "12/10/2013",
        amount: 325,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "01/10/2014",
        amount: 325,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "02/10/2014",
        amount: 325,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "03/10/2014",
        amount: 325,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "04/10/2014",
        amount: 345,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "05/10/2014",
        amount: 345,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "06/10/2014",
        amount: 345,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "07/10/2014",
        amount: 345,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "08/10/2014",
        amount: 345,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "09/10/2014",
        amount: 345,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "10/10/2014",
        amount: 345,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "11/10/2014",
        amount: 345,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "12/10/2014",
        amount: 345,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "01/10/2015",
        amount: 345,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "02/10/2015",
        amount: 345,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "03/10/2015",
        amount: 345,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "04/10/2015",
        amount: 355,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "05/10/2015",
        amount: 355,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "06/10/2015",
        amount: 355,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "07/10/2015",
        amount: 355,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "08/10/2015",
        amount: 355,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "09/10/2015",
        amount: 355,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "10/10/2015",
        amount: 355,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "11/10/2015",
        amount: 355,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "12/10/2015",
        amount: 355,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "01/10/2016",
        amount: 375,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "02/10/2016",
        amount: 375,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "03/10/2016",
        amount: 375,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "04/10/2016",
        amount: 375,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "05/10/2016",
        amount: 375,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "06/10/2016",
        amount: 375,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "07/10/2016",
        amount: 375,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "08/10/2016",
        amount: 375,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "09/10/2016",
        amount: 375,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "10/10/2016",
        amount: 375,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "11/10/2016",
        amount: 375,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "12/10/2016",
        amount: 375,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "01/10/2017",
        amount: 375,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "02/10/2017",
        amount: 375,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "03/10/2017",
        amount: 375,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "04/10/2017",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "05/10/2017",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "06/10/2017",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "07/10/2017",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "08/10/2017",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "09/10/2017",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "10/10/2017",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "11/10/2017",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "12/10/2017",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "01/10/2018",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "02/10/2018",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "03/10/2018",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "04/10/2018",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "05/10/2018",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "06/10/2018",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "07/10/2018",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "08/10/2018",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "09/10/2018",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "10/10/2018",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "11/10/2018",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "12/10/2018",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "01/10/2019",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "02/10/2019",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "03/10/2019",
        amount: 395,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "04/10/2019",
        amount: 430,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "05/10/2019",
        amount: 430,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "06/10/2019",
        amount: 430,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "07/10/2019",
        amount: 430,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "08/10/2019",
        amount: 430,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "09/10/2019",
        amount: 430,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "10/10/2019",
        amount: 430,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "11/10/2019",
        amount: 430,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "12/10/2019",
        amount: 430,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "01/10/2020",
        amount: 430,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "02/10/2020",
        amount: 430,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "03/10/2020",
        amount: 430,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "04/10/2020",
        amount: 430,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "05/10/2020",
        amount: 430,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
    },    {
        date: "06/10/2020",
        amount: 430,
        checkNumber: unit18StartingCheck++,
        category: "dues payment",
        shareholderId: 13
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
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "05/10/2010",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "06/10/2010",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "07/10/2010",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "08/10/2010",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "09/10/2010",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "10/10/2010",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "11/10/2010",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "12/10/2010",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "01/10/2011",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "02/10/2011",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "03/10/2011",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "04/10/2011",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "05/10/2011",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "06/10/2011",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "07/10/2011",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "08/10/2011",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "09/10/2011",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "10/10/2011",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "11/10/2011",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "12/10/2011",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "01/10/2012",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "02/10/2012",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "03/10/2012",
        amount: 300,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "04/10/2012",
        amount: 320,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "05/10/2012",
        amount: 320,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "06/10/2012",
        amount: 320,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "07/10/2012",
        amount: 320,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "08/10/2012",
        amount: 320,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "09/10/2012",
        amount: 320,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "10/10/2012",
        amount: 320,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "11/10/2012",
        amount: 320,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "12/10/2012",
        amount: 320,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "01/10/2013",
        amount: 320,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "02/10/2013",
        amount: 320,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "03/10/2013",
        amount: 320,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "04/10/2013",
        amount: 325,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "05/10/2013",
        amount: 325,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "06/10/2013",
        amount: 325,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "07/10/2013",
        amount: 325,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "08/10/2013",
        amount: 325,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "09/10/2013",
        amount: 325,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "10/10/2013",
        amount: 325,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "11/10/2013",
        amount: 325,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "12/10/2013",
        amount: 325,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "01/10/2014",
        amount: 325,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "02/10/2014",
        amount: 325,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "03/10/2014",
        amount: 325,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "04/10/2014",
        amount: 345,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "05/10/2014",
        amount: 345,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "06/10/2014",
        amount: 345,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "07/10/2014",
        amount: 345,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "08/10/2014",
        amount: 345,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "09/10/2014",
        amount: 345,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "10/10/2014",
        amount: 345,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "11/10/2014",
        amount: 345,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "12/10/2014",
        amount: 345,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "01/10/2015",
        amount: 345,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "02/10/2015",
        amount: 345,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "03/10/2015",
        amount: 345,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "04/10/2015",
        amount: 355,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "05/10/2015",
        amount: 355,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "06/10/2015",
        amount: 355,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "07/10/2015",
        amount: 355,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "08/10/2015",
        amount: 355,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "09/10/2015",
        amount: 355,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "10/10/2015",
        amount: 355,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "11/10/2015",
        amount: 355,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "12/10/2015",
        amount: 355,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "01/10/2016",
        amount: 375,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "02/10/2016",
        amount: 375,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "03/10/2016",
        amount: 375,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "04/10/2016",
        amount: 375,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "05/10/2016",
        amount: 375,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "06/10/2016",
        amount: 375,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "07/10/2016",
        amount: 375,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "08/10/2016",
        amount: 375,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "09/10/2016",
        amount: 375,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "10/10/2016",
        amount: 375,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "11/10/2016",
        amount: 375,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "12/10/2016",
        amount: 375,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "01/10/2017",
        amount: 375,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "02/10/2017",
        amount: 375,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "03/10/2017",
        amount: 375,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "04/10/2017",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "05/10/2017",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "06/10/2017",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "07/10/2017",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "08/10/2017",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "09/10/2017",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "10/10/2017",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "11/10/2017",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "12/10/2017",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "01/10/2018",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "02/10/2018",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "03/10/2018",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "04/10/2018",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "05/10/2018",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "06/10/2018",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "07/10/2018",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "08/10/2018",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "09/10/2018",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "10/10/2018",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "11/10/2018",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "12/10/2018",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "01/10/2019",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "02/10/2019",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "03/10/2019",
        amount: 395,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "04/10/2019",
        amount: 430,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "05/10/2019",
        amount: 430,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "06/10/2019",
        amount: 430,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "07/10/2019",
        amount: 430,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "08/10/2019",
        amount: 430,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "09/10/2019",
        amount: 430,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "10/10/2019",
        amount: 430,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "11/10/2019",
        amount: 430,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "12/10/2019",
        amount: 430,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "01/10/2020",
        amount: 430,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "02/10/2020",
        amount: 430,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "03/10/2020",
        amount: 430,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "04/10/2020",
        amount: 430,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "05/10/2020",
        amount: 430,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
    },    {
        date: "06/10/2020",
        amount: 430,
        checkNumber: unit24StartingCheck++,
        category: "dues payment",
        shareholderId: 8
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
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "05/10/2010",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "06/10/2010",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "07/10/2010",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "08/10/2010",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "09/10/2010",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "10/10/2010",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "11/10/2010",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "12/10/2010",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "01/10/2011",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "02/10/2011",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "03/10/2011",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "04/10/2011",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "05/10/2011",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "06/10/2011",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "07/10/2011",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "08/10/2011",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "09/10/2011",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "10/10/2011",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "11/10/2011",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "12/10/2011",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "01/10/2012",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "02/10/2012",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "03/10/2012",
        amount: 300,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "04/10/2012",
        amount: 320,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "05/10/2012",
        amount: 320,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "06/10/2012",
        amount: 320,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "07/10/2012",
        amount: 320,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "08/10/2012",
        amount: 320,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "09/10/2012",
        amount: 320,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "10/10/2012",
        amount: 320,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "11/10/2012",
        amount: 320,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "12/10/2012",
        amount: 320,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "01/10/2013",
        amount: 320,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "02/10/2013",
        amount: 320,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "03/10/2013",
        amount: 320,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "04/10/2013",
        amount: 325,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "05/10/2013",
        amount: 325,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "06/10/2013",
        amount: 325,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "07/10/2013",
        amount: 325,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "08/10/2013",
        amount: 325,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "09/10/2013",
        amount: 325,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "10/10/2013",
        amount: 325,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "11/10/2013",
        amount: 325,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "12/10/2013",
        amount: 325,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "01/10/2014",
        amount: 325,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "02/10/2014",
        amount: 325,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "03/10/2014",
        amount: 325,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "04/10/2014",
        amount: 345,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "05/10/2014",
        amount: 345,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "06/10/2014",
        amount: 345,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "07/10/2014",
        amount: 345,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "08/10/2014",
        amount: 345,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "09/10/2014",
        amount: 345,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "10/10/2014",
        amount: 345,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "11/10/2014",
        amount: 345,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "12/10/2014",
        amount: 345,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "01/10/2015",
        amount: 345,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "02/10/2015",
        amount: 345,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "03/10/2015",
        amount: 345,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "04/10/2015",
        amount: 355,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "05/10/2015",
        amount: 355,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "06/10/2015",
        amount: 355,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "07/10/2015",
        amount: 355,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "08/10/2015",
        amount: 355,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "09/10/2015",
        amount: 355,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "10/10/2015",
        amount: 355,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "11/10/2015",
        amount: 355,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "12/10/2015",
        amount: 355,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "01/10/2016",
        amount: 375,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "02/10/2016",
        amount: 375,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "03/10/2016",
        amount: 375,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "04/10/2016",
        amount: 375,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "05/10/2016",
        amount: 375,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "06/10/2016",
        amount: 375,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "07/10/2016",
        amount: 375,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "08/10/2016",
        amount: 375,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "09/10/2016",
        amount: 375,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "10/10/2016",
        amount: 375,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "11/10/2016",
        amount: 375,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "12/10/2016",
        amount: 375,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "01/10/2017",
        amount: 375,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "02/10/2017",
        amount: 375,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "03/10/2017",
        amount: 375,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "04/10/2017",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "05/10/2017",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "06/10/2017",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "07/10/2017",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "08/10/2017",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "09/10/2017",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "10/10/2017",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "11/10/2017",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "12/10/2017",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "01/10/2018",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "02/10/2018",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "03/10/2018",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "04/10/2018",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "05/10/2018",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "06/10/2018",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "07/10/2018",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "08/10/2018",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "09/10/2018",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "10/10/2018",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "11/10/2018",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "12/10/2018",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "01/10/2019",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "02/10/2019",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "03/10/2019",
        amount: 395,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "04/10/2019",
        amount: 430,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "05/10/2019",
        amount: 430,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "06/10/2019",
        amount: 430,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "07/10/2019",
        amount: 430,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "08/10/2019",
        amount: 430,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "09/10/2019",
        amount: 430,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "10/10/2019",
        amount: 430,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "11/10/2019",
        amount: 430,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "12/10/2019",
        amount: 430,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "01/10/2020",
        amount: 430,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "02/10/2020",
        amount: 430,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "03/10/2020",
        amount: 430,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "04/10/2020",
        amount: 430,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "05/10/2020",
        amount: 430,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    },    {
        date: "06/10/2020",
        amount: 430,
        checkNumber: unit25StartingCheck++,
        category: "dues payment",
        shareholderId: 7
    }    
])
.then(result => {
    console.log("lots of transactions added successfully");
})
.catch(error => {
    console.log(`Error seeding transactions: ${error}`);
})