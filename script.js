let quadro = document.getElementById("snake");
let contexto = quadro.getContext("2d");
let caixinha = 32;
var cobra = [{x: 8*caixinha, y: 8* caixinha}];   

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
CriarBG();
CriarCobrinha();