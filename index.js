const form = document.querySelector('form');
const busqueda = document.querySelector("#busqueda");
const listadoBusquedas = document.querySelector("#busquedas-realizadas");

let busquedasRealizadas = JSON.parse(localStorage.getItem("historial"));


form.addEventListener("submit", (e)=>{

    e.preventDefault();

    let busquedaActual = captarData();
    busquedasRealizadas.push(busquedaActual);

    localStorage.setItem("historial",JSON.stringify(busquedasRealizadas));
    
    realizarBusqueda(busquedaActual);
});

function captarData(){

    let buscado = busqueda.value.trim()
    return buscado;
}

if(busquedasRealizadas){
    renderizarBusquedas(busquedasRealizadas);

}

else{
    busquedasRealizadas =[];
}
console.log(busquedasRealizadas);

function renderizarBusquedas(listado){

    listado.forEach((element) =>{
        let nodo = document.createElement("p");
        let texto = document.createTextNode(element);
        nodo.appendChild(texto);
        listadoBusquedas.appendChild(nodo)
         
    })

}

//redireccionar el usuario a google

function realizarBusqueda(texto){
    window.open(`https://www.google.com/search?q=${texto}`)
    
}
