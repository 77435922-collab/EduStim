//LISTA DE URLS DE IMAGENES
const images=[
    "https://via.placeholder.com/600x300?text=1",
    "https://via.placeholder.com/600x300?text=2",
    "https://via.placeholder.com/600x300?text=3"
];

//indice que indica que imagen esta actualmente visible
let curentIndex = 0;
//funcion oara mostrar imgen segun indice
function showImage(curentIndex){
    const img=document.getElementById("carousel-img");
    img.src=images[index];
}

//funcion para pasar a la siguinte imagen
function nextImage(){
    curentIndex = (curentIndex + 1)% images.length;
    showImage(curentIndex); //muestra la nueva imagen
}
//funcion para volver
function prevImage(){
    curentIndex = 
}

