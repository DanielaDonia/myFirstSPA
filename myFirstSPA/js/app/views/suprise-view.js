
define(function(){
    var internals={
        handlers:{},
        elements: {}
    };
    
    var externals={};

    internals.createSupriseButton = function(){
        return '<button class="suprise"><strong>Click me for a suprise...</strong></button>';
    };

    internals.createRubik = function(){
        return '<div class="rubik-cube">' +
            '<div class="face"></div>' +
            '<div class="face"></div>' +
            '<div class="face"></div>' +
            '<div class="face"></div>' +
            '<div class="face"></div>' +
            '<div class="face"></div>' +
        '</div>';
    };

 internals.renderSupriseButton = function(){
        if(internals.elements.button){
            return;
        }

        internals.elements.button = $(internals.createSupriseButton());
        internals.elements.button.click(internals.handlers['button']);
        internals.elements.app.append(internals.elements.button);
    };

    internals.renderRubik = function(){
        if(internals.elements.createRubik){
            internals.elements.createRubik.remove();
        }

        internals.elements.createRubik = $(internals.createRubik);
        internals.elements.app.append(internals.elements.createRubik);
    };
   

    externals.bind = function(event, handler){
        internals.handlers[event] = handler;
    };

    externals.render = function () {
        internals.elements.app = $('#app');
        internals.renderSupriseButton();
        internals.renderRubik();
    }

    return externals;
});