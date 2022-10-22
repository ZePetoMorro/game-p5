function botao(x,y){
  this.y = y;
  this.x = x;
  push()
      stroke("rgba(80,80,80,0.75)");
      strokeWeight(3)
      fill("rgba(218,217,217,0.75)")
      rect(x,y,45,45,5);
      
  pop();
}

function botaoG(x,y,w,h,texto,dista,num){
  this.x=x
  this.y=y
  this.w=w
  this.h=h
  this.texto=texto
  this.dista=dista
  cor1=player.cor1;
  cor2=player.cor2;
  cor3=player.cor3;
  cor4=player.cor4;
  cor5=player.cor5;
  cor6=player.cor6;

    if(num==4){
      cor1="rgb(47,48,47)"
      cor2="rgb(181,182,180)"
      cor3="rgb(70,70,70)"
      cor4="rgb(83,83,83)"
      cor5="rgb(107,107,107)"
      cor6="rgb(51,51,51)"
    }
  
  push()
    push()
        noFill()
        stroke(cor1)
        strokeWeight(4)
        rect(x-1,y,w-0.5,h-5,6)
        noStroke()
        fill(cor2)
        rect(x-1.1,y,w-1.5,h-8,5);
        noStroke()
        fill(cor3)
        rect(x-1,y,w-2,h-7,6)
        fill(cor4)
        rect(x-1,y,w-2,h-10,6)
    fill(cor5)
        rect(x-1,y+10,w-6.3,h-35,0,0,4,4)  
    fill(cor2)
        rect(x-1,y-10,w-6.3,h-33,4)



    pop()
    push()
    stroke(cor6)
    strokeWeight(4)
    fill("#fff")
    textFont(fontee)
    if(texto.length>7&&texto.length<9){
      textSize(28)
      text(texto,dista,y+11.5)
      text(texto,dista,y+10)
    }else if(texto.length>9){
      textSize(24)
      text(texto,dista,y+11.5)
      text(texto,dista,y+10)  
    }else{
      textSize(32)
      text(texto,dista,y+13.5)
      text(texto,dista,y+12)
    }
    
    pop()
  pop()
}

function botaoN(x,y,num){

  this.x=x

  this.y=y
  w=48
  h=50.5
  cor1=player.cor1

  cor2=player.cor2

  cor3=player.cor3

  cor4=player.cor4

  cor5=player.cor5;
 if(num==4){
      cor1="rgb(47,48,47)"
      cor2="rgb(181,182,180)"
      cor3="rgb(70,70,70)"
      cor4="rgb(83,83,83)"
      cor5="rgb(107,107,107)"
      cor6="rgb(51,51,51)"
    }
push()

    push()

        noFill()

        stroke(cor1)

        strokeWeight(4)

        rect(x,y,w,h-6,6)

        noStroke()

        fill(cor4)

        rect(x,y+0.3,w-2,h-7,6)

    fill(cor5)

        rect(x+0.3,y+10,w-6.3,h-31,0,0,4,4)  

    fill(cor2)

        rect(x+0.3,y-7.7,w-6.3,h-28,4)

    pop()

    

  pop()

}

