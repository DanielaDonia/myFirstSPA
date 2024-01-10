define(function(){
    var internals={
        handlers:{},
        elements: {}
    };
    
    var externals={};

    internals.createText = function(){
        return '<div class="textSecondView">Oh no, another button...' 
        +'</div>'
    };
    
    internals.createButton = function(){
        return '<button class="random-location"><strong>I guess you should click me</strong></button>';
    
    };

    
internals.createSupriseButton = function(){
    return '<button class="random-suprise"><strong>Do you like suprises?</strong></button>';

};

    

    
internals.createLocationCard = function(location){
    return('<div>' + '<p id=name' + location.name + '</p>' + '</div>')
console.log('image?');
};
    

internals.renderCreateText= function(){
    if (!internals.elements.createText) {
        var textElement = document.createElement('div');
        textElement.innerHTML = internals.createText();
        internals.elements.app.append(textElement);
        internals.elements.createText = true;
    }
}



internals.renderLocation = function(location){
    if(internals.elements.createLocationCard){
        internals.elements.createLocationCard.empty();
    }
    internals.elements.createLocationCard=$(internals.createLocationCard(location));
    internals.elements.app.append(internals.elements.createLocationCard);
}


internals.renderButton = function(){
    if(internals.elements.button){
        return;
    }

    internals.elements.button=$(internals.createButton());
    internals.elements.button.click(internals.handlers['button']);
    internals.elements.app.append(internals.elements.button);

};


internals.renderButtonSuprise = function(){
    if(internals.elements.supriseButton){
        return;
    }
    internals.elements.supriseButton=$(internals.createSupriseButton());
    internals.elements.supriseButton.click(function(){
        window.location.hash = '#suprise';
    });
    internals.elements.app.append(internals.elements.supriseButton);
}


externals.bind=function(event,handler){
    internals.handlers[event] = handler;
};
externals.render = function(location){
    internals.elements.app=$('#app');
    internals.renderCreateText();
    internals.renderButton();
    if(location){
        internals.renderLocation(location);
    }

    internals.renderButtonSuprise();
}


    return externals;
    });