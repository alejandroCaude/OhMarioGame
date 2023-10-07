const filas = 13; //variable de las filas que hay
const columnas = 21; //variable de las columnas que hay
let tablero; //declaro lo que sera el tablero
let mapa = new Array(filas); //declaro el mapa con las posiciones de las filas
let inicioX = 0; //declaro el punto donde se encontrara el muñeco inicialmente
let inicioY = 0;  //declaro el punto donde se encontrara el muñeco inicialmente
let posX = inicioX; //duplico la posicion inicial para utilizarlo
let posY = inicioY; //duplico la posicion inicial para utilizarlo
let inicioMaloX = 8; //declaro el punto donde se encontrara el muñeco malo inicialmente
let inicioMaloY = 8; //declaro el punto donde se encontrara el muñeco malo inicialmente
let posMaloX = inicioMaloX; //duplico la posicion inicial del muñeco malo para utilizarlo
let posMaloY = inicioMaloY; //duplico la posicion inicial del muñeco malo para utilizarlo
let vidas=5; //declaro las vidas iniciales que tengo
let numpuntos=0;


window.onload = function () {
    tablero = document.getElementById("tablero");
    document.addEventListener('click', empezarPartida); //evento que se ejecutara al hacer click sobre el boton
    cuadricula() //lanzo la funcion cuadricula
    document.addEventListener('keydown', mover); //evento que se ejecutara al pulsar el teclado
    puntosvidas();//lanzo la funcion puntoVidas
   vuelta()
  
    
}


