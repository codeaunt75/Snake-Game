let quadro = document.getElementById("snake");
let contexto = quadro.getContext("2d");
let caixinha = 32;
var cobra = [{x: 8*caixinha, y: 8* caixinha}];  
let direction = "right"; 

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

function iniciarJogo(){
    CriarBG();
    CriarCobrinha();

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

let jogo = setInterval(iniciarJogo,100);
