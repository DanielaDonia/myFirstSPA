define(() => {
var internals = {};
var externals = {};


internals.routes = {
    home:{
        hash:"#home",
        controller:"character-controller"
        
    },

    location:{
        hash:"#locations",
        controller:"location-controller"

    },

    suprise:{
        hash:"#suprise",
        controller:"suprise-controller"
    }
};

internals.defaultRoute ="home";
internals.currentHash = "";

function loadDeafultRoute(){
    window.location.hash = internals.routes[internals.loadDeafultRoute].hash;

}


function loadController(controllerName){
    internals.currentHash = window.location.hash;
    require(['controllers/' + controllerName],function(controller){
       try{
        $('#app').empty();
        controller.start();
       } catch(err){
        console.log(err.stack);
        loadDeafultRoute();
       }
    })
}

function hashCheck(){

    if(window.location.hash === internals.currentHash){
        return;
    }

    var routeName = Object.keys(internals.routes).find(function(name){
        return window.location.hash === internals.routes[name].hash;
    });
    if(!routeName){
        loadDeafultRoute();
        return;
    }

    loadController(internals.routes[routeName].controller);
}

externals.start = function(){
    if(!window.location.hash)
    window.location.hash = internals.routes[internals.defaultRoute].hash;
setInterval(hashCheck,100);
}
 return externals;


console.log(internals);

});