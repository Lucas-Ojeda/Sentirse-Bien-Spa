import '../styles/style.css'; // Ajusta la ruta según la estructura de tu proyecto
const navToggle=document.querySelector(".nav-toggle");
const navMenu=document.querySelector(".nav-menu");
navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu_visible");
});
const navServicios=document.getElementById("nav-servicios");
const navComentarios=document.getElementById("nav-comentarios");
const navContactanos=document.getElementById("nav-contactanos");
const navIngresar=document.getElementById("nav-ingresar");
const body=document.getElementById("body");
 
/*Servicios*/
navServicios.addEventListener("click",()=>{
    navServicios.classList.add("nav-menu-link_active");
    navComentarios.classList.remove("nav-menu-link_active");
    navContactanos.classList.remove("nav-menu-link_active");
});


/*Comentarios*/
navComentarios.addEventListener("click",()=>{
    navServicios.classList.remove("nav-menu-link_active");
    navComentarios.classList.toggle("nav-menu-link_active");
    navContactanos.classList.remove("nav-menu-link_active");
});

/*Contactanos*/
navContactanos.addEventListener("click",()=>{
    navServicios.classList.remove("nav-menu-link_active");
    navComentarios.classList.remove("nav-menu-link_active");
    navContactanos.classList.toggle("nav-menu-link_active");
});

const linkLogo=document.getElementById("link-logo");
linkLogo.addEventListener("click",()=>{
    navServicios.classList.remove("nav-menu-link_active");
    navComentarios.classList.remove("nav-menu-link_active");
    navContactanos.classList.remove("nav-menu-link_active");

});

/* Carrusel */

$(document).ready(function(){
    
    /* 
    $(".owl-carousel").owlCarousel({
        items: 3,             // Número de elementos visibles a la vez
        margin: 10,           // Espacio entre los elementos
        loop: true,           // Repetir infinitamente
        autoplay: true,       // Reproducción automática
        autoplayTimeout: 2000, // Tiempo entre cambios (en ms)
        smartSpeed: 1000,     // Velocidad de la transición
        dots: true,           // Mostrar puntos de navegación
        nav: true,            // Mostrar flechas de navegación
        responsive: {
            0: {
                items: 1      // 1 elemento visible en pantallas pequeñas
            },
            600: {
                items: 2      // 2 elementos visibles en pantallas medianas
            },
            1000: {
                items: 3      // 3 elementos visibles en pantallas grandes
            }
        }
    });
    */
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:3
            },
            1200:{
                items:3
            }
        }
    });

    
});









