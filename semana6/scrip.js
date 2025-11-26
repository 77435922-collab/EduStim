//PASO 1: SELECCIONAMOS EL ELEMENTO DEL DOM, DONDE SE MOSTRARA LA HORA
const clock=document.getElementById('clock');
//PASO 2: CREAMS UNA FUNCION QUE ACTUALICE LA HORA
function updateclock(){
    //aca obtendremos la hora actual del sistema
    const now=new Date();
    //EXTRAER HORAS, MINUTOS Y SEGUNDOS
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getUTCSeconds();
    //HAY QUE ASEGURAR QUE LOS VALOS SIEMPRE TENGAS DOS DIGITOS
    hours=String(hours).padStart(2,0);
    minutes=String(minutes).padStart(2,0);
    seconds=String(seconds).padStart(2,0);
    //CONSTRUIR EL STRING CON FORMATO HH:MM:SS
    const timeString=`${hours}:${minutes}:${seconds}`;
    //INSERTAMOS LA HORA EN EL ELEMENTO HTML
    clock.textContent=timeString;
}
//PASO 3: SE DEBE EJECUTAR LA FUNCION CADA SEGUNDO, USANDO SETINTERVAL
setInterval(updateclock,1000);
//PASO 4: LLAMAR A LA FUNCION UNA VEZ PARA MOSTRAR LA HORA
// INICIA INMEDIATAMENTE
updateclock();