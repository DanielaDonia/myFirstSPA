define(['views/character-view','services/character-service'], function(
characterView,
characterService
){
    var externals = {};
    var internals = {};
    externals.start = function(){
        internals.bindEventHandlers();
        characterView.render();

    };
    internals.bindEventHandlers = function(){
characterView.bind('button',internals.buttonHandler);        
        
    };
    internals.buttonHandler = function() {
        var characterIndex = Math.floor(Math.random() * 10);
        characterService.getCharacter(characterIndex, function(character) {
            characterView.render(character);
        });
    };

    return externals;

});