function engrenagem(x,y){
  this.x=x;
  this.y=y;
  push()
  strokeWeight(8)
  stroke(player.cor6)
noFill()
circle(x,y,18)
  
  noStroke()
translate(x,y);
	for (var i = 0; i < 8; i++) {

		push();
        fill(player.cor6)

		rotate(TWO_PI * i / 8);

		rect(15, 0 ,8,8,2);

		pop();

	}
  pop()
}
function pauseDesenho(){
  push()
stroke("rgba(80,80,80,0.75)");
      strokeWeight(3)
      triangle(680,23,680,47,680,23);
      triangle(700,23,700,47,700,23);
  pop()
}
function menuDesenhoTri(x,y){
  this.x=x;
  this.y=y;
  push()
  stroke(player.cor6);
      strokeWeight(5)
      fill("rgba(218,217,217,0.75)")
  triangle(x+8,y+12.5,x+8,y+12.5,x+35,y+12.5);
      triangle(x+8,y+23.5,x+8,y+23.5,x+35,y+23.5);
      triangle(x+8,y+34.5,x+8,y+34.5,x+35,y+34.5);
  pop()
}
function xisDesenho(){
  push()
  stroke("rgba(80,80,80,0.75)");
      strokeWeight(3)
      fill("rgba(218,217,217,0.75)")
      triangle(750,20,750,20,780,53);
      triangle(780,20,780,20,750,53);
  pop()
}
function fullscreenDesenho(x,y){
  this.y = y;
  this.x = x;
  
  push()
  stroke(player.cor6);
      strokeWeight(3)
      fill(player.cor6)
      //superior esquerdo
      triangle(x+8.5,y+7.5,x+8.5,y+17.5,x+8.5,y+7.5);
      triangle(x+8.5,y+7.5,x+16.5,y+7.5,x+8.5,y+7.5);
      //superior direito
      triangle(x+36.5,y+7.5,x+36.5,y+17.5,x+36.5,y+7.5);
      triangle(x+36.5,y+7.5,x+27.5,y+7.5,x+36.5,y+7.5);
      //inferior esquerdo
      triangle(x+8.5,y+27.5,x+8.5,y+27.5,x+8.5,y+37.5);
      triangle(x+8.5,y+37.5,x+16.5,y+37.5,x+8.5,y+37.5);
      //inferior direito
      triangle(x+36.5,y+27.5,x+36.5,y+27.5,x+36.5,y+37.5);
      triangle(x+36.5,y+37.5,x+27.5,y+37.5,x+36.5,y+37.5);
  pop()
}
function retornar(x,y){
  this.x=x;
  this.y=y;

      push()
      noFill()
      stroke(player.cor6)
      strokeWeight(8)
      strokeJoin(ROUND);
      rotate(0)
  
      beginShape();
      vertex(x+20, y+24);
      vertex(x+10, y+30);
      vertex(x+20, y+37);
      endShape()
  
      curve(x-180, y, x+15,y+30, x+30, y+15.5, x-40, y+25);
      pop()
}
function gamePad(){
     
      
    
  if(canhoto==false){  
        if(bow==true){
        botao(100,300)
        flecha(77.5,277.5)
        }
        
    push()
  
    stroke('rgba(53,53,53,0.75)');
    strokeWeight(3);
    fill('rgba(209,209,209,0.75)');
    ellipse(700,325,147,147);
  
    fill('rgba(214,214,214,0.5)');
    stroke('rgba(26,26,26,0.25)')
    strokeWeight(3);
    //cima
    

    rect(700, 275, 48, 48, 5);
    triangle(684,287,715,287,700,260);
    //esquerda
    rect(650, 325, 48, 48, 5);
    triangle(665,307,665,341,635,326);
    //direita
    rect(750, 325, 48, 48,5); 
    triangle(735,307,765,326,735,341);
    //baixo
    rect(700, 375, 48, 48, 5);
    triangle(684,365,715,365,700,390);
  
  pop()
  }
  if(canhoto==true){  
    if(bow==true){
    push()    
    translate(600,0)
        botao(100,300)
        flecha(77.5,277.5)
    pop()
    }
    
    push()
  translate(-580,0)
    stroke('rgba(53,53,53,0.75)');
    strokeWeight(3);
    fill('rgba(209,209,209,0.75)');
    ellipse(700,325,147,147);
  
    fill('rgba(214,214,214,0.5)');
    stroke('rgba(26,26,26,0.25)')
    strokeWeight(3);
    //cima
    

    rect(700, 275, 48, 48, 5);
    triangle(684,287,715,287,700,260);
    //esquerda
    rect(650, 325, 48, 48, 5);
    triangle(665,307,665,341,635,326);
    //direita
    rect(750, 325, 48, 48,5); 
    triangle(735,307,765,326,735,341);
    //baixo
    rect(700, 375, 48, 48, 5);
    triangle(684,365,715,365,700,390);
  
  pop()
  }
}
function startDesenho(x,y){
  this.x=x;
  this.y=y;
    
    push()
    fill("rgb(80,80,80)")
      stroke("rgb(80,80,80)")
      strokeWeight(5)
      strokeJoin(ROUND);
  
    beginShape();
      vertex(x+12.5, y+8);
      vertex(x+35, y+23);
      vertex(x+12.5, y+37);
      vertex(x+12.5,y+8)
      endShape()
    pop()
}
function flecha(x,y){
  this.x=x;
  this.y=y;
  push()
      
      noFill()
      stroke("rgb(80,80,80)")
      
      strokeWeight(4)
      strokeJoin(ROUND)
      push()
      beginShape();
      
      stroke("rgb(80,80,80)")
      
      strokeWeight(6)
      strokeJoin(ROUND)
       
      vertex(x+14,y+32)
      vertex(x+36,y+10)
      endShape();
      pop() 
      beginShape();
      vertex(x+24, y+8);
      vertex(x+38, y+8);
      vertex(x+38, y+22);
      vertex(x+36, y+12);
      vertex(x+24, y+8);
      
      endShape()
      noFill()
      beginShape();
      vertex(x+5, y+32);
      vertex(x+14, y+32);
      vertex(x+14, y+40);
      endShape()
      
      beginShape();
      vertex(x+8, y+26);
      vertex(x+20, y+26);
      vertex(x+20, y+38);
      endShape()
    pop()
}
function perfil(x,y,num){

  this.x=x;

  this.y=y;
  cor=player.cor6
  push()

  noFill()

  strokeWeight(4)

  stroke("rgb(80,80,80)")

  circle(x+22.5,y+22.5,32.5)

  circle(x+22.5,y+14.5, 12.5)

  pop()

  push()

  noFill()

  strokeWeight(4)

  stroke("rgb(80,80,80)")

beginShape()

  curveVertex(x+8.5,y+65)

  curveVertex(x+8.5,y+27)

  curveVertex(x+38,y+27)

  curveVertex(x+38,y+65)

endShape()

  pop()

}

