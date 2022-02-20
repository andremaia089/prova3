let borda = 100, imagem1, imagem2, tela = 1;
let voltax1 = 30, voltax2 = 90, voltay1 = 330, voltay2 = 380,tvoltapx= 60, tvoltapy = 363;

let Px=10, Py = 290, Pz = 50, Pl = 70;
var Ol = 50, Oh = 50, Or = 10;
let c;
let v_colisao=0 ; 

let ect, c_ect, x_ect = 320, y_ect= 260, l_ect= 100, h_ect= 100, r_ect=60, ect_coli = false; p_ect = 0;

let x_casa = 320, y_casa= 260, l_casa= 100, h_casa= 100, r_casa=60, v_icasa, casa_coli = false, c_casa, p_casa = 0;

let v_iect;

let personagem=[], objeto = [], Ox=[100, 100, 100], Oy=[0, 0, 0];
let c_objeto=0, c_pessonagem=0, andar = 0, tempo = 0,t = 0,t2 = 0;
let obj_t = 0
let ax;

function setup() {
  createCanvas(400, 400);
  imagem1 = loadImage('fundo.jpg');
  imagem2 = loadImage('fundo3.jpg');
  ect = loadImage('ECT.png');
  casa = loadImage('casa.png');
  v_iect = loadImage('ECT_v.png');
  v_icasa = loadImage('casa_v.png');
  
  
  obj_t = 3
  for(c_objeto = 0; c_objeto < obj_t; c_objeto++){
     objeto[c_objeto] = loadImage ('corona_'+(c_objeto+1)+'.png');
  }
  
  for(c_pessonagem=0; c_pessonagem<6; c_pessonagem++){
    personagem [c_pessonagem]= loadImage('perso_'+c_pessonagem+'.png');
  }
  for(i=0;i < 3;i++){
    Oy[i] = -100
	Ox[i] = random(50, 350);
  }
}

