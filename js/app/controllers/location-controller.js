define(['views/location-view','services/location-service'], function(
    locationView,
    locationService
    ){
        var externals = {};
        var internals = {};
        externals.start = function(){
            internals.bindEventHandlers();
            locationView.render();
    
        };
        internals.bindEventHandlers = function(){
    locationView.bind('button',internals.buttonHandler);        
            
        };
        internals.buttonHandler = function() {
            console.log('heyyyy');
            var locationIndex = Math.floor(Math.random() * 10);
            locationService.getLocation(locationIndex, function(location) {
                locationView.render(locationr);
            });
        };
    
        return externals;
    
    });