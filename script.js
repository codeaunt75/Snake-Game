let quadro = document.getElementById("snake");
let contexto = quadro.getContext("2d");
let caixinha = 32;
var cobra = [{x: 8*caixinha, y: 8* caixinha}];  
let direction = "right"; 
let comida = {
    x:Math.floor(Math.random()*15+1) * caixinha,
    y:Math.floor(Math.random()*15+1) * caixinha
}

function CriarBG(){
    contexto.fillStyle = "lightgreen";
    contexto.fillRect(0,0,16*caixinha, 16*caixinha);
}

function CriarCobrinha(){
    for(i=0; i<cobra.length; i++){
        contexto.fillStyle = "green";
        contexto.fillRect (cobra[i].x, cobra[i].y, caixinha, caixinha);
    }
}

function DesenhaComida(){

    contexto.fillStyle = "red";
    contexto.fillRect (comida.x, comida.y, caixinha, caixinha);


}

document.addEventListener('keydown', update);

function update(event){
    if (event.keyCode == 37 && direction!= "right") direction = "left";
    if (event.keyCode == 38 && direction!= "down") direction = "up";
    if (event.keyCode == 39 && direction!= "left") direction = "right";
    if (event.keyCode == 40 && direction!= "up") direction = "down";
}

function iniciarJogo(){

    if(cobra[0].x > (15 * caixinha) && direction=="right") cobra[0].x= 0;
    if(cobra[0].x < 0  && direction=="left") cobra[0].x= 16 * caixinha;
    if(cobra[0].y > (15 * caixinha) && direction=="down") cobra[0].y= 0;
    if(cobra[0].y < 0  && direction=="up") cobra[0].y= 16 * caixinha;

    CriarBG();
    CriarCobrinha();
    DesenhaComida();

    let cobraX = cobra[0].x;
    let cobraY = cobra[0].y;

    if(direction == "right") cobraX += caixinha;
    if(direction == "left") cobraX -= caixinha;
    if(direction == "up") cobraY -= caixinha;
    if(direction == "down") cobraY += caixinha;

    cobra.pop();

    let cabeca = {
        x: cobraX,
        y: cobraY
    }

    cobra.unshift(cabeca);
}

let jogo = setInterval(iniciarJogo,200);
