$(function() {
    console.log("Loading locations");
    
    function loadLocations(){
        $.getJSON("/api/locations/", function(locations){
            console.log(locations);
            var message = "No location !";
            if(locations.length > 0){
                message = locations[0].city;
            }
            $("#location").text(message);
        });
    };
    
    loadLocations();
    setInterval(loadLocations, 2000);
});