function bloque1(){
    mapa[0][0].classList.add("uno")
    mapa[0][1].classList.add("uno")
    mapa[0][2].classList.add("uno")
    mapa[0][3].classList.add("uno")
    mapa[0][4].classList.add("uno")
    mapa[1][0].classList.add("uno")
    mapa[2][0].classList.add("uno")
    mapa[3][0].classList.add("uno")
    mapa[1][4].classList.add("uno")
    mapa[2][4].classList.add("uno")
    mapa[3][4].classList.add("uno")
    mapa[3][1].classList.add("uno")
    mapa[3][2].classList.add("uno")
    mapa[3][3].classList.add("uno")
    uno=document.querySelectorAll(".uno")
    let pas=0;
 for(let i=0;i<uno.length;i++){
     if(uno[i].classList.contains("monedas")){
        pas=pas+1
        if(pas==14){
            mapa[1][1].style.backgroundImage = 'none';
            mapa[1][1].style.backgroundColor = 'blue';
            mapa[1][2].style.backgroundImage = 'none';
            mapa[1][2].style.backgroundColor = 'blue';
            mapa[1][3].style.backgroundImage = 'none';
            mapa[1][3].style.backgroundColor = 'blue';
            mapa[2][1].style.backgroundImage = 'none';
            mapa[2][1].style.backgroundColor = 'blue';
            mapa[2][2].style.backgroundImage = 'none';
            mapa[2][2].style.backgroundColor = 'blue';
            mapa[2][3].style.backgroundImage = 'none';
            mapa[2][3].style.backgroundColor = 'blue';
            
        }
     }
 }
}
function bloque2(){
    mapa[0][4].classList.add("dos")
    mapa[0][5].classList.add("dos")
    mapa[0][6].classList.add("dos")
    mapa[0][7].classList.add("dos")
    mapa[0][8].classList.add("dos")
    mapa[3][5].classList.add("dos")
    mapa[3][6].classList.add("dos")
    mapa[3][7].classList.add("dos")
    mapa[3][8].classList.add("dos")
    mapa[1][4].classList.add("dos")
    mapa[1][8].classList.add("dos")
    mapa[2][4].classList.add("dos")
    mapa[2][8].classList.add("dos")
    mapa[3][4].classList.add("dos")
  
    uno=document.querySelectorAll(".dos")
    let pas=0;
 for(let i=0;i<uno.length;i++){
     if(uno[i].classList.contains("monedas")){
        pas=pas+1
        if(pas==14){
            mapa[1][5].style.backgroundImage = 'none';
            mapa[1][5].style.backgroundColor = 'blue';
            mapa[1][6].style.backgroundImage = 'none';
            mapa[1][6].style.backgroundColor = 'blue';
            mapa[1][7].style.backgroundImage = 'none';
            mapa[1][7].style.backgroundColor = 'blue';
            mapa[2][5].style.backgroundImage = 'none';
            mapa[2][5].style.backgroundColor = 'blue';
            mapa[2][6].style.backgroundImage = 'none';
            mapa[2][6].style.backgroundColor = 'blue';
            mapa[2][7].style.backgroundImage = 'none';
            mapa[2][7].style.backgroundColor = 'blue';
            
        }
     }
 }
}
function bloque3(){
    mapa[0][8].classList.add("tres")
    mapa[0][9].classList.add("tres")
    mapa[0][10].classList.add("tres")
    mapa[0][11].classList.add("tres")
    mapa[0][12].classList.add("tres")
    mapa[1][8].classList.add("tres")
    mapa[2][8].classList.add("tres")
    mapa[3][8].classList.add("tres")
    mapa[1][12].classList.add("tres")
    mapa[2][12].classList.add("tres")
    mapa[3][12].classList.add("tres")
    mapa[3][11].classList.add("tres")
    mapa[3][10].classList.add("tres")
    mapa[3][9].classList.add("tres")
  
    uno=document.querySelectorAll(".tres")
    let pas=0;
 for(let i=0;i<uno.length;i++){
     if(uno[i].classList.contains("monedas")){
        pas=pas+1
        if(pas==14){
            mapa[1][9].style.backgroundImage = 'none';
            mapa[1][9].style.backgroundColor = 'blue';
            mapa[1][10].style.backgroundImage = 'none';
            mapa[1][10].style.backgroundColor = 'blue';
            mapa[1][11].style.backgroundImage = 'none';
            mapa[1][11].style.backgroundColor = 'blue';
            mapa[2][9].style.backgroundImage = 'none';
            mapa[2][9].style.backgroundColor = 'blue';
            mapa[2][10].style.backgroundImage = 'none';
            mapa[2][10].style.backgroundColor = 'blue';
            mapa[2][11].style.backgroundImage = 'none';
            mapa[2][11].style.backgroundColor = 'blue';
            
        }
     }
 }
}
function bloque4(){
    mapa[0][12].classList.add("cuatro")
    mapa[0][13].classList.add("cuatro")
    mapa[0][14].classList.add("cuatro")
    mapa[0][15].classList.add("cuatro")
    mapa[0][16].classList.add("cuatro")
    mapa[1][12].classList.add("cuatro")
    mapa[2][12].classList.add("cuatro")
    mapa[3][12].classList.add("cuatro")
    mapa[3][13].classList.add("cuatro")
    mapa[3][14].classList.add("cuatro")
    mapa[3][15].classList.add("cuatro")
    mapa[3][16].classList.add("cuatro")

    mapa[1][16].classList.add("cuatro")
    mapa[2][16].classList.add("cuatro")
   
  
    uno=document.querySelectorAll(".cuatro")
    let pas=0;
 for(let i=0;i<uno.length;i++){
     if(uno[i].classList.contains("monedas")){
        pas=pas+1
        if(pas==14){
            mapa[1][13].style.backgroundImage = 'none';
            mapa[1][13].style.backgroundColor = 'blue';
            mapa[1][14].style.backgroundImage = 'none';
            mapa[1][14].style.backgroundColor = 'blue';
            mapa[1][15].style.backgroundImage = 'none';
            mapa[1][15].style.backgroundColor = 'blue';
            mapa[2][13].style.backgroundImage = 'none';
            mapa[2][13].style.backgroundColor = 'blue';
            mapa[2][14].style.backgroundImage = 'none';
            mapa[2][14].style.backgroundColor = 'blue';
            mapa[2][15].style.backgroundImage = 'none';
            mapa[2][15].style.backgroundColor = 'blue';
            
        }
     }
 }
}
function bloque5(){
    mapa[0][16].classList.add("cinco")
    mapa[0][17].classList.add("cinco")
    mapa[0][18].classList.add("cinco")
    mapa[0][19].classList.add("cinco")
    mapa[0][20].classList.add("cinco")
    mapa[1][20].classList.add("cinco")
    mapa[2][20].classList.add("cinco")
    mapa[3][20].classList.add("cinco")
    mapa[3][19].classList.add("cinco")
    mapa[3][18].classList.add("cinco")
    mapa[3][17].classList.add("cinco")
    mapa[3][16].classList.add("cinco")
    mapa[1][16].classList.add("cinco")
    mapa[2][16].classList.add("cinco")
  
    uno=document.querySelectorAll(".cinco")
    let pas=0;
 for(let i=0;i<uno.length;i++){
     if(uno[i].classList.contains("monedas")){
        pas=pas+1
        if(pas==14){
            mapa[1][17].style.backgroundImage = 'none';
            mapa[1][17].style.backgroundColor = 'blue';
            mapa[1][18].style.backgroundImage = 'none';
            mapa[1][18].style.backgroundColor = 'blue';
            mapa[1][19].style.backgroundImage = 'none';
            mapa[1][19].style.backgroundColor = 'blue';
            mapa[2][17].style.backgroundImage = 'none';
            mapa[2][17].style.backgroundColor = 'blue';
            mapa[2][18].style.backgroundImage = 'none';
            mapa[2][18].style.backgroundColor = 'blue';
            mapa[2][19].style.backgroundImage = 'none';
            mapa[2][19].style.backgroundColor = 'blue';
            
        }
     }
 }
}
function bloque6(){
    mapa[3][0].classList.add("seis")
    mapa[3][1].classList.add("seis")
    mapa[3][2].classList.add("seis")
    mapa[3][3].classList.add("seis")
    mapa[3][4].classList.add("seis")
    mapa[4][0].classList.add("seis")
    mapa[5][0].classList.add("seis")
    mapa[6][0].classList.add("seis")
    mapa[6][1].classList.add("seis")
    mapa[6][2].classList.add("seis")
    mapa[6][3].classList.add("seis")
    mapa[6][4].classList.add("seis")
    mapa[4][4].classList.add("seis")
    mapa[5][4].classList.add("seis")
  
    uno=document.querySelectorAll(".seis")
    let pas=0;
 for(let i=0;i<uno.length;i++){
     if(uno[i].classList.contains("monedas")){
        pas=pas+1
        if(pas==14){
            mapa[4][1].style.backgroundImage = 'none';
            mapa[4][1].style.backgroundColor = 'blue';
            mapa[4][2].style.backgroundImage = 'none';
            mapa[4][2].style.backgroundColor = 'blue';
            mapa[4][3].style.backgroundImage = 'none';
            mapa[4][3].style.backgroundColor = 'blue';
            mapa[5][1].style.backgroundImage = 'none';
            mapa[5][1].style.backgroundColor = 'blue';
            mapa[5][2].style.backgroundImage = 'none';
            mapa[5][2].style.backgroundColor = 'blue';
            mapa[5][3].style.backgroundImage = 'none';
            mapa[5][3].style.backgroundColor = 'blue';
            
        }
     }
 }
}
function bloque7(){
    mapa[3][4].classList.add("siete")
    mapa[3][5].classList.add("siete")
    mapa[3][6].classList.add("siete")
    mapa[3][7].classList.add("siete")
    mapa[3][8].classList.add("siete")
    mapa[4][4].classList.add("siete")
    mapa[5][4].classList.add("siete")
    mapa[6][4].classList.add("siete")
    mapa[6][5].classList.add("siete")
    mapa[6][6].classList.add("siete")
    mapa[6][7].classList.add("siete")
    mapa[6][8].classList.add("siete")
    mapa[5][8].classList.add("siete")
    mapa[4][8].classList.add("siete")
 
    uno=document.querySelectorAll(".siete")
    let pas=0;
 for(let i=0;i<uno.length;i++){
     if(uno[i].classList.contains("monedas")){
        pas=pas+1
        if(pas==14){
            mapa[4][5].style.backgroundImage = 'none';
            mapa[4][5].style.backgroundColor = 'blue';
            mapa[4][6].style.backgroundImage = 'none';
            mapa[4][6].style.backgroundColor = 'blue';
            mapa[4][7].style.backgroundImage = 'none';
            mapa[4][7].style.backgroundColor = 'blue';
            mapa[5][5].style.backgroundImage = 'none';
            mapa[5][5].style.backgroundColor = 'blue';
            mapa[5][6].style.backgroundImage = 'none';
            mapa[5][6].style.backgroundColor = 'blue';
            mapa[5][7].style.backgroundImage = 'none';
            mapa[5][7].style.backgroundColor = 'blue';
            
        }
     }
 }
}

