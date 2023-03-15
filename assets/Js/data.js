//Insertar datos

let urlApi= (`https://mindhub-xj03.onrender.com/api/amazing`);

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
let data = JSON.parse(localStorage.getItem('dataLocal'));


  //****FUNCIONES******

  //Creación de tarjetas dinámicas
  function createCard(event){
    let card =  
    `<div class="card" style="width: 18rem;">
    <img src="${event.image}">
    <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
    </div>
    <div class="card-body">
        <p class="card-text">Price: $ ${event.price}</p>
        <a href="./details.html?id=${event._id}" class="btn btn-primary">Ver más</a>
    </div>
</div>`

return card;
  }

// Crear e insertar checkbox de categorias
function insertCheckbox() {
  let listCategories = "";
  const checkContainer = document.querySelector(".contCheck");
  let categories = [];

  data.events.forEach(evento => {
    if (!categories.includes(evento.category)) {
      categories.push(evento.category);
      listCategories += `<div class="form-check form-check-inline">
      <input class="form-check-input checkbox-info shadow-none border border-dark-subtle" type="checkbox" name="Category" value="${evento.category}" id="${evento.category}">
      <label class="form-check-label" for="${evento.category}">${evento.category}</label>
      </div>`;
    }
checkContainer.innerHTML = listCategories;
});
};


// Crear mensaje de error de búsqueda
function nothingFound(word) {
  document.getElementById('card-container').innerHTML = `
  <div class="text-center">
  <p class="pb-3"><i class="bi bi-search fs-1"></i></p>
  <h3>We are sorry, we couldn't find anything for '${word}'</h3>
  <p>You should try using different keywords, deselecting filters, or checking for spelling mistakes.</p>
  </div>
  `
};