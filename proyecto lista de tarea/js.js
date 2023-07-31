
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const boton = document.querySelector("#boton");
const span = document.querySelector("span");
const svg = document.querySelector(".svg");

//funcionamiento de la creacion de elementos

boton.addEventListener("click", ()=>{
    
    if(input.value.length < 19){
    if (input.value !== '') {
        const ul = document.querySelector("ul");
        const li = document.createElement("li");
        const rea = document.createElement("span");
        const p = document.createElement("p");
        const check = document.createElement("input");
        const max = document.createElement("button");
        const spanHora = document.createElement("span");
        const hora = new Date();

        check.setAttribute("class", "button2");
        check.setAttribute("type", "button");
        max.setAttribute("class", "button");
        rea.setAttribute("class", "rea");
        spanHora.setAttribute("class", "spanHora");

        check.value = "✓";
        max.textContent = "x";
        rea.textContent = "REALIZADO";
        let numero = 0;
        function numeroicre() {
            numero++;
        }
        spanHora.textContent =  `${setInterval(numeroicre(),1000)} min`;
        ul.appendChild(li);
        li.appendChild(rea);
        li.appendChild(spanHora);
        li.appendChild(p);
        li.appendChild(max);
        li.appendChild(check);
        p.textContent = input.value;
        //guardarLista(lista);

        input.value = "";
        span.style.display = "none";
        max.addEventListener("click", ()=>{
            ul.removeChild(li);
            const item = document.querySelectorAll('li');
            if (item.length === 0) {
                span.style.display = "block";
            }
        });
        let funcCheck = ()=>{
            rea.style.display = "block";
            max.style.backgroundColor = "rgb(12, 255, 73)";
            //max.setAttribute("class","b");
            li.style.border = "2px solid rgb(12, 255, 73)";
            p.style.textDecoration = "line-through";
            alert("Tarea realizada");
            check.removeEventListener("click",funcCheck);
        }
        check.addEventListener("click",funcCheck);
    }}

    else{
        alert("no puedes poner mas de 20 caracteres");
    }

    //localstoge
    /*var lista = [li];

    function guardarLista(list) {
        localStorage.setItem("listGuardar", JSON.stringify(list));
    }

    obtenerLista = localStorage.getItem("listGuardar");

        if (lista) {
            li = obtenerLista;
            console.log("bien")
        }else{
            console.log("null")
        }*/
});
