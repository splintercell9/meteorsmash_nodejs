/// <reference path="D:/copy_cb Project/tsDefinitions/phaser.d.ts" />

meteorSpace.state2 = function(){ // here 'play' is a state in this game

} ;

let text1, text2, text3, backsound ;

meteorSpace.state2.prototype = {
    preload: function(){

        game.load.image('startbg', '/assests/img/game_assets/bg1.png') ;
        game.load.bitmapFont('font1', '/assests/fonts/bitmapFonts/desyrel.png', '/assests/fonts/bitmapFonts/desyrel.xml') ;
        game.load.bitmapFont('font2', '/assests/fonts/bitmapFonts/desyrel-pink.png', '/assests/fonts/bitmapFonts/desyrel-pink.xml') ;
        game.load.spritesheet('subtitle', '/assests/img/game_assets/presstitle.png', 400, 49) ;

        game.load.audio('bgsound', '/assests/sounds/bgsound.mp3') ;
    } ,
    create: function(){
        game.add.image(0,0,'startbg') ;

        text1 = game.add.bitmapText(centerX, centerY, 'font1','METEOR SMASH',84);
        text1.anchor.set(0.5,0.5) ;

        text2 = game.add.bitmapText(centerX+200, centerY+50, 'font2','A space Arcade Game',24);
        text2.anchor.set(0.5,0.5) ;

        text3 = game.add.sprite(centerX, centerY+100, 'subtitle') ;
        text3.anchor.set(0.5,0.5) ;
        text3.animations.add('blink', [0,1,2,3,4,5,6,7]) ;
        text3.animations.play('blink', 5, true) ;

        backsound = game.add.audio('bgsound', 0.5, true) ;
        backsound.play() ;

        console.log('state2') ;
        
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.ENTER)){
            backsound.stop() ;
            game.state.start('state3') ;
            backsound.destroy() ;
            text1.destroy() ;
            text2.destroy() ;
            text3.destroy() ;
        }
    }
} ;