function draw() { 
    
  if(tela == 1){
  
    background(imagem1, 10);// definir cor ou imagem do fundo
  
    noStroke(); // trira a borda do texto e dos retangulos
 
    //Criando os Retangulos no Menu
    fill(255,215,0); // cor dos retangolos
    //    p.x, p.y, lag, alt, raio da borda
    rect (100, 100, 200, 50, 20); //Retangulo jogos
    rect (100, 200, 200, 50, 20); //Retangulo creditos
    rect (100, 300, 200, 50, 20); //Retangulo informações

    //Colocando Texto na tela
    textSize(26); // definindo tamanho do texto
    textAlign(CENTER); // fazer alinhamento do texto
    fill(79,79,79); // definido cor do texto
    text("Jogos", 200, 135); //Descrevendo Texto
    text("Creditos", 200, 235);
    text("Informações", 200, 335);
    
    fill(220,220,220);
    text("Opções", 200, 70);
    
    //colocando borda no retangolo sempre que o mouse passa em cima
    if(mouseX >= 100 && mouseX <= 300 && mouseY >= 100 && mouseY <=150){
    noFill(); 
    stroke(0,250,154);//borda
    rect(100, 100, 200, 50, 20); 
    }
    
    if(mouseX >= 100 && mouseX <= 300 && mouseY>= 200 && mouseY <=250){
    noFill();  
    stroke(0,250,154);
    rect(100, 200, 200, 50, 20);
    }
    
    if(mouseX >= 100 && mouseX <= 300 && mouseY>= 300 && mouseY <=350){
    noFill(); 
    stroke(0,250,154);
    rect(100, 300, 200, 50, 20); 
    }
    
    //fazendo verificação de qual tela o mouse clicou. 
    if (mouseIsPressed){
        if (mouseX >= 100 && mouseX <= 300 && mouseY>=100 && mouseY <= 150){
          tela = 2;
        }
    }//verificação da tela 2

    if (mouseIsPressed){
      if (mouseX >= 100 && mouseX <= 300 && mouseY >=200 && mouseY <= 250){
      tela = 3;
      }
    }//verificação da tela 3
    
    if (mouseIsPressed){
      if (mouseX >= 100 && mouseX <= 300 && mouseY >=300 && mouseY <= 350){
      tela = 4;
      }
    }//verificação da tela 4
  }
  else if(tela == 2){
    background(imagem1, 10);// definir cor ou imagem do fundo
    
    
    noStroke();
    fill(255,215,0);
    rect(50,30,300,50,30);
    textSize(26); // tamanho do nosso texto
    textAlign(CENTER); // fazer alinhamento
    fill(79,79,79); // cor do nosso texto
    text("Jogos", 200, 63);//que deve ter no texto e a posição.
    
    fill(255,215,0); // cor do retangolo
    //   p.x, p.y, lag, alt, raio da borda
    rect (voltax1, voltay1, 60, 50, 30); // criar nosso rentangolos
    textSize(22); // tamanho do nosso texto
    textAlign(CENTER); // fazer alinhamento
    fill(79,79,79);
    text("Volta", tvoltapx, tvoltapy);
    
    if(mouseX >= voltax1 && mouseX <= voltax2 && mouseY                     >= voltay1 && mouseY <= voltay2){
    noFill(); //não quero borda. 
    stroke(0,250,154);// colocando a borda
    rect(voltax1, voltay1, 60, 50, 30); // posição da borda
    }
  
    
    if (mouseIsPressed){
      if (mouseX >= voltax1 && mouseX <= voltax2 && mouseY           >= voltay1 && mouseY <= voltay2){
      tela = 1;
      }
    }
    
    //Criação de botão do Play 1
    
    fill(255,215,0);
    rect (100, 150, 200, 50, 20);
    noStroke();
    textSize(26);
    textAlign(CENTER);
    fill(79,79,79);
    text("Play 1", 200, 185);

    if(mouseX >= 100 && mouseX <= 300 && mouseY >= 150 && mouseY <=200){
    noFill(); //não quero borda. 
    stroke(0,250,154);// colocando a borda
    rect(100, 150, 200, 50, 20); // posição da borda
    }
  
    
    if (mouseIsPressed){
      if (mouseX >= 100 && mouseX <= 300 && mouseY >= 150 && mouseY <=200){
      tela = 5;
    
      }
    }
    
  }
  else if(tela == 3){
      background(imagem1, 10);
    
    noStroke();
    fill(255,215,0);
    rect(50,30,300,50,30);
    textSize(26); 
    textAlign(CENTER);
    fill(79,79,79); 
    text("Creditos", 200, 65); 
    
    noStroke();
    fill(255,215,0);
    rect(50,100,300,120,30);
    textSize(17); 
    textAlign(CENTER);
    fill(79,79,79); 
    text("Criado por André Rafael Maia" + "\n" + "Estudante do curso de Ciências e " + "\n" + "Tecnologia na ECT com a ajuda " + "\n" + " e dos Monitories e a Profª Idalmis " + "\n" + " Martins.", 200, 125); 

    fill(255,215,0); 
    rect (voltax1, voltay1, 60, 50, 30); 
    textSize(22); 
    textAlign(CENTER);
    fill(79,79,79);
    text("Volta", tvoltapx, tvoltapy);
    
    if(mouseX >= voltax1 && mouseX <= voltax2 && mouseY                     >= voltay1 && mouseY <= voltay2){
    noFill(); 
    stroke(0,250,154);
    rect(voltax1, voltay1, 60, 50, 30); 
    }
    
    if (mouseIsPressed){
      if (mouseX >= 30 && mouseX <= 90 && mouseY >= 330 && mouseY <= 380){
      tela = 1;
      }
    }
    
  }
  else if(tela == 4){
    
     background(imagem1, 10);// definir cor ou imagem do fundo
    
    noStroke();
    fill(255,215,0);
    rect(50,30,300,50,30);
    textSize(26);
    textAlign(CENTER);
    fill(79,79,79);
    text("Informações", 200, 63); 
    
    noStroke();
    fill(255,215,0);
    rect(50,100,300,140,30);
    textSize(17); 
    textAlign(CENTER);
    fill(79,79,79); 
    text("Esse jogo foi criado para que os" + "\n" + "para os estudandes da ECT buscarem" + "\n" + "mais segurança na sua ida e volta da" + "\n" + "escola, assim trazendo mais segurança" + "\n" + " para todos. O Aluno tem que ir para" + "\n" + "  ECT e volta sem se infectar.", 200, 125); 

    fill(255,215,0); 
    rect (voltax1, voltay1, 60, 50, 30); 
    textSize(22); 
    textAlign(CENTER);
    fill(79,79,79);
    text("Volta", tvoltapx, tvoltapy)
    
    if(mouseX >= voltax1 && mouseX <= voltax2 && mouseY            >= voltay1 && mouseY <= voltay2){
    noFill(); //não quero borda. 
    stroke(0,250,154);// colocando a borda
    rect(voltax1, voltay1, 60, 50, 30); // posição da borda
    }
    
    if (mouseIsPressed){
      if (mouseX >= voltax1 && mouseX <= voltax2 && mouseY           >= voltay1 && mouseY <= voltay2){
      tela = 1;
      }
    }
    
  }
  else if(tela == 5){
    
  background(imagem2, 10); 
  
  image(ect, x_ect, y_ect, r_ect, r_ect)
  image(casa, -2, 280, 80, 80) 
  objeto_corona()
  colid_corona()
  teclado_key()
  checkin_ect()
 
      
  }//play 1
  else if(tela == 6){
  
    background(imagem1, 10);// definir cor ou imagem do fundo
    
    
    noStroke();
    fill(255,215,0);
    rect(50,30,300,80,30);
    textSize(26); // tamanho do nosso texto
    textAlign(CENTER); // fazer alinhamento
    fill(79,79,79); // cor do nosso texto
    text("Parabéns!!!"+ "\n" +"Você passou de fase!", 200, 63);//que deve ter no texto e a posição.
    
    fill(255,215,0); // cor do retangolo
    //   p.x, p.y, lag, alt, raio da borda
    rect (voltax1, voltay1, 60, 50, 30); // criar nosso rentangolos
    textSize(22); // tamanho do nosso texto
    textAlign(CENTER); // fazer alinhamento
    fill(79,79,79);
    text("Volta", tvoltapx, tvoltapy);
    
    if(mouseX >= voltax1 && mouseX <= voltax2 && mouseY                     >= voltay1 && mouseY <= voltay2){
    noFill(); //não quero borda. 
    stroke(0,250,154);// colocando a borda
    rect(voltax1, voltay1, 60, 50, 30); // posição da borda
    }
  
    
    if (mouseIsPressed){
      if (mouseX >= voltax1 && mouseX <= voltax2 && mouseY           >= voltay1 && mouseY <= voltay2){
      tela = 1;
      }
    }
    
    //Criação de botão do Play 1
    
    fill(255,215,0);
    rect (100, 150, 200, 50, 20);
    noStroke();
    textSize(26);
    textAlign(CENTER);
    fill(79,79,79);
    text("Fase 2", 200, 185);

    if(mouseX >= 100 && mouseX <= 300 && mouseY >= 150 && mouseY <=200){
    noFill();
    stroke(0,250,154);
    rect(100, 150, 200, 50, 20); 
      v_colisao = 0;
      p_ect = 0;
      Px = 10;
      p_casa = 0;
    }
  
    
    if (mouseIsPressed){
      if (mouseX >= 100 && mouseX <= 300 && mouseY >= 150 && mouseY <=200){
      tela = 7;
    
      }
    }
        

  }
  else if(tela == 7){
  background(imagem2, 10); 
  
  
  image(v_icasa, x_casa, y_casa, l_casa, h_casa, r_casa);
  image(v_iect, 0, 260, 100, 100, 60)
  //fill('red');
  //text ("pontos: " + pontos, 50, 50) 
  objeto_corona()
  colid_corona()
  teclado_key()
  checkin_casa()
  }//play 2
  else if(tela == 8){
      
    if(v_colisao>=1){
      background(imagem1, 10);
      noStroke();
      fill('white');
      rect(50,130,300,108,30);
      textSize(26); 
      textAlign(CENTER); 
      fill('red'); 
      text("ATENÇÃO!!!"+ "\n" +"Você foi Infectado,"+ "\n" +"volte para casa!!!", 200, 163); 
      
      fill(255,215,0);
      rect (100, 250, 200, 50, 20);
      noStroke();
      textSize(26);
      textAlign(CENTER);
      fill(79,79,79);
      text("Tela inicial", 200, 285);

      if(mouseX >= 100 && mouseX <= 300 && mouseY>= 250 && mouseY <=300){
      noFill();
      stroke(0,250,154);
      rect(100, 250, 200, 50, 20); 
      }
      
      if (mouseIsPressed){
      if (mouseX >= 100 && mouseX <= 300 && mouseY >=250 && mouseY <= 300){
      tela = 1;
      v_colisao = 0;
      p_ect = 0;
      Px = 10;  
      p_casa = 0;
      }
    }
    
}
      
     else if(p_casa>=1){
          background(imagem1, 10);
    
          noStroke();
          fill(255,215,0);
          rect(30,30,340,115,30);
          textSize(26); 
          textAlign(CENTER);
          fill(79,79,79);
          text("Parabens!!!", 200, 63);
          textSize(22)
          text("Você conseguiu ir para ECT" + "\n" + "e volta para casa em segurança!", 200, 93); 
      
          fill(255,215,0);
          rect (100, 250, 200, 50, 20);
          noStroke();
          textSize(26);
          textAlign(CENTER);
          fill(79,79,79);
          text("Tela inicial", 200, 285);

      if(mouseX >= 100 && mouseX <= 300 && mouseY>= 250 && mouseY <=300){
      noFill();
      stroke(0,250,154);
      rect(100, 250, 200, 50, 20); 
      }
       
      if (mouseIsPressed){
        if (mouseX >= 100 && mouseX <= 300 && mouseY >=250 && mouseY <= 300){
        tela = 1;
        v_colisao = 0;
        p_ect = 0;
        Px = 10;  
        }
      }
    }
  }
}
function objeto_corona(){
  for(i=0;i < 3;i++){
	Oy[i] += 3
  }
  
  for(i=0;i < 3; i++){
    if (Oy[i]>400){ 
      Oy[i] = -100
	  Ox[i] = random(30, 370);
	}
  }
}