function bloque8(){
    mapa[3][8].classList.add("ocho")
    mapa[3][9].classList.add("ocho")
    mapa[3][10].classList.add("ocho")
    mapa[3][11].classList.add("ocho")
    mapa[3][12].classList.add("ocho")
    mapa[4][8].classList.add("ocho")
    mapa[5][8].classList.add("ocho")
    mapa[6][8].classList.add("ocho")
    mapa[6][9].classList.add("ocho")
    mapa[6][10].classList.add("ocho")
    mapa[6][11].classList.add("ocho")
    mapa[6][12].classList.add("ocho")
    mapa[5][12].classList.add("ocho")
    mapa[4][12].classList.add("ocho")
  
    uno=document.querySelectorAll(".ocho")
    let pas=0;
 for(let i=0;i<uno.length;i++){
     if(uno[i].classList.contains("monedas")){
        pas=pas+1
        if(pas==14){
            mapa[4][9].style.backgroundImage = 'none';
            mapa[4][9].style.backgroundColor = 'blue';
            mapa[4][10].style.backgroundImage = 'none';
            mapa[4][10].style.backgroundColor = 'blue';
            mapa[4][11].style.backgroundImage = 'none';
            mapa[4][11].style.backgroundColor = 'blue';
            mapa[5][9].style.backgroundImage = 'none';
            mapa[5][9].style.backgroundColor = 'blue';
            mapa[5][10].style.backgroundImage = 'none';
            mapa[5][10].style.backgroundColor = 'blue';
            mapa[5][11].style.backgroundImage = 'none';
            mapa[5][11].style.backgroundColor = 'blue';
            
        }
     }
 }
}
function bloque9(){
    mapa[3][12].classList.add("nueve")
    mapa[3][13].classList.add("nueve")
    mapa[3][14].classList.add("nueve")
    mapa[3][15].classList.add("nueve")
    mapa[3][16].classList.add("nueve")
    mapa[4][12].classList.add("nueve")
    mapa[5][12].classList.add("nueve")
    mapa[6][12].classList.add("nueve")
    mapa[6][13].classList.add("nueve")
    mapa[6][14].classList.add("nueve")
    mapa[6][15].classList.add("nueve")
    mapa[6][16].classList.add("nueve")
    mapa[5][16].classList.add("nueve")
    mapa[4][16].classList.add("nueve")
  
    uno=document.querySelectorAll(".nueve")
    let pas=0;
 for(let i=0;i<uno.length;i++){
     if(uno[i].classList.contains("monedas")){
        pas=pas+1
        if(pas==14){
            mapa[4][13].style.backgroundImage = 'none';
            mapa[4][13].style.backgroundColor = 'blue';
            mapa[4][14].style.backgroundImage = 'none';
            mapa[4][14].style.backgroundColor = 'blue';
            mapa[4][15].style.backgroundImage = 'none';
            mapa[4][15].style.backgroundColor = 'blue';
            mapa[5][13].style.backgroundImage = 'none';
            mapa[5][13].style.backgroundColor = 'blue';
            mapa[5][14].style.backgroundImage = 'none';
            mapa[5][14].style.backgroundColor = 'blue';
            mapa[5][15].style.backgroundImage = 'none';
            mapa[5][15].style.backgroundColor = 'blue';
            
        }
     }
 }
}
function bloque10(){
    mapa[3][16].classList.add("diez")
    mapa[3][17].classList.add("diez")
    mapa[3][18].classList.add("diez")
    mapa[3][19].classList.add("diez")
    mapa[3][20].classList.add("diez")
    mapa[4][16].classList.add("diez")
    mapa[5][16].classList.add("diez")
    mapa[6][16].classList.add("diez")
    mapa[6][17].classList.add("diez")
    mapa[6][18].classList.add("diez")
    mapa[6][19].classList.add("diez")
    mapa[6][20].classList.add("diez")
    mapa[5][20].classList.add("diez")
    mapa[4][20].classList.add("diez")
  
    uno=document.querySelectorAll(".diez")
    let pas=0;
 for(let i=0;i<uno.length;i++){
     if(uno[i].classList.contains("monedas")){
        pas=pas+1
        if(pas==14){
            mapa[4][17].style.backgroundImage = 'none';
            mapa[4][17].style.backgroundColor = 'blue';
            mapa[4][18].style.backgroundImage = 'none';
            mapa[4][18].style.backgroundColor = 'blue';
            mapa[4][19].style.backgroundImage = 'none';
            mapa[4][19].style.backgroundColor = 'blue';
            mapa[5][17].style.backgroundImage = 'none';
            mapa[5][17].style.backgroundColor = 'blue';
            mapa[5][18].style.backgroundImage = 'none';
            mapa[5][18].style.backgroundColor = 'blue';
            mapa[5][19].style.backgroundImage = 'none';
            mapa[5][19].style.backgroundColor = 'blue';
            
        }
     }
 }
}
function bloque11(){
    mapa[6][0].classList.add("once")
    mapa[6][1].classList.add("once")
    mapa[6][2].classList.add("once")
    mapa[6][3].classList.add("once")
    mapa[6][4].classList.add("once")
    mapa[7][0].classList.add("once")
    mapa[8][0].classList.add("once")
    mapa[9][0].classList.add("once")
    mapa[9][1].classList.add("once")
    mapa[9][2].classList.add("once")
    mapa[9][3].classList.add("once")
    mapa[9][4].classList.add("once")
    mapa[7][4].classList.add("once")
    mapa[8][4].classList.add("once")
  
    uno=document.querySelectorAll(".once")
    let pas=0;
 for(let i=0;i<uno.length;i++){
     if(uno[i].classList.contains("monedas")){
        pas=pas+1
        if(pas==14){
            mapa[7][1].style.backgroundImage = 'none';
            mapa[7][1].style.backgroundColor = 'blue';
            mapa[7][2].style.backgroundImage = 'none';
            mapa[7][2].style.backgroundColor = 'blue';
            mapa[7][3].style.backgroundImage = 'none';
            mapa[7][3].style.backgroundColor = 'blue';
            mapa[8][1].style.backgroundImage = 'none';
            mapa[8][1].style.backgroundColor = 'blue';
            mapa[8][2].style.backgroundImage = 'none';
            mapa[8][2].style.backgroundColor = 'blue';
            mapa[8][3].style.backgroundImage = 'none';
            mapa[8][3].style.backgroundColor = 'blue';
            
        }
     }
 }
}
function bloque12(){
    mapa[6][4].classList.add("doce")
    mapa[6][5].classList.add("doce")
    mapa[6][6].classList.add("doce")
    mapa[6][7].classList.add("doce")
    mapa[6][8].classList.add("doce")
    mapa[7][4].classList.add("doce")
    mapa[8][4].classList.add("doce")
    mapa[9][4].classList.add("doce")
    mapa[9][5].classList.add("doce")
    mapa[9][6].classList.add("doce")
    mapa[9][7].classList.add("doce")
    mapa[9][8].classList.add("doce")
    mapa[8][8].classList.add("doce")
    mapa[7][8].classList.add("doce")
  
    uno=document.querySelectorAll(".doce")
    let pas=0;
 for(let i=0;i<uno.length;i++){
     if(uno[i].classList.contains("monedas")){
        pas=pas+1
        if(pas==14){
            mapa[7][5].style.backgroundImage = 'none';
            mapa[7][5].style.backgroundColor = 'blue';
            mapa[7][6].style.backgroundImage = 'none';
            mapa[7][6].style.backgroundColor = 'blue';
            mapa[7][7].style.backgroundImage = 'none';
            mapa[7][7].style.backgroundColor = 'blue';
            mapa[8][5].style.backgroundImage = 'none';
            mapa[8][5].style.backgroundColor = 'blue';
            mapa[8][6].style.backgroundImage = 'none';
            mapa[8][6].style.backgroundColor = 'blue';
            mapa[8][7].style.backgroundImage = 'none';
            mapa[8][7].style.backgroundColor = 'blue';
            
        }
     }
 }
}
function bloque13(){
    mapa[6][8].classList.add("trece")
    mapa[6][9].classList.add("trece")
    mapa[6][10].classList.add("trece")
    mapa[6][11].classList.add("trece")
    mapa[6][12].classList.add("trece")
    mapa[7][8].classList.add("trece")
    mapa[8][8].classList.add("trece")
    mapa[9][8].classList.add("trece")
    mapa[9][9].classList.add("trece")
    mapa[9][10].classList.add("trece")
    mapa[9][11].classList.add("trece")
    mapa[9][12].classList.add("trece")
    mapa[8][12].classList.add("trece")
    mapa[7][12].classList.add("trece")
  
    uno=document.querySelectorAll(".trece")
    let pas=0;
 for(let i=0;i<uno.length;i++){
     if(uno[i].classList.contains("monedas")){
        pas=pas+1
        if(pas==14){
            mapa[7][9].style.backgroundImage = 'none';
            mapa[7][9].style.backgroundColor = 'yellow';
            mapa[7][10].style.backgroundImage = 'none';
            mapa[7][10].style.backgroundColor = 'yellow';
            mapa[7][11].style.backgroundImage = 'none';
            mapa[7][11].style.backgroundColor = 'yellow';
            mapa[8][9].style.backgroundImage = 'none';
            mapa[8][9].style.backgroundColor = 'yellow';
            mapa[8][10].style.backgroundImage = 'none';
            mapa[8][10].style.backgroundColor = 'yellow';
            mapa[8][11].style.backgroundImage = 'none';
            mapa[8][11].style.backgroundColor = 'yellow';
            
        }
     }
 }
}
function bloque14(){
    mapa[6][12].classList.add("catorce")
    mapa[6][13].classList.add("catorce")
    mapa[6][14].classList.add("catorce")
    mapa[6][15].classList.add("catorce")
    mapa[6][16].classList.add("catorce")
    mapa[7][12].classList.add("catorce")
    mapa[8][12].classList.add("catorce")
    mapa[9][12].classList.add("catorce")
    mapa[9][13].classList.add("catorce")
    mapa[9][14].classList.add("catorce")
    mapa[9][15].classList.add("catorce")
    mapa[9][16].classList.add("catorce")
    mapa[8][16].classList.add("catorce")
    mapa[7][16].classList.add("catorce")
  
    uno=document.querySelectorAll(".catorce")
    let pas=0;
 for(let i=0;i<uno.length;i++){
     if(uno[i].classList.contains("monedas")){
        pas=pas+1
        if(pas==14){
            mapa[7][13].style.backgroundImage = 'none';
            mapa[7][13].style.backgroundColor = 'blue';
            mapa[7][14].style.backgroundImage = 'none';
            mapa[7][14].style.backgroundColor = 'blue';
            mapa[7][15].style.backgroundImage = 'none';
            mapa[7][15].style.backgroundColor = 'blue';
            mapa[8][13].style.backgroundImage = 'none';
            mapa[8][13].style.backgroundColor = 'blue';
            mapa[8][14].style.backgroundImage = 'none';
            mapa[8][14].style.backgroundColor = 'blue';
            mapa[8][15].style.backgroundImage = 'none';
            mapa[8][15].style.backgroundColor = 'blue';
            
        }
     }
 }
}
function bloque15(){
    mapa[6][16].classList.add("quince")
    mapa[6][17].classList.add("quince")
    mapa[6][18].classList.add("quince")
    mapa[6][19].classList.add("quince")
    mapa[6][20].classList.add("quince")
    mapa[7][16].classList.add("quince")
    mapa[8][16].classList.add("quince")
    mapa[9][16].classList.add("quince")
    mapa[9][17].classList.add("quince")
    mapa[9][18].classList.add("quince")
    mapa[9][19].classList.add("quince")
    mapa[9][20].classList.add("quince")
    mapa[8][20].classList.add("quince")
    mapa[7][20].classList.add("quince")
  
    uno=document.querySelectorAll(".quince")
    let pas=0;
 for(let i=0;i<uno.length;i++){
     if(uno[i].classList.contains("monedas")){
        pas=pas+1
        if(pas==14){
            mapa[7][17].style.backgroundImage = 'none';
            mapa[7][17].style.backgroundColor = 'blue';
            mapa[7][18].style.backgroundImage = 'none';
            mapa[7][18].style.backgroundColor = 'blue';
            mapa[7][19].style.backgroundImage = 'none';
            mapa[7][19].style.backgroundColor = 'blue';
            mapa[8][17].style.backgroundImage = 'none';
            mapa[8][17].style.backgroundColor = 'blue';
            mapa[8][18].style.backgroundImage = 'none';
            mapa[8][18].style.backgroundColor = 'blue';
            mapa[8][19].style.backgroundImage = 'none';
            mapa[8][19].style.backgroundColor = 'blue';
            
        }
     }
 }
}
function bloque16(){
    mapa[6][0].classList.add("dieciseis")
    mapa[9][1].classList.add("dieciseis")
    mapa[9][2].classList.add("dieciseis")
    mapa[9][3].classList.add("dieciseis")
    mapa[9][4].classList.add("dieciseis")
    mapa[10][0].classList.add("dieciseis")
    mapa[11][0].classList.add("dieciseis")
    mapa[12][0].classList.add("dieciseis")
    mapa[12][1].classList.add("dieciseis")
    mapa[12][2].classList.add("dieciseis")
    mapa[12][3].classList.add("dieciseis")
    mapa[12][4].classList.add("dieciseis")
    mapa[10][4].classList.add("dieciseis")
    mapa[11][4].classList.add("dieciseis")
  
    uno=document.querySelectorAll(".dieciseis")
    let pas=0;
 for(let i=0;i<uno.length;i++){
     if(uno[i].classList.contains("monedas")){
        pas=pas+1
        if(pas==14){
            mapa[10][1].style.backgroundImage = 'none';
            mapa[10][1].style.backgroundColor = 'blue';
            mapa[10][2].style.backgroundImage = 'none';
            mapa[10][2].style.backgroundColor = 'blue';
            mapa[10][3].style.backgroundImage = 'none';
            mapa[10][3].style.backgroundColor = 'blue';
            mapa[11][1].style.backgroundImage = 'none';
            mapa[11][1].style.backgroundColor = 'blue';
            mapa[11][2].style.backgroundImage = 'none';
            mapa[11][2].style.backgroundColor = 'blue';
            mapa[11][3].style.backgroundImage = 'none';
            mapa[11][3].style.backgroundColor = 'blue';
            
        }
     }
 }
}
function bloque17(){
    mapa[9][4].classList.add("diecisiete")
    mapa[9][5].classList.add("diecisiete")
    mapa[9][6].classList.add("diecisiete")
    mapa[9][7].classList.add("diecisiete")
    mapa[9][8].classList.add("diecisiete")
    mapa[10][4].classList.add("diecisiete")
    mapa[11][4].classList.add("diecisiete")
    mapa[12][4].classList.add("diecisiete")
    mapa[12][5].classList.add("diecisiete")
    mapa[12][6].classList.add("diecisiete")
    mapa[12][7].classList.add("diecisiete")
    mapa[12][8].classList.add("diecisiete")
    mapa[10][8].classList.add("diecisiete")
    mapa[11][8].classList.add("diecisiete")

  
    uno=document.querySelectorAll(".diecisiete")
    let pas=0;
 for(let i=0;i<uno.length;i++){
     if(uno[i].classList.contains("monedas")){
        pas=pas+1
        if(pas==14){
            mapa[10][5].style.backgroundImage = 'none';
            mapa[10][5].style.backgroundColor = 'blue';
            mapa[10][6].style.backgroundImage = 'none';
            mapa[10][6].style.backgroundColor = 'blue';
            mapa[10][7].style.backgroundImage = 'none';
            mapa[10][7].style.backgroundColor = 'blue';
            mapa[11][5].style.backgroundImage = 'none';
            mapa[11][5].style.backgroundColor = 'blue';
            mapa[11][6].style.backgroundImage = 'none';
            mapa[11][6].style.backgroundColor = 'blue';
            mapa[11][7].style.backgroundImage = 'none';
            mapa[11][7].style.backgroundColor = 'blue';
            
        }
     }
 }
}
function bloque18(){
    mapa[9][8].classList.add("dieciocho")
    mapa[9][9].classList.add("dieciocho")
    mapa[9][10].classList.add("dieciocho")
    mapa[9][11].classList.add("dieciocho")
    mapa[9][12].classList.add("dieciocho")
    mapa[10][8].classList.add("dieciocho")
    mapa[11][8].classList.add("dieciocho")
    mapa[12][8].classList.add("dieciocho")
    mapa[12][9].classList.add("dieciocho")
    mapa[12][10].classList.add("dieciocho")
    mapa[12][11].classList.add("dieciocho")
    mapa[12][12].classList.add("dieciocho")
    mapa[11][12].classList.add("dieciocho")
    mapa[10][12].classList.add("dieciocho")
  
    uno=document.querySelectorAll(".dieciocho")
    let pas=0;
 for(let i=0;i<uno.length;i++){
     if(uno[i].classList.contains("monedas")){
        pas=pas+1
        if(pas==14){
            mapa[10][9].style.backgroundImage = 'none';
            mapa[10][9].style.backgroundColor = 'blue';
            mapa[10][10].style.backgroundImage = 'none';
            mapa[10][10].style.backgroundColor = 'blue';
            mapa[10][11].style.backgroundImage = 'none';
            mapa[10][11].style.backgroundColor = 'blue';
            mapa[11][9].style.backgroundImage = 'none';
            mapa[11][9].style.backgroundColor = 'blue';
            mapa[11][10].style.backgroundImage = 'none';
            mapa[11][10].style.backgroundColor = 'blue';
            mapa[11][11].style.backgroundImage = 'none';
            mapa[11][11].style.backgroundColor = 'blue';
            
        }
     }
 }
}
function bloque19(){
    mapa[9][12].classList.add("diecinueve")
    mapa[9][13].classList.add("diecinueve")
    mapa[9][14].classList.add("diecinueve")
    mapa[9][15].classList.add("diecinueve")
    mapa[9][16].classList.add("diecinueve")
    mapa[10][12].classList.add("diecinueve")
    mapa[11][12].classList.add("diecinueve")
    mapa[12][12].classList.add("diecinueve")
    mapa[12][13].classList.add("diecinueve")
    mapa[12][14].classList.add("diecinueve")
    mapa[12][15].classList.add("diecinueve")
    mapa[12][16].classList.add("diecinueve")
    mapa[11][16].classList.add("diecinueve")
    mapa[10][16].classList.add("diecinueve")
  
    uno=document.querySelectorAll(".diecinueve")
    let pas=0;
 for(let i=0;i<uno.length;i++){
     if(uno[i].classList.contains("monedas")){
        pas=pas+1
        if(pas==14){
            mapa[10][13].style.backgroundImage = 'none';
            mapa[10][13].style.backgroundColor = 'blue';
            mapa[10][14].style.backgroundImage = 'none';
            mapa[10][14].style.backgroundColor = 'blue';
            mapa[10][15].style.backgroundImage = 'none';
            mapa[10][15].style.backgroundColor = 'blue';
            mapa[11][13].style.backgroundImage = 'none';
            mapa[11][13].style.backgroundColor = 'blue';
            mapa[11][14].style.backgroundImage = 'none';
            mapa[11][14].style.backgroundColor = 'blue';
            mapa[11][15].style.backgroundImage = 'none';
            mapa[11][15].style.backgroundColor = 'blue';
            
        }
     }
 }
}
function bloque20(){
    mapa[9][16].classList.add("veinte")
    mapa[9][17].classList.add("veinte")
    mapa[9][18].classList.add("veinte")
    mapa[9][19].classList.add("veinte")
    mapa[9][20].classList.add("veinte")
    mapa[10][16].classList.add("veinte")
    mapa[11][16].classList.add("veinte")
    mapa[12][16].classList.add("veinte")
    mapa[12][17].classList.add("veinte")
    mapa[12][18].classList.add("veinte")
    mapa[12][19].classList.add("veinte")
    mapa[12][20].classList.add("veinte")
    mapa[11][20].classList.add("veinte")
    mapa[10][20].classList.add("veinte")
  
    uno=document.querySelectorAll(".veinte")
    let pas=0;
 for(let i=0;i<uno.length;i++){
     if(uno[i].classList.contains("monedas")){
        pas=pas+1
        if(pas==14){
            mapa[10][17].style.backgroundImage = 'none';
            mapa[10][17].style.backgroundColor = 'blue';
            mapa[10][18].style.backgroundImage = 'none';
            mapa[10][18].style.backgroundColor = 'blue';
            mapa[10][19].style.backgroundImage = 'none';
            mapa[10][19].style.backgroundColor = 'blue';
            mapa[11][17].style.backgroundImage = 'none';
            mapa[11][17].style.backgroundColor = 'blue';
            mapa[11][18].style.backgroundImage = 'none';
            mapa[11][18].style.backgroundColor = 'blue';
            mapa[11][19].style.backgroundImage = 'none';
            mapa[11][19].style.backgroundColor = 'blue';
          
        }
     }
 }
}

