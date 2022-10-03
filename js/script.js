const burger = document.querySelector(".burger")

function visualizarLista(){
    const lista = document.querySelector(".lista");
    const lista__li = document.querySelectorAll(".lista__li")
    console.log(lista__li)
    lista.classList.toggle("lista-activada")
    burger.classList.toggle("toggle")

    lista__li.forEach((li,index)=>li.style.transition = `all ${2*index+0.6}s`)
}

burger.addEventListener("click",visualizarLista)



// console.log(parrafo)


function mostrarParrafos(e){
    let parrafos = e.target.querySelector('.parrafos')
    console.log(parrafos)
    parrafos.style.visibility ="visible"


}
function ocultarParrafos(e){
    let parrafos = e.target.querySelector('.parrafos')
    console.log(parrafos)
    parrafos.style.visibility ="hidden"


}

const iconos = document.querySelectorAll(".icono")
//console.log(iconos)
iconos.forEach(item => item.addEventListener("mouseover", e => mostrarParrafos(e)))
iconos.forEach(item => item.addEventListener("mouseout", e => ocultarParrafos(e)))
