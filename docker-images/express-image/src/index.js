if(process.env.LOCATIONCNT == undefined){
    process.env.LOCATIONCNT = 0;
}

var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send(generateLocation());
});

app.listen(3000, function(){
    console.log('Accepting HTTP requests on port 3000!');
});

function generateLocation(){
    var numberOfLocations = chance.integer({
        min: 0,
        max: 10
    });
    console.log("number of locations : " + numberOfLocations);
    var locations = [];
    for(var i = 0; i < numberOfLocations; i++){
        var country = chance.country({full: true});
        var street = chance.street({country: country});
        locations.push({
            street: street,
            number: chance.areacode(),
            postalNumber: chance.postal(),
            city: chance.city() + process.env.LOCATIONCNT,
            country: country
        });
    }
    console.log(locations);
    process.env.LOCATIONCNT = parseInt(process.env.LOCATIONCNT)+1;
    return locations;
}