function colid_corona(){  
  for (i=0; i < 3; i++){
    image(objeto[i], Ox[i], Oy[i], Oh, Ol);
    c = dist(Px, Py, Ox[i], Oy[i])
  
    if(c > 0 && c < Oh){
      Oy[i] = -100
	  Ox[i] = random(30, 370);  
      v_colisao++;
    }
      if(v_colisao>=1){
        tela = 8;
        
    }
   
  }
}

function teclado_key(){
  if(keyIsPressed){
     if (keyCode === LEFT_ARROW) { 
      Px = Px- 5; 
    } else if (keyCode === RIGHT_ARROW) {
      Px = Px + 5; 
    } /* else if (keyCode === DOWN_ARROW) {
      Py = Py + 5; 
    }/*else if (keyCode === UP_ARROW) {
      Py = Py - 5;
    }*/
    
  if(Px>400){
    Px=0;
  } else if(Px<0){
    Px=400
  }
  if(Py>400){
    Py=0;
  } else if(Py<0){
    Py=400
  }
    
  }
 
}

function personagem_play(){
  tempo++;
  if(tempo>5){
    andar++;
    tempo=0;
  }
  image(personagem[andar%6], Px, Py, Pz, Pl)
  
  
}

function checkin_ect(){
   
  image(ect, x_ect, y_ect, l_ect, h_ect, r_ect)
  if(y_ect == true){
    ect_coli = false;
  }
  
  personagem_play();
  
  c_ect = dist(Px, Py, x_ect, y_ect)
  
  if(c_ect>0 && c_ect<r_ect){
    ect_coli = true;   
    p_ect++;    
  }
    if(p_ect>1){
     tela =6;
    }
}

function checkin_casa(){
  image(v_icasa, x_casa, y_casa, l_casa, h_casa, r_casa)
  if(y_casa == true){
    casa_coli = false;
  }
  
  personagem_play();
  
  c_casa = dist(Px, Py, x_casa, y_casa)
  
  if(c_casa>0 && c_casa<r_casa){
    casa_coli = true;   
    p_casa++;    
  }
    if(p_casa>=1){
     tela =8;
    }
}