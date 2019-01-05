/// <reference path="D:/copy_cb Project/tsDefinitions/phaser.d.ts" />

meteorSpace.state4 = function(){ // here 'play' is a state in this game

} ;

let menuButton , restartButton, saveButton, button1Text, button2Text, button3Text ;


meteorSpace.state4.prototype = {
    preload: function(){
        game.load.image('menu', '/assests/img/game_assets/menubutton.png') ;
        game.load.image('restart', '/assests/img/game_assets/restartbutton.png') ;
        game.load.image('savescore', '/assests/img/game_assets/savebutton.png') ;
    } ,
    create: function(){
        game.stage.backgroundColor = '	#000000' ;
        menuButton = game.add.button(centerX-100, centerY, 'menu', gotoStart, this) ;
        menuButton.anchor.set(0.5,0.5) ;
        menuButton.scale.set(1.2) ;
        restartButton = game.add.button(centerX, centerY, 'restart', restartGame, this) ;
        restartButton.anchor.set(0.5, 0.5) ;
        saveButton = game.add.button(centerX+100, centerY, 'savescore', saveScore, this) ;
        saveButton.anchor.set(0.5,0.5) ;
        saveButton.scale.set(1.4) ;
        
        
        
        button1Text = game.add.text(centerX-135, centerY + 40, 'StartScreen', { font: '10pt arial', fill: '#FFE800' } ) ;
        button2Text = game.add.text(centerX-40, centerY + 40, 'Restart Game', { font: '10pt arial', fill: '#FFE800' } ) ;
        button3Text = game.add.text(centerX+65, centerY + 40, 'Save Score', { font: '10pt arial', fill:   '#FFE800' } ) ;

        if( score < 20000){
            button3Text.visible = false ;
            saveButton.visible = false ;
            menuButton.x = centerX - 50 ;
            restartButton.x = centerX + 50 ;
            button1Text.x = centerX - 85 ;
            button2Text.x = centerX + 10 ;

            alertText =  game.add.text(centerX, centerY-50, 'Player Score must be Greater than 40,000 to save', { font: '12pt consolad', fill: '#fff' } ) ;
            alertText.anchor.set(0.5,0.5) ;
        }
        
        console.log('state4') ;
        
    } ,
    update: function(){}
} ;

function gotoStart(){
    score = 0 ;
    game.state.start('state2') ;
}

function restartGame(){
    score = 0 ;
    game.state.start('state3') ;
}

function saveScore(){
    $('#score').val(score) ;
    $('#myModal').modal('show') ;
}

