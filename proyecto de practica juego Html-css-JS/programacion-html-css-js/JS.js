//variables de los elementos HTML
const span = document.getElementById("span");
const menu = document.querySelector(".menu-a");
const menuAside = document.querySelector(".aside");
const ele1 = document.querySelector(".boton-comprar1");
const ele2 = document.querySelector(".boton-comprar2");
const ele3 = document.querySelector(".boton-comprar3");
const ele4 = document.querySelector(".boton-comprar4");
const ele5 = document.querySelector(".boton-comprar5");
//variables para el overplay
const conteinerPanelCompras = document.querySelector(".conteiner-panel-compras");
const overplayPanelCompras = document.querySelector(".overplayPanelCompras");
const overplay = document.querySelector(".overplay");
const imgOverplay = document.querySelector(".img-overplay");
const nombreCard = document.querySelector(".nombre-card");
const precioCard = document.querySelector(".precio-card");
const btnCarito = document.querySelector(".carito-comprear");
//variables para un prueva
var numero = 0;

//eventos de el carito de compras
ele1.addEventListener("click",contadorCompra1);
ele2.addEventListener("click",contadorCompra2);
ele3.addEventListener("click",contadorCompra3);
ele4.addEventListener("click",contadorCompra4);
ele5.addEventListener("click",contadorCompra5);


//funcion del overplay
overplayPanelCompras.addEventListener("click", ()=>{
conteinerPanelCompras.style.display ="none";
document.body.style.overflow = "auto";
});

//funcionalidades para comprar

function caritoComprar() {
    numero++;
    span.removeAttribute("hidden");
    var e = span.textContent=numero;
    btnCarito.removeEventListener("click", caritoComprar);
}
    
function contadorCompra1(){
    var i1 = conteinerPanelCompras.style.display ="flex";
    document.body.style.overflow = "hidden";
    nombreCard.textContent = "iphone";
    precioCard.textContent = "US$600";
    imgOverplay.setAttribute("src", "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone12-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1661958189577");
    btnCarito.addEventListener("click",caritoComprar);
}function contadorCompra2(){
    conteinerPanelCompras.style.display ="flex";
    document.body.style.overflow = "hidden";
    nombreCard.textContent = "nike fo1 1";
    precioCard.textContent = "US$45";  
    btnCarito.addEventListener("click",caritoComprar);
    imgOverplay.setAttribute("src", "https://falabella.scene7.com/is/image/FalabellaCO/34935304_1?wid=800&hei=800&qlt=70");
}function contadorCompra3(){
    conteinerPanelCompras.style.display ="flex";
    document.body.style.overflow = "hidden";
    nombreCard.textContent = "nike for1 2";
    precioCard.textContent = "US$15";
    btnCarito.addEventListener("click",caritoComprar);
    imgOverplay.setAttribute("src", "https://cdn-3.expansion.mx/7d/d5/bb5050bb46c09009c3e5fd73da7f/nuevos-tenis-tiffany-nike.jpg");
}
function contadorCompra4(){
    conteinerPanelCompras.style.display ="flex";
    document.body.style.overflow = "hidden";
    nombreCard.textContent = "LV nike";
    precioCard.textContent = "US$15,000";
    imgOverplay.setAttribute("src", "https://resources.diariolibre.com/images/2022/02/09/tenis-louis-vuitton-4dc61e27-focus-0-0-608-342.jpg");
    btnCarito.addEventListener("click",caritoComprar); 
}
function contadorCompra5(){
    conteinerPanelCompras.style.display ="flex";
    document.body.style.overflow = "hidden";
    nombreCard.textContent = "nike for2";
    precioCard.textContent = "US$45";
    imgOverplay.setAttribute("src", "https://www.innvictus.com/medias/IN-DD1503-100-1.png?context=bWFzdGVyfGltYWdlc3wyMDIyMDJ8aW1hZ2UvcG5nfGltYWdlcy9oMGIvaGM5Lzk5OTAyMTU0MzQyNzAucG5nfDJiNjAxMmJjOTYzM2NmOGU3YTlhNGRlNjA0NDI4ZjFiMTY3NGU4MGEzOTI0M2I2Y2I2NTI0NmE0ODc5ODk0NjE");
    btnCarito.addEventListener("click",caritoComprar);    
}
//funciones del pobimiento del menu
function menuAfuera(){
    menuAside.style.transform =  'translateX(-185px)';
    menu.addEventListener("click", menuAdentro);
}
function menuAdentro() {
    menuAside.style.transform =  'translateX(270px)';
    menu.removeEventListener("click", menuAdentro);
}
menu.addEventListener("click", menuAfuera);