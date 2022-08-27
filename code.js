var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Crear al jugador Sofía
 var Sofia;
Sofia=createSprite(27,23,20,20);
Sofia.shapeColor = "red";
  
  var cup;
  cup = createSprite(302,375,25,50);



function draw() {
background("skyblue");
drawSprites();
createEdgeSprites();
Sofia.bounceOff(edges);
cardboard1.shapeColor = "green";
cardboard2.shapeColor = "green";
cardboard3.shapeColor = "green";
cardboard4.shapeColor = "green";
cardboard5.shapeColor = "green";
cardboard6.shapeColor = "green";
cardboard7.shapeColor = "green";
cardboard8.shapeColor = "green";
cardboard9.shapeColor = "green";
cardboard10.shapeColor = "green";
cardboard11.shapeColor = "green";
cardboard12.shapeColor = "green";
cardboard13.shapeColor = "green";
cardboard14.shapeColor = "green";
cardboard15.shapeColor = "green";
cardboard16.shapeColor = "green";
cardboard17.shapeColor = "green";
cardboard18.shapeColor = "green";
cardboard19.shapeColor = "green";
cardboard20.shapeColor = "green";
cardboard21.shapeColor = "green";
cardboard22.shapeColor = "green";
cardboard23.shapeColor = "green";
cardboard24.shapeColor = "green";
cup.shapeColor = "gold";
Sofia.bounceOff(edges);
Sofia.bounceOff(cardboard1);
Sofia.bounceOff(cardboard2);
Sofia.bounceOff(cardboard3);
Sofia.bounceOff(cardboard4);
Sofia.bounceOff(cardboard5);
Sofia.bounceOff(cardboard6);
Sofia.bounceOff(cardboard7);
Sofia.bounceOff(cardboard8);
Sofia.bounceOff(cardboard9);
Sofia.bounceOff(cardboard10);
Sofia.bounceOff(cardboard11);
Sofia.bounceOff(cardboard12);
Sofia.bounceOff(cardboard13);
Sofia.bounceOff(cardboard14);
Sofia.bounceOff(cardboard15);
Sofia.bounceOff(cardboard16);
Sofia.bounceOff(cardboard17);
Sofia.bounceOff(cardboard18);
Sofia.bounceOff(cardboard19);
Sofia.bounceOff(cardboard20);
Sofia.bounceOff(cardboard21);
Sofia.bounceOff(cardboard22);
Sofia.bounceOff(cardboard23);
Sofia.bounceOff(cardboard24);
  
Sofia.velocityX=0;
Sofia.velocityY=0;
        
  
  
 if (keyDown("DOWN_ARROW")) {
 Sofia.velocityX=0;
 Sofia.velocityY=+4;
  }
    
 if (keyDown("UP_ARROW")) {
 Sofia.velocityX=0;
 Sofia.velocityY=-4;
  }

   
 if (keyDown("RIGHT_ARROW")) {
 Sofia.velocityX=+4;
 Sofia.velocityY=0;
  }
   
if (keyDown("LEFT_ARROW")) {
 Sofia.velocityX=-4;
 Sofia.velocityY=0;
 }
 
 textSize(25);
   stroke("grey");
   text("Sofia",45,20);
   
   textSize(25);
   stroke("grey");
   text("Cup",295,340);
   
   
    if (Sofia.isTouching(cup)) {
  background("white");
   textSize(25);
   stroke("grey");
   text("¡YOU WON!",145,209);
  }
 
}
  

  

 

  var cardboard1; 
  cardboard1 = createSprite(10,49,125,18);
    Sofia.bounceOff(cardboard1);
    if (Sofia.collide(cardboard1)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard2; 
  cardboard2 = createSprite(115,30,20,60);
    Sofia.bounceOff(cardboard2); 
    if (Sofia.isTouching(cardboard2)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard3; 
  cardboard3 = createSprite(0,100,250,18);
    Sofia.bounceOff(cardboard3);
    if (Sofia.isTouching(cardboard3)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard4; 
  cardboard4 = createSprite(165,130,20,80);
    Sofia.bounceOff(cardboard4);
    if (Sofia.isTouching(cardboard4)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard5; 
  cardboard5 = createSprite(165,165,110,18);
    Sofia.bounceOff(cardboard5);
    if (Sofia.isTouching(cardboard5)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard6; 
  cardboard6 = createSprite(225,99,110,18); 
    Sofia.bounceOff(cardboard6);
    if (Sofia.isTouching(cardboard6)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard7; 
  cardboard7 = createSprite(200,30,20,60);
    Sofia.bounceOff(cardboard7);
    if (Sofia.isTouching(cardboard7)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard8; 
  cardboard8 = createSprite(60,195,20,80);
    Sofia.bounceOff(cardboard8);
    if (Sofia.isTouching(cardboard8)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard9; 
  cardboard9 = createSprite(60,244,250,18);
    Sofia.bounceOff(cardboard9); 
    if (Sofia.isTouching(cardboard9)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard10; 
  cardboard10 = createSprite(288,81,18,55);
    Sofia.bounceOff(cardboard10);
    if (Sofia.isTouching(cardboard10)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard11; 
  cardboard11 = createSprite(225,265,18,60);
    Sofia.bounceOff(cardboard11);
    if (Sofia.isTouching(cardboard11)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard12; 
  cardboard12 = createSprite(320,63,50,18);
    Sofia.bounceOff(cardboard12); 
    if (Sofia.isTouching(cardboard12)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard13; 
  cardboard13 = createSprite(199,304,70,18);
    Sofia.bounceOff(cardboard13);
    if (Sofia.isTouching(cardboard13)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard14; 
  cardboard14 = createSprite(66,304,130,18);
    Sofia.bounceOff(cardboard14);
    if (Sofia.isTouching(cardboard14)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard15; 
  cardboard15 = createSprite(173,338,18,50);
    Sofia.bounceOff(cardboard15);
    if (Sofia.isTouching(cardboard15)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard16; 
  cardboard16 = createSprite(102,354,125,18);
    Sofia.bounceOff(cardboard16);
    if (Sofia.isTouching(cardboard16)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard17; 
  cardboard17 = createSprite(280,349,18,100);
    Sofia.bounceOff(cardboard17);
    if (Sofia.isTouching(cardboard17)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard18; 
  cardboard18 = createSprite(316,308,90,18);
    Sofia.bounceOff(cardboard18);
    if (Sofia.isTouching(cardboard18)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard19; 
  cardboard19 = createSprite(335,240,138,18);
    Sofia.bounceOff(cardboard19); 
    if (Sofia.isTouching(cardboard19)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard20; 
  cardboard20 = createSprite(340,200,18,70);
    Sofia.bounceOff(cardboard20); 
    if (Sofia.isTouching(cardboard20)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard21; 
  cardboard21 = createSprite(320,156,100,18);
    Sofia.bounceOff(cardboard21);
    if (Sofia.isTouching(cardboard21)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard22; 
  cardboard22 = createSprite(390,40,18,80);
    Sofia.bounceOff(cardboard22);
    if (Sofia.isTouching(cardboard22)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard23; 
  cardboard23 = createSprite(207,354,50,18);
    Sofia.bounceOff(cardboard23);
    if (Sofia.isTouching(cardboard23)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }
    
  var cardboard24; 
  cardboard24 = createSprite(362,324,18,50);
    Sofia.bounceOff(cardboard24); 
    if (Sofia.isTouching(cardboard24)) {
   Sofia.velocityX = 0;
   Sofia.velocityY = 0;
   Sofia.x = 27;
   Sofia.y = 23;
 }

  


//Crear la copa.

 
   function checkwin()
{
  if ( Sofia.collide(cup))  
{
  textSize(50);
  stroke("red");
  background("white");
   text("You Win",321,272);
}
}
  
  






































function resetSofia()
{
  Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);
}

function checkwin()
{
  if ( Sofia.collide(cup))  
{
  textSize(40);
  stroke("red");
  text("You Win", 200,200);
  }
}























// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
