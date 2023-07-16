//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente = 4;

colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  creat4s(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  verificaColisaoRaquete();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaqueteOponente();
  placar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function mostraRaquete(x,y){
  rect(x,y,
       larguraRaquete,alturaRaquete);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoBorda(){
  
  if(xBolinha + raio > width || xBolinha - raio < 0 ){
    velocidadeXBolinha *= -1;
  }
  
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function verificaColisaoRaquete(){
  if(xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function verificaColisaoRaqueteOponente(){
  if(xBolinha - raio < xRaqueteOponente + larguraRaquete && yBolinha - raio < yRaqueteOponente + alturaRaquete && yBolinha + raio > yRaqueteOponente){
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOponente(){
  if(keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}

function placar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150,10,40,20);
  fil(255);
  text(meusPontos, 170, 26);
  fill(color(255,140,0));
  rect(450,10,40,20);
  fil(255);
  text(pontosOponente , 470, 26);
}

function marcaPonto(){
  if(xBolinha > 590){
    meusPontos += 1;
  }
  if(xBolinha < 10){
    pontosOponente += 1;
  }
}