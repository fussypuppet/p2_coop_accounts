const db = require('./models');

db.shareholder.bulkCreate([
    {
        name: "Bilbo Baggins",
        startDate: "06/01/1989",
        unitId: 1
    },
    {
        name: "Lobelia Sackville-Baggins",
        name2: "Lotho Sackville-Baggins",
        startDate: "01/01/2008",
        unitId: 2
    },
    {
        name: "Bodo Proudfoot",
        startDate: "04/01/2011",
        unitId: 27
    },
    {
        name: "Griffo Boffin",
        startDate: "02/01/1995",
        unitId: 26
    },
    {
        name: "Holfast Gardner",
        startDate: "04/01/2011",
        unitId: 25
    },
    {
        name: "Hugo Bracegirdle",
        startDate: "03/01/2001",
        unitId: 24
    },
    {
        name: "Morro Burrows",
        name2: "Mosco Burrows",
        startDate: "09/01/2005",
        unitId: 23
    },
    {
        name: "Robin Smallburrow",
        name2: "Daddy Twofoot",
        startDate: "06/01/2006",
        unitId: 22
    },
    {
        name: "Samwise Gamgee",
        name2: "Daisy Boffin",
        startDate: "10/01/2014",
        unitId: 21
    },
    {
        name: "Andwise Roper",
        startDate: "08/01/2001",
        unitId: 20
    },
    {
        name: "Bill Butcher",
        startDate: "03/01/2013",
        unitId: 19
    },
    {
        name: "Camellia Sackville",
        startDate: "03/01/1996",
        unitId: 18
    },
    {
        name: "Eleanor Fairbairn",
        startDate: "01/01/2000",
        unitId: 17
    },
    {
        name: "Halfred Greenhand",
        startDate: "03/01/1999",
        unitId: 16
    },
    {
        name: "Hob Gammidge",
        startDate: "09/01/1982",
        unitId: 15
    },
    {
        name: "Ted Sandyman",
        startDate: "07/01/2014",
        unitId: 14
    },
    {
        name: "Meriadoc Brandybuck",
        startDate: "03/01/2010",
        unitId: 13
    },
    {
        name: "Muddy-feet Maggot",
        startDate: "05/01/1999",
        unitId: 12
    },
    {
        name: "Falco Chubb-Baggins",
        startDate: "01/01/2011",
        unitId: 11
    },
    {
        name: "Lily Goodbody",
        startDate: "07/01/2010",
        unitId: 10
    },
    {
        name: "Peregrin Took",
        startDate: "12/01/2013",
        unitId: 9
    },
    {
        name: "Rosie Cotton",
        name2: "Jolly Cotton",
        startDate: "10/01/2006",
        unitId: 8
    },
    {
        name: "Tobold Hornblower",
        startDate: "10/01/2003",
        unitId: 7
    },
    {
        name: "Fastred Greenholm",
        startDate: "10/01/2017",
        unitId: 6
    },
    {
        name: "Bucca Marish",
        startDate: "01/01/2016",
        unitId: 5
    },
    {
        name: "Pearl Butcher",
        startDate: "04/01/2014",
        unitId: 4
    },
    {
        name: "Fatty Bolger",
        startDate: "01/01/2014",
        unitId: 3
    }
]).then(function(createResponse) {
    console.log("createed " + JSON.stringify(createResponse));
})