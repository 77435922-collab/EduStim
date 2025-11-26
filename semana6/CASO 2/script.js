//AGREG EL VALOR DEL BOTON PRESIONAND AL INPUT DE LA CALCULADORA
function appendValue(value){
    //ACCEDER AL INPUT CON EL ID "display" Y AÑADE EL VALOR
    // AL FINAL DEL CONTENIDO ACTUAL
    document.getElementById('display').value+=value
    //DE AHI, SE REALIZA LA LIMPIEZA
    function clearDisplay(){
        //HAY QUE BORRAR EL CONTENIDO DEL INPUT
        document.getElementById('display').value='';
    }
    //AHORA EVALUAR LA OPERACION MATEMATICAS ESCRITA EN EL DISPLAY
    function calculate(){
        try{
            const result=eval(document.getElementById('display').value);
            //MOSTRAR RESULTADO EN EL INPUT
            document.getElementById('display').value=result;
        }catch{
            //SI HAY ERROR EN LA EXPRESION
            alert("Expresion no valida");
        }
    }
}