function direcionalLFT(x,y,num){
  this.x=x;
  this.y=y;
  cor=player.cor6;
 if(num==4){
      cor="rgb(51,51,51)"
    }
  push()
      noFill()
      stroke(cor)
      
      strokeWeight(6)
      strokeJoin(ROUND)
      push()
      beginShape();
      
      stroke(cor)
      vertex(x+12,y+22.5)
      vertex(x+32,y+22.5)
      endShape();
      pop() 
      beginShape();
      vertex(x+14, y+15);
      vertex(x+8, y+22.5);
      vertex(x+14, y+30);
      endShape()

    pop()
}
function direcionalRGT(x,y,num){
  this.x=x;
  this.y=y;
  cor=player.cor6;
 if(num==4){
      cor="rgb(51,51,51)"
    }
  push()
      noFill()
      stroke(cor)
      
      strokeWeight(6)
      strokeJoin(ROUND)
      push()
      beginShape();
      
      stroke(cor)
      vertex(x+12,y+22.5)
      vertex(x+32,y+22.5)
      endShape();
      pop() 
      beginShape();
      vertex(x+30, y+15);
      vertex(x+36, y+22.5);
      vertex(x+30, y+30);
      endShape()

    pop()
}
function direcionalUP(x,y,num){
  this.x=x;
  this.y=y;
  cor=player.cor6;
 if(num==4){
      cor="rgb(51,51,51)"
    }
  push()
      noFill()
      stroke(cor)
      
      strokeWeight(6)
      strokeJoin(ROUND)
      push()
      beginShape();
      
      stroke(cor)
      vertex(x+22,y+10)
      vertex(x+22,y+35)
      endShape();
      pop() 
      beginShape();
      vertex(x+13, y+28);
      vertex(x+22, y+37);
      vertex(x+31, y+28);
      endShape()

    pop()
}
function direcionalDWN(x,y,num){
  this.x=x;
  this.y=y;
  cor=player.cor6;
 if(num==4){
      cor="rgb(51,51,51)"
    }
  push()
      noFill()
      stroke(cor)
      
      strokeWeight(6)
      strokeJoin(ROUND)
      push()
      beginShape();
      
      stroke(cor)
      vertex(x+22,y+10)
      vertex(x+22,y+35)
      endShape();
      pop() 
      beginShape();
      vertex(x+13, y+17);
      vertex(x+22, y+8);
      vertex(x+31, y+17);
      endShape()

    pop()
}

function espaco(x,y){
  this.x=x;
  this.y=y;
  push()
  noFill()
  strokeWeight(6)
  stroke("rgb(51,51,51)")
  strokeJoin(ROUND);
  beginShape()
  vertex(x+25,y+25)
  vertex(x+25,y+40)
  vertex(x+175,y+40)
  vertex(x+175,y+25)
  endShape()
  pop()
}