function puntosandar(){
     numpuntos=numpuntos+1;
    divPuntos.innerText="Puntos: " +numpuntos;
}

//funcion crea los divs de los puntos y de las vidas
function puntosvidas(){
    divVidas = document.createElement("div");
    divVidas.classList.add("vidas");
    divVidas.innerText= "Vidas:";
    tablero.appendChild(  divVidas)

    for(let i=0;i<vidas;i++){
        console.log("vidas"+[i])
        numvida = document.createElement("div");
        numvida.classList.add("numvidas");
        divVidas.appendChild(  numvida) 
    }


    divPuntos = document.createElement("div");
    divPuntos.classList.add("puntos");
    divPuntos.innerText= "Puntos:";
    tablero.appendChild(  divPuntos)
}

//Esta funcion, me crea la cuadricula con los bloques y el camino
function cuadricula() {
    for (let i = 0; i < filas; i++) {
        mapa[i] = new Array(columnas);
        for (let j = 0; j < columnas; j++) {
            if (j % 4 == 0 || i % 3 == 0) {
                camino = document.createElement("div");
                camino.classList.add("camino");
                mapa[i][j] = camino
                tablero.appendChild(camino)
            } else {
                bloque = document.createElement("div");
                bloque.classList.add("bloque");
                mapa[i][j] = bloque
                tablero.appendChild(bloque)
            }
        }
    }
    iniciarMuñeco()
    iniciarMalo()
}

