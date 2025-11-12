//Utilidad simple para mostrar mensajes de error/exito
const setOut = (el, msg) => {el.textContent = msg;}


//Esperar a que el DOM este listo
document.addEventListener("DOMContentLoaded",() => {
    /*1. Saludo por t nombre */
    const nombre = document.getElementById("nombre");
    const btnSaludar = document.getElementById("btnSaludar");
    const OutSaludo = document.getElementById("outSaludo");

    btnSaludar.addEventListener("click", () => {
        const valor = (nombre.value || "").trim();
        if (!valor){
            setOut(OutSaludo, "Por favor, ingresa tu nombre");
            return;
        }
        setOut(OutSaludo, `Hola, ${valor}! Bienvenido.`);
    });

    /*2. Suma de dos números*/
    const n1 = document.getElementById("n1");
    const n2 = document.getElementById("n2");
    const btnSumar = document.getElementById("btnSumar");
    const outSuma = document.getElementById("outSuma");

    btnSumar.addEventListener("click",()=> {
        const a = parseFloat(n1.value);
        const b = parseFloat(n2.value);

        if(Number.isNaN(a) || Number.isNaN(b)){
            setOut(outSuma,"Ingresa ambos numeros para Sumar")
            return;
        }
        setOut(outSuma,`Resultado: ${a + b}`);
    });

    /*Promedio de notras (separado por comas)*/
    const notas = document.getElementById("notas");
    const btnPromedio = document.getElementById("btnPromedio");
    const outPromedio = document.getElementById("outPromedio");

    btnPromedio.addEventListener("click", () => {
        const crudo = (notas.value || "").trim();
        if(!crudo){
            setOut(outPromedio,"Escribe las notas separadas por coma")
            return;
        }
        //Procesar: Dividir por coma, convertir a numero y validar
        const arr = crudo.split(",").map(v => parseFloat(v.trim())).filter(v => !Number.isNaN(v));
            if(arr.lenght === 0){
                setOut(outPromedio,"N se puede encontrar numero validos");
                return;
            }

        const suma = arr.reduce((acc,n)=> acc + n, 0);
        const prom = suma / arr.length;
        setOut(outPromedio, `Cantidad: ${arr.length} | Promedio: ${prom.toFixed(2)}`);
    });

    /*Transformacion de Texto*/
    const texto = document.getElementById("texto");
    const btbTrim = document.getElementById("btnTrim");
    const btnUpper = document.getElementById("btnUpper");
    const btnContar = document.getElementById("btnContar");
    const outTexto = document.getElementById("outTexto");

    btnTrim.addEventListener("clic",() =>{
        texto.value= (texto.value || "").trim();
        setOut(outTexto,"Espacion iniciales y finales eliminado.");
    });

    btnUpper.addEventListener("click", () => {
        texto.value = (texto.value || "").toUppercase();
        setOut(outTexto,"Texto Convertido en MAYUSCULAS");
    });

    btnContar.addEventListener("click", () =>{
        const t = (texto,value || "").trim();
        const caracteres = t.length;
        const palabras = t ? t.split(/\s+/).length: 0;
        setOut(outTexto,`Caracteres: ${caracteres} | Palabras: ${palabras}`);
    });
});