let jogador, vencedor = null;
let jogadorselecionado = document.getElementById('jogador-selecionado');
let vencedorselecionado = document.getElementById('vencedor-selecionado')
var igual = false;

MudarJogador('X');

Clicou = (id) => {

    if (vencedor !== null) {
        return;
    }
    var quadrado = document.getElementById(id)

    if (quadrado.innerHTML !== "-") {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = "#000";
    quadrado.style.background = "#ffff"
    quadrado.style.border = "2px solid"

    if(jogador === "X") {
        jogador = "O"
    } else {
        jogador = "X"
    }

    MudarJogador(jogador);
    CheckPlayer()
}

function MudarJogador (valor) {
    jogador = valor;
    jogadorselecionado.innerHTML = jogador;
}

MudarVencedor = (venceu) => { 
    vencedor = venceu.innerHTML;
    vencedorselecionado.innerHTML = vencedor;

}
 
function CancelSelection(selecionar) { 
    if (typeof selecionar.onselectstart != "undefined") { 
        selecionar.onselectstart=function() 
        { 
            return false;
        }

    } else if (typeof target.style.MozUserSelect != "undefined") { 
        selecionar.style.MozUserSelect = "none" 

    } else {
        selecionar.onmousedown = function() {
            return false;
        } 
        
        selecionar.style.cursor = "default";

    }
}

CheckPlayer = () => {

    let quadrado1 = document.getElementById("1")
    let quadrado2 = document.getElementById("2")
    let quadrado3 = document.getElementById("3")
    let quadrado4 = document.getElementById("4")
    let quadrado5 = document.getElementById("5")
    let quadrado6 = document.getElementById("6")
    let quadrado7 = document.getElementById("7")
    let quadrado8 = document.getElementById("8")
    let quadrado9 = document.getElementById("9")

    if(sequencia(quadrado1, quadrado2, quadrado3)) {
       MudarCorQuadrado(quadrado1, quadrado2, quadrado3)
       MudarVencedor(quadrado1)
       return;
    } 

   if(sequencia(quadrado4, quadrado5, quadrado6)) {
        MudarCorQuadrado(quadrado4, quadrado5, quadrado6)
        MudarVencedor(quadrado4)
        return;
     }

    if(sequencia(quadrado7, quadrado8, quadrado9)) {
        MudarCorQuadrado(quadrado7, quadrado8, quadrado9)
        MudarVencedor(quadrado7)
        return;
     }

    if(sequencia(quadrado1, quadrado5, quadrado9)) {
        MudarCorQuadrado(quadrado1, quadrado5, quadrado9)
        MudarVencedor(quadrado1)
        return;
     }

    if(sequencia(quadrado3, quadrado5, quadrado7)) {
        MudarCorQuadrado(quadrado3, quadrado5, quadrado7)
        MudarVencedor(quadrado3)
        return;
     }

    if(sequencia(quadrado3, quadrado5, quadrado7)) {
        MudarCorQuadrado(quadrado3, quadrado5, quadrado7)
        MudarVencedor(quadrado3)
        return;
     } 

    if(sequencia(quadrado3, quadrado6, quadrado9)) {
        MudarCorQuadrado(quadrado3, quadrado6, quadrado9)
        MudarVencedor(quadrado3)
        return;
     } 

    if(sequencia(quadrado2, quadrado5, quadrado8)) {
        MudarCorQuadrado(quadrado2, quadrado5, quadrado8)
        MudarVencedor(quadrado2)
        return;
    } 

    if(sequencia(quadrado1, quadrado4, quadrado7)) {
        MudarCorQuadrado(quadrado1, quadrado4, quadrado7)
        MudarVencedor(quadrado1)
        return;
    } 

}


MudarCorQuadrado = (a, b, c) => {

    a.style.background = "#43C59E"
    b.style.background = "#43C59E"
    c.style.background = "#43C59E"

}


sequencia = (a, b, c) => {

    var igual = false;

    if(a.innerHTML != "-" && a.innerHTML === b.innerHTML && b.innerHTML === c.innerHTML && c.innerHTML) {
        igual = true;
    }

    return igual;
}

function reniciar() {

    vencedor = null;
    vencedorselecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i)
        quadrado.style.background = 'rgb(80, 79, 79)'
        quadrado.style.color = 'rgb(80, 79, 79)'
        quadrado.innerHTML = '-'
        quadrado.style.border = ''

    }
}

CancelSelection(document.body)
