define(['views/suprise-view'], function(supriseView){
        var externals = {};
        var internals = {};
        externals.start = function () {
            internals.bindEventHandlers();
            console.log("Binding event handlers");
            supriseView.render();
            
        };
        internals.bindEventHandlers = function(){
            supriseView.bind('button',internals.buttonHandler);        
                    
                };
        internals.buttonHandler = function() {
                    console.log("click");
                    console.log(supriseView.renderRubik);
                   
                        supriseView.renderRubik();
                        console.log("click2");
                };
       
    
        return externals;
    
    });