//Funcion para inicial al muñeco en las posiciones iniciales, y con la clase recto
function iniciarMuñeco() {
    mapa[inicioX][inicioY].classList.add("recto");
}

//Funcion para inicial al muñeco en las posiciones iniciales, y con la clase Malorecto
function iniciarMalo() {
    mapa[inicioMaloX][inicioMaloY].classList.add("Malorecto");
   setInterval(moverMalo,300); //ejecuto la funcion moverMalo cada 4 segundos
}

//Funcion mover malo, que funcionara con un numero random que elegira el camino por donde ir
function moverMalo() {
    let random = Math.floor(Math.random() * 4);
    switch (random) {
        case 0:
            if (comprobarCamino(posMaloX, posMaloY - 1)) {
                eliminarPersonajeMalo(posMaloX,posMaloY);
                posMaloY--;
                mapa[posMaloY][posMaloX].classList.add("Malorecto");
          if(quitarVidas(posMaloX, posMaloY)){
            ocultarvidas()
                }
            }
            break;
        case 1:
            if (comprobarCamino(posMaloX, posMaloY + 1)) {
                eliminarPersonajeMalo(posMaloX,posMaloY);
                posMaloY++;
                mapa[posMaloY][posMaloX].classList.add("Malorecto");
             if(quitarVidas(posMaloX, posMaloY )){
                ocultarvidas()  
                }
            }
            break;
        case 2:
            if (comprobarCamino(posMaloX + 1, posMaloY)) {
                eliminarPersonajeMalo(posMaloX,posMaloY);
                posMaloX++;
                mapa[posMaloY][posMaloX].classList.add("Maloderecha");
                if(quitarVidas(posMaloX, posMaloY)){
                    ocultarvidas()
                }
            }
            break;
        case 3:
            if (comprobarCamino(posMaloX - 1, posMaloY)) {
                eliminarPersonajeMalo(posMaloX,posMaloY);
                posMaloX--;
                mapa[posMaloY][posMaloX].classList.add("Maloizquierda");
              if(quitarVidas(posMaloX, posMaloY )){
                ocultarvidas()
                }
            }
            break;
        default:
            break;
    }
}
//funcion mover, que movera el muñeco segun la tecla pulsada
function mover(e) {
    switch (e.keyCode) {
        case 38:
            if (comprobarCamino(posX, posY - 1)) {
                eliminarPersonaje(posX, posY);
                mapa[posY][posX].classList.add("monedas");
                posY--;
                mapa[posY][posX].classList.add("recto");
                if(quitarVidas(posX, posY )){
                    ocultarvidas()
                }
                vuelta()
                puntosandar()
                ganar()
            }
            break;
        case 40:
            if (comprobarCamino(posX, posY + 1)) {
                eliminarPersonaje(posX,posY);
                mapa[posY][posX].classList.add("monedas");
                posY++;
                mapa[posY][posX].classList.add("recto");
                if(quitarVidas(posX, posY )){
                    ocultarvidas()
                }
                vuelta()
                puntosandar()
                ganar()
            }
            break;
        case 37:
            if (comprobarCamino(posX - 1, posY)) {
                eliminarPersonaje(posX,posY);
                mapa[posY][posX].classList.add("monedas");
                posX--;
                mapa[posY][posX].classList.add("izquierda");
                if(quitarVidas(posX, posY )){
                    ocultarvidas()
                }
                vuelta()
                puntosandar()
                ganar()
            }
            break;
        case 39:
            if (comprobarCamino(posX + 1, posY)) {
                eliminarPersonaje(posX,posY);
                mapa[posY][posX].classList.add("monedas");
                posX++;
                mapa[posY][posX].classList.add("derecha");
                if(quitarVidas(posX, posY )){
                    ocultarvidas()
                }
                vuelta()
                puntosandar()
                ganar()
            }
            break;
        default:
            break;
    }
}

//Funcion que utilizo para borrar todos los personajes y no dejar rastro con la imagen del personaje
function eliminarPersonaje(x,y) {
    mapa[y][x].classList.remove("recto");
    mapa[y][x].classList.remove("derecha");
    mapa[y][x].classList.remove("izquierda");
}
//Funcion que utilizo para borrar todos los personajes Malos y no dejar rastro con la imagen del personaje Malo
function eliminarPersonajeMalo(x,y) {
    mapa[y][x].classList.remove("Malorecto");
    mapa[y][x].classList.remove("Maloderecha");
    mapa[y][x].classList.remove("Maloizquierda");
}

function vuelta(){
    bloque1()
    bloque2()
    bloque3()
    bloque4()
    bloque5()
    bloque6()
    bloque7()
    bloque8()
    bloque9()
    bloque10()
    bloque11()
    bloque12()
    bloque13()
    bloque14()
    bloque15()
    bloque16()
    bloque17()
    bloque18()
    bloque19()
    bloque20()
   
}

//Funcion para comprobar el camino, si tiene la clase camino, me devolvera "true", y si no la tiene me devolvera "false".
//hacemos un try cach, para que si me da algun error, me de falso, para que no se me salga del tablero
function comprobarCamino(x, y) {
    try{
        if (mapa[y][x].classList.contains("camino")) {
            return true;
        } else {
            return false;
        }

    } catch {
        return false;
    }
}

