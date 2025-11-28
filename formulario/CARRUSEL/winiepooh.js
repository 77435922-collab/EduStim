//insertamos las imagenes reales
const images=[
    "imagenes/imagen 1.jpg",
    "imagenes/imagen 2.jpg",
    "imagenes/imagen 3.jpg"  
];

let index=0;
const imgTag=document.getElementById("carousel-img");

//vamos a viualizar la imgen actual con un poco de animacion
function showImage(){
    imgTag.classList.remove("show");//ocultar
    setTimeout(() =>{
        imgTag.src=images[index];
        imgTag.classList.add("show");//muestra todo
    },200);
}

//siguiente imagen
function nextImage(){
    index=(index + 1)% images.length;
    showImage();//llama a la funcion
}

//imagen anterior
function prevImage(){
    index=(index - 1 + images.length)% images.length;
    showImage();
}
//reproducir de forma automatica cada 3 seg
setInterval(nextImage,3000);

//mostrar la primera imagen de forma correcta
imgTag.classList.add("show");