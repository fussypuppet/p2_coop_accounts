const db = require('./models');

db.dues.bulkCreate([
    {
        size: "small",
        amount: 300,
        startDate: "04/01/2010",
        endDate: "04/01/2012"
    },
    {
        size: "medium",
        amount: 325,
        startDate: "04/01/2010",
        endDate: "04/01/2012"
    },
    {
        size: "large",
        amount: 340,
        startDate: "04/01/2010",
        endDate: "04/01/2012"
    }    
])
.then(result => {
    console.log("round 1 complete");
})

db.dues.bulkCreate([
    {
        size: "small",
        amount: 320,
        startDate: "04/01/2012",
        endDate: "04/01/2013"
    },
    {
        size: "medium",
        amount: 350,
        startDate: "04/01/2012",
        endDate: "04/01/2013"
    },
    {
        size: "large",
        amount: 375,
        startDate: "04/01/2012",
        endDate: "04/01/2013"
    }
])
.then(result => {
    console.log("round 2 complete");
})

db.dues.bulkCreate([
    {
        size: "small",
        amount: 325,
        startDate: "04/01/2013",
        endDate: "04/01/2014"
    },
    {
        size: "medium",
        amount: 360,
        startDate: "04/01/2013",
        endDate: "04/01/2014"
    },
    {
        size: "large",
        amount: 385,
        startDate: "04/01/2013",
        endDate: "04/01/2014"
    }
])
.then(result => {
    console.log("round 3 complete");
})

db.dues.bulkCreate([
    {
        size: "small",
        amount: 345,
        startDate: "04/01/2014",
        endDate: "04/01/2015"
    },
    {
        size: "medium",
        amount: 375,
        startDate: "04/01/2014",
        endDate: "04/01/2015"
    },
    {
        size: "large",
        amount: 400,
        startDate: "04/01/2014",
        endDate: "04/01/2015"
    }
])
.then(result => {
    console.log("round 4 complete");
})

db.dues.bulkCreate([
    {
        size: "small",
        amount: 355,
        startDate: "04/01/2015",
        endDate: "01/01/2016"
    },
    {
        size: "medium",
        amount: 395,
        startDate: "04/01/2015",
        endDate: "01/01/2016"
    },
    {
        size: "large",
        amount: 425,
        startDate: "04/01/2015",
        endDate: "01/01/2016"
    }
])
.then(result => {
    console.log("round 5 complete");
})

db.dues.bulkCreate([
    {
        size: "small",
        amount: 375,
        startDate: "01/01/2016",
        endDate: "04/01/2016"
    },
    {
        size: "medium",
        amount: 415,
        startDate: "01/01/2016",
        endDate: "04/01/2016"
    },
    {
        size: "small",
        amount: 445,
        startDate: "01/01/2016",
        endDate: "04/01/2016"
    }
])
.then(result => {
    console.log("round 6 complete");
})

db.dues.bulkCreate([
    {
        size: "small",
        amount: 375,
        startDate: "04/01/2016",
        endDate: "04/01/2017"
    },
    {
        size: "medium",
        amount: 430,
        startDate: "04/01/2016",
        endDate: "04/01/2017"
    },
    {
        size: "large",
        amount: 470,
        startDate: "04/01/2016",
        endDate: "04/01/2017"
    }
])
.then(result => {
    console.log("round 7 complete");
})

db.dues.bulkCreate([
    {
        size: "small",
        amount: 395,
        startDate: "04/01/2017",
        endDate: "04/01/2019"
    },
    {
        size: "medium",
        amount: 465,
        startDate: "04/01/2017",
        endDate: "04/01/2019"
    },
    {
        size: "large",
        amount: 515,
        startDate: "04/01/2017",
        endDate: "04/01/2019"
    }
])
.then(result => {
    console.log("round 8 complete");
})

db.dues.bulkCreate([
    {
        size: "small",
        amount: 430,
        startDate: "04/01/2019",
    },
    {
        size: "medium",
        amount: 510,
        startDate: "04/01/2019"
    },
    {
        size: "large",
        amount: 570,
        startDate: "04/01/2019"
    }
])
.then(result => {
    console.log("round 9 complete");
})