//funcion que me quita una vida si se juntan las clases "Malorecto" (es la clase del muñecomalo) y alguna clase del muñeco bueno
function quitarVidas(X, Y) {
    if ((mapa[Y][X].classList.contains("camino")) &&((mapa[Y][X].classList.contains("Malorecto"))||(mapa[Y][X].classList.contains("Maloderecha"))||(mapa[Y][X].classList.contains("Maloizquierda"))) && ((mapa[Y][X].classList.contains("recto")) || (mapa[Y][X].classList.contains("izquierda")) || (mapa[Y][X].classList.contains("derecha")))) {
       return true;
       
    }else{
        return false;
    }

}

function ocultarvidas(){
    
    if( divVidas.childNodes[5].classList.contains("numvidas")){
        divVidas.childNodes[5].classList.remove("numvidas")
        vidas=4;
    }else  if( divVidas.childNodes[4].classList.contains("numvidas")){
        divVidas.childNodes[4].classList.remove("numvidas")
        vidas=3;
    }else  if( divVidas.childNodes[3].classList.contains("numvidas")){
        divVidas.childNodes[3].classList.remove("numvidas")
        vidas=2;
    }else  if( divVidas.childNodes[2].classList.contains("numvidas")){
        divVidas.childNodes[2].classList.remove("numvidas")
        vidas=1;
    }else  if( divVidas.childNodes[1].classList.contains("numvidas")){
        divVidas.childNodes[1].classList.remove("numvidas")
        vidas=0;
    }else{
        vidas=0;
        acabarJuego()
    }
}