function playerVar(){
  
  switch(player.num){
        case 0:
          player.color = "#ff1212";
          player.name="Exú"
          player.bgColor = "#aa1c1c"
          player.bg = fundo1
      
      player.cor1="rgb(104,12,12)"
      player.cor2="rgb(233,53,53)"
      player.cor3="rgb(155,16,16)"
      player.cor4="rgb(181,24,24)"
      player.cor5="rgb(204,28,28)"
      player.cor6="rgb(93,4,4)"
      
        break
        case 1:
          player.color ="#19DD16";
          player.name="Oxóssi"
          player.bgColor = "#16a520"
          
          player.bg = fundo2
        
      player.cor1="rgb(16,104,12)"
      player.cor2="rgb(161,233,53)"
      player.cor3="rgb(61,155,16)"
      player.cor4="rgb(86,181,24)"
      player.cor5="rgb(111,204,28)"
      player.cor6="rgb(4,95,15)"
      
      break
        case 2:
          player.color ="#0D35B3"
          player.name="Ogum"
          player.bgColor = "#1c26aa"
          player.bg = fundo3
      
      player.cor1="rgb(12,18,104)"
      player.cor2="rgb(53,66,233)"
      player.cor3="rgb(16,26,155)"
      player.cor4="rgb(24,42,181)"
      player.cor5="rgb(28,40,204)"
      player.cor6="rgb(4,7,95)"
      
          break
          case 3:
          player.color ="#B30D0D";
          player.name="Pomba gira"
          player.bgColor = "#800c0c"
          player.bg = fundo4
      
      player.cor1="rgb(78,9,9)";
      player.cor2="rgb(185,43,43)";
      player.cor3="rgb(111,12,12)";
      player.cor4="rgb(128,18,18)";
      player.cor5="rgb(148,21,21)";
      player.cor6="rgb(48,2,2)";
      }
  if(player.num==1){
    bow=true;
  }else{
    bow=false
  }
}
function personagem(){
  playerVar()
  if(tela==1){
  push() 
    noStroke()
    fill(player.color)
  rect(plX,plY,pWidth,pHeight);
  pop()
  
  }
}
function tiros(){
   for(var i=0;i<tirosX.length;i++){
      hitBoxX=tirosX[i];
      hitBoxY=tirosY[i]+29.5
      push()
      noFill()
      strokeWeight(2)
      stroke("#FF000000")
      rect(hitBoxX,hitBoxY,tirosW,tirosH)
      pop()
      push()
      fill("#FFC107")
      stroke("#FFC107")
      strokeWeight(2)
      strokeJoin(ROUND)
      
      rect(tirosX[i], tirosY[i]+29.5,32,1.5,5)
       
      beginShape();
      vertex(tirosX[i]+10, tirosY[i]+24);
      vertex(tirosX[i]+22, tirosY[i]+30);
      vertex(tirosX[i]+10, tirosY[i]+36);
      vertex(tirosX[i]+15, tirosY[i]+30);
      vertex(tirosX[i]+10, tirosY[i]+24);
      
      endShape()
      noFill()
      beginShape();
      vertex(tirosX[i]-26, tirosY[i]+26);
      vertex(tirosX[i]-16, tirosY[i]+30);
      vertex(tirosX[i]-26, tirosY[i]+34);
      endShape()
      
      beginShape();
      vertex(tirosX[i]-20, tirosY[i]+26);
      vertex(tirosX[i]-10, tirosY[i]+30);
      vertex(tirosX[i]-20, tirosY[i]+34);
      endShape()
      
      beginShape();
      vertex(tirosX[i]-14, tirosY[i]+26);
      vertex(tirosX[i]-6, tirosY[i]+30);
      vertex(tirosX[i]-14, tirosY[i]+34);
      endShape()
    pop()
     //se mudar o valor do 3,o tiro fica mais rapido ou lento
    tirosX[i]=tirosX[i]+15;
    
    //se o primeito elemento sair da tela remove ele;
    if(tirosX[0]>800||enemyX==820) {
      tirosX.shift();
      tirosY.shift();
    }
    if(tirosX.length>qtdTiros){
    
      tirosX.pop();
      tirosY.pop();
    }
  }
 }
function bg(){
  switch(pNum){
    case 0:
      
      document.body.style.backgroundColor = player.bgColor
      break
      case 1:
      
      document.body.style.backgroundColor = player.bgColor
      break
      case 2:
      
      document.body.style.backgroundColor = player.bgColor
      break
      case 3:
      
      document.body.style.backgroundColor = player.bgColor
  }
}
