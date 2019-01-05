let meteorSpace = {} ;
meteorSpace.state1 = function(){ // here 'play' is a state in this game
} ;

let centerX = 800/2, centerY = 580/2 ;

meteorSpace.state1.prototype = {
    preload: function(){
        game.load.image('button', '/assests/img/game_assets/imageplay.png') ;

        
    } ,
    create: function(){
        game.stage.backgroundColor = '#000000' ;

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL ;

        playbutton  = game.add.button(centerX, centerY, 'button', changeState, this) ;
        playbutton.anchor.set(0.5,0.5) ;
        playbutton.scale.set(1.2) ;
        playbutton.inputEnabled = true ;
        console.log('state1') ;
        
    } ,
    update: function(){}
} ;

function changeState(){
    game.state.start('state2') ;
}