//Funcion que utilizo para que cuando tengo todo el camino recorrido haya ganado el juego
function ganar() {
    let pas=0;
    bloquecamino=document.querySelectorAll(".camino")
 for(let i=0;i<bloquecamino.length;i++){
     if(bloquecamino[i].classList.contains("monedas")){
        pas=pas+1
        if(pas==153){
            terminado = document.createElement("div");
            terminado.classList.add("ganado");
            
            tablero.appendChild( terminado)  
        }
     }
 }
}

//funcion que se ejecuta, cuando te quedan 0 vidas, te saldra un mensaje que pone que has perdido.
function acabarJuego(){
    if(vidas==0){
        terminado = document.createElement("div");
        terminado.classList.add("terminado");
        tablero.appendChild( terminado)
    }
}

//Funcion para que cuando hagas click en el boton de empezar, se quite y poder empezar el juego
function empezarPartida(){
    let auxiliar = document.getElementsByClassName("auxiliar");
    for (let i = 0; i < auxiliar.length; i++) {
        auxiliar[i].style.display = "none";
    }
}
//funcion para comprobar que ha dado una vuelta a un bloque 
function buscarEsquina(x, y) {
    let salir = false;
    while (!salir) {
        if (mapa[x][y - 1].classList.contains("bloque")) {
            y--;
        } else {
            return [x - 1, y - 1];
        }
        if (mapa[x - 1][y].classList.contains("bloque")) {
            x--;
        } else {
            salir = true;
        }
    }
}


