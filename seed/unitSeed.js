const db = require('../models');

db.unit.bulkCreate([
    {
        number: 1,
        size: "medium",
        shareholderId: 1
    },
    {
        number: 2,
        size: "medium",
        shareholderId: 2
    },
    {
        number: 3,
        size: "small",
        shareholderId: 27
    },
    {
        number: 4,
        size: "large",
        shareholderId: 26
    },
    {
        number: 5,
        size: "large",
        shareholderId: 25
    },
    {
        number: 6,
        size: "small",
        shareholderId: 24
    },
    {
        number: 7,
        size: "small",
        shareholderId: 23
    },
    {
        number: 8,
        size: "small",
        shareholderId: 22
    },
    {
        number: 9,
        size: "small",
        shareholderId: 21
    },
    {
        number: 10,
        size: "medium",
        shareholderId: 20
    },
    {
        number: 11,
        size: "medium",
        shareholderId: 19
    },
    {
        number: 12,
        size: "large",
        shareholderId: 18
    },
    {
        number: 14,
        size: "large",
        shareholderId: 17
    },
    {
        number: 15,
        size: "small",
        shareholderId: 16
    },
    {
        number: 16,
        size: "small",
        shareholderId: 15
    },
    {
        number: 17,
        size: "small",
        shareholderId: 14
    },
    {
        number: 18,
        size: "small",
        shareholderId: 13
    },
    {
        number: 19,
        size: "medium",
        shareholderId: 12
    },
    {
        number: 20,
        size: "medium",
        shareholderId: 11
    },
    {
        number: 21,
        size: "large",
        shareholderId: 10
    },
    {
        number: 22,
        size: "large",
        shareholderId: 9
    },
    {
        number: 24,
        size: "small",
        shareholderId: 8
    },
    {
        number: 25,
        size: "small",
        shareholderId: 7
    },
    {
        number: 26,
        size: "small",
        shareholderId: 6
    },
    {
        number: 27,
        size: "small",
        shareholderId: 5
    },
    {
        number: 28,
        size: "medium",
        shareholderId: 4
    },
    {
        number: 29,
        size: "medium",
        shareholderId: 3
    }
]).then(function(createResponse) {
    console.log("createed " + JSON.stringify(createResponse));
})