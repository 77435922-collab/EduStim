function apagarLuces(){
    document.getElementById("rojo").style.background="#330000"
    document.getElementById("amarillo").style.background="#330000"
    document.getElementById("verde").style.background="#330000"
}
//enecender rojo
function enecenderRojo(){
    apagarLuces();
    document.getElementById("rojo").style.background="red"
}

//encender amarillo
function enecenderAmarillo(){
    apagarLuces();
    document.getElementById("amarillo").style.background="yellow"
}
//encender verde
function enecenderVerde(){
    apagarLuces();
    document.getElementById("verde").style.background="lime"
}