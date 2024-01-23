define(function(){
var internals={
    handlers:{},
    elements: {}
};

var externals={};

internals.createText = function(){
    return '<div class="textFirstView">Ready to embark in a new adventure?' + '<br>' + 
    '<p id=question>Just press this suspicious button !!!</p>'
    +'</div>'
};



internals.createSecondText = function(){
    return '<div class="secondTextFirstView">I guess you should try press the character Card...' + 
    
    +'</div>'
};


internals.createButton = function(){
    return '<button class="random-character"><strong>Click me for a random trip</strong></button>';

};


externals.createGift = function(){
    return '<div class="gift-box">' +
    '<img id="rickDacing" src="rick-rick-and-morty.gif">'
    +'</div>';
};


internals.createCharacterCard = function(character){
    return(
        '<div>' + '<p id= name>' +
            character.name +
            '</p>' + '<br>' +
            '<img class="centered-image" src="' + character.image + '" alt="' + character.name + '"/>' +
            '<br>' +
           ' <p><strong>Status: </strong>' +
           character.status +
            '</p>' + 
            '<p class="additional-text">Uhhhh go ahead and click on the image card</p>' +
            '</div>' 
        
    );
};

internals.renderCreateText = function(){
    if (!internals.elements.createText) {
    var textElement = document.createElement('div');
    textElement.innerHTML = internals.createText();
    internals.elements.app.append(textElement);
    internals.elements.createText = true;
}
}

internals.renderCharacter = function(character){
   
    if(internals.elements.characterCard){
        internals.elements.characterCard.empty();
    }
    internals.elements.characterCard = $(internals.createCharacterCard(character));
    
   internals.elements.characterCard.click(function(){
    window.location.hash = '#locations';
console.log('clicked');
   });
    internals.elements.app.append(internals.elements.characterCard);

};

internals.renderButton = function(){
    if(internals.elements.button){
        return;
    }

    internals.elements.button=$(internals.createButton());
    internals.elements.button.click(internals.handlers['button']);
    internals.elements.app.append(internals.elements.button);

};

internals.renderGift = function(){
    if(internals.elements.gift){
        internals.elements.gift.remove();
    }
    internals.elements.gift=$(externals.createGift());
    internals.elements.body.append(internals.elements.gift);
}

externals.bind=function(event,handler){
    internals.handlers[event] = handler;
};




externals.render = function(character){
    internals.elements.app = $('#app');
    internals.elements.body=$('body');
     // Check if the current view is #app
     if (window.location.hash === '#home' || window.location.hash === '') {
        internals.renderCreateText();
        internals.renderButton();
        if(character){
            internals.renderCharacter(character);
        }
        internals.renderGift();
    } else {
        // If not #app, remove the gift
        if(internals.elements.gift){
            internals.elements.gift.remove();
            console.log('yoooo')
        }
    }
};



return externals;
});