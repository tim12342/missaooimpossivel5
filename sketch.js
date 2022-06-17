var bg_img, ethan_img, s1_img, s2_img, s3_img, s4_img, s5_img, s6_img, s7_img, s8_img, s9_img, s10_img;
var ethan;
var solo;
var s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;
var bullet, gBullet,gBullet2;
var mortes = 0;
var pontos = 0;
function preload()
{
  bg_img = loadImage('background.jpg');
  ethan_img = loadImage( 'ethan.gif');
  s1_img = loadAnimation('sordado.png');
  s2_img = loadAnimation('s2.png');
  s3_img = loadAnimation('s4.png');
  s5_img = loadAnimation('s3.png');
  s4_img = loadAnimation('s5.png');
  s6_img = loadAnimation('s6.png');
  s7_img = loadAnimation('s7.png');
  s8_img = loadAnimation('s8.png');
  s9_img = loadAnimation('s9.png');
  s10_img = loadAnimation('s10.png');
}

function setup() 
{
  createCanvas(3000, windowHeight);
 ethan = createSprite(100, height-150);
  ethan.addImage(ethan_img);

 gBullet = new Group();
 gBullet2 = new Group();
 ethan.scale = 0.5;

  solo = createSprite(width/2, height -24, width, 20);

  s1 = createSprite(2300, height-150);
  s1.addAnimation("s1",s1_img);
  s1.scale = 0.5;
  s1.velocityX = -0.4;

  s2 = createSprite(2300, height-150);
  s2.addAnimation("s2",s2_img);
  s2.scale = 0.5;
  s2.velocityX = -1;

  s3 = createSprite(2300, height-150);
  s3.addAnimation("s3",s3_img);
  s3.scale = 0.5;
  s3.velocityX = -2;

  s4 = createSprite(2300, height-150);
  s4.addAnimation("s4",s4_img);
  s4.scale = 0.5;
  s4.velocityX = -0.1;

  s5 = createSprite(2300, height-150);
  s5.addAnimation("s5",s5_img);
  s5.scale = 0.5;
  s5.velocityX = 0.6;

  s6 = createSprite(2300, height-150);
  s6.addAnimation("s6",s6_img);
  s6.scale = 0.5;
  s6.velocityX = 2;

  s7 = createSprite(2300, height-150);
  s7.addAnimation("s7",s7_img);
  s7.scale = 0.5;
  s7.velocityX = 1;

  s8 = createSprite(2300, height-150);
  s8.addAnimation("s8",s8_img);
  s8.scale = 0.5;
  s8.velocityX = -1.5;

  s9 = createSprite(2300, height-150);
  s9.addAnimation("s9",s9_img);
  s9.scale = 0.5;
  s9.velocityX = -0.8;

  s10 = createSprite(2300, height-150);
  s10.addAnimation("s10",s10_img);
  s10.scale = 0.5;
  s10.velocityX = -2.5;


 
}

function draw() 
{
  background(bg_img);
 
  //createEdgeSprites();
  
if (keyDown("space")&& ethan.y >=300)
{
    ethan.velocityY = -12;
}
ethan.velocityY += 0.5;
ethan.collide(solo);
console.log(ethan.y)
 if (keyDown("A"))
 {
  ethan.x -= 10;
 }
  if (keyDown("D"))
  {
   ethan.x += 10;
 }


 if (keyDown("enter")){
  atirarethan();
 }
 atirarsoldado(s1);
 atirarsoldado(s2);
 atirarsoldado(s3);
 atirarsoldado(s4); 
 atirarsoldado(s5);
 atirarsoldado(s6);
 atirarsoldado(s7);
 atirarsoldado(s8);
 atirarsoldado(s9);
 atirarsoldado(s10);
 
  drawSprites();

  if (gBullet2.isTouching(ethan))
  {
    mortes++;
  }
  if (mortes == 50 )
  {
    ethan.destroy();
    textSize(50)
    fill("red")
    text("MORREU HAHAHAHAHHAHAHAHAHAHHAHAHHAHAH",width/2-80,height/2);

    
  }
  if (gBullet.isTouching(s1))
  {
    s1.destroy();
      pontos++;
      gBullet.destroyEach();
  }

  if (gBullet.isTouching(s2))
  {
    s2.destroy();
      pontos++;
      gBullet.destroyEach();
  }

  if (gBullet.isTouching(s3))
  {
    s3.destroy();
      pontos++;
      gBullet.destroyEach();
  }

  if (gBullet.isTouching(s4))
  {
    s4.destroy();
      pontos++;
      gBullet.destroyEach();
  }

  if (gBullet.isTouching(s5))
  {
    s5.destroy();
      pontos++;
      gBullet.destroyEach();
  }

  if (gBullet.isTouching(s6))
  {
    s6.destroy();
      pontos++;
      gBullet.destroyEach();
  }

  if (gBullet.isTouching(s7))
  {
    s7.destroy();
      pontos++;
      gBullet.destroyEach();
  }

  if (gBullet.isTouching(s8))
  {
    s8.destroy();
      pontos++;
      gBullet.destroyEach();
  }

  if (gBullet.isTouching(s9))
  {
    s9.destroy();
      pontos++;
      gBullet.destroyEach();
  }

  if (gBullet.isTouching(s10))
  {
    s10.destroy();
      pontos++;
      gBullet.destroyEach();
  }
  if (pontos == 10)
  {  
    textSize(70)
    fill("red")
    text("UHUUUUUUUUUUUUUUUUUUUUUUUUUUUUUULLLLLLLLLLLL",width/2-80,height/2)
  }

}



function atirarethan()
{
if (frameCount%50==0)
{
  bullet = createSprite(ethan.x+119, ethan.y+52, 10, 10);
  bullet.shapeColor = "yellow"
  bullet.velocityX = 20;
  bullet.lifetime = 1000000;
  gBullet.add(bullet);
}
}


function atirarsoldado(soldado)
{
if (frameCount%30==0)
{
  bullet2 = createSprite(soldado.x-119, soldado.y+52, 10, 10);
  bullet2.shapeColor = "red"
  bullet2.velocityX = -10;
  bullet2.lifetime = 10000;
  gBullet2.add(bullet2);
}
}
