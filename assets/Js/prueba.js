// let contador = document.getElementById ("contador");
// let boton = document.getElementById("boton");

// boton.onclick = function(){
//     contador.innerHTML = parseInt(contador.innerHTML) +1
// }


let listaGatitos = [

    {
        nombre:"Paulo",
        edad: 2
    },
    {
        nombre:"Mojito",
        edad: 9
    },
    {
        nombre:"Totopo",
        edad: 3
    }
]

//Iterar un objeto

let htmlItem = "";
listaGatitos.forEach(gatito => htmlItem +=
    `<li>El nombre del gatito es ${gatito.nombre}</li>`
    );


//Insertar lista en documento
document.querySelector("ul").innerHTML += htmlItem;
// console.log(htmlItem);