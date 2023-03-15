// let contador = document.getElementById ("contador");
// let boton = document.getElementById("boton");

// boton.onclick = function(){
//     contador.innerHTML = parseInt(contador.innerHTML) +1
// }


// let listaGatitos = [

//     {
//         nombre:"Paulo",
//         edad: 2
//     },
//     {
//         nombre:"Mojito",
//         edad: 9
//     },
//     {
//         nombre:"Totopo",
//         edad: 3
//     }
// ]

//Iterar un objeto

// let htmlItem = "";
// listaGatitos.forEach(gatito => htmlItem +=
//     `<li>El nombre del gatito es ${gatito.nombre}</li>`
//     );


//Insertar lista en documento
// document.querySelector("ul").innerHTML += htmlItem;
// console.log(htmlItem);

// fetch(`https://restcountries.com/v3.1/all`, [options])
// .then(response => response.json())
// .then(data =>{
//     //procesamiento de datos aqui
// })
// .catch(error =>{
//     //manejo de cualquier error aqui
// })


////////////////////////////
// async function traerDatos(){
// fetch(urlApi)
// .then(response => response.json())
// .then(datos =>{
//     throw new Error("Ocurrio un error inesperado");
//     console.log(datos);
//     console.log(datos.results[5]);
//     console.log(datos.results[5].name);
// })
// .catch(error =>{
//     console.log(error);
// })
// }
//////////////////////////////////////

//****APIS******
// let urlApi= "https://restcountries.com/v3.1/all";
// let urlApi= "https://rickandmortyapi.com/api/character";
let urlApi= `https://mindhub-xj03.onrender.com/api/amazing`);

async function traerDatos(){
try{
    const response = await fetch (urlApi);
    console.log(response);
    const datos = await response.json();
    console.log(datos.results);
    localStorage.setItem(`dataLocal`,JSON.stringify(data));
}catch(error){
    console.log(error);
}
}

traerDatos();