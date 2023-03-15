// let htmlEvents = "";
// let cardContainer = document.getElementById("card-container");

// for (let event of data.events) {
//     htmlEvents += createCard(event);
// }

// cardContainer.innerHTML = htmlEvents;
//***Corrijo código y pongo dentro de función para mejor orden.****


const cardContainer = document.getElementById("card-container");


// Crea las cards Dinamicas
function createCards () {
    let htmlEvents = "";
    for (let event of data.events) {
        htmlEvents += createCard(event);
    };
    cardContainer.innerHTML = htmlEvents;
};
createCards();

// Crear e insertar checkbox de categorias
insertCheckbox();


// Busqueda con ambos filtros
function bothFiltersSearch(checkeados, keyWord, htmlEvents) {
    for(let elemento of checkeados) {
        data.events.filter(evento => (elemento == evento.category) && ((evento.name.toLowerCase().includes(keyWord)) || (evento.description.toLowerCase().includes(keyWord))) ).forEach(evento => { htmlEvents += createCard(evento) });
    };
    htmlEvents.length == 0 ? nothingFound(keyWord) : cardContainer.innerHTML = htmlEvents;
};


// Filtrar por checkbox seleccionados
const homeChecks = document.querySelectorAll(".form-check-input");
for (let check of homeChecks) {
    check.addEventListener('change', () => {
        let checkeados = [];
        for (let chk of homeChecks) {
            if (chk.checked) {
                checkeados.push(chk.value)
            };
        };

        let keyWord = searchInput.value.toLowerCase().trim();
        let htmlEvents = "";
        if ( (checkeados.length > 0) && (keyWord == "") ) {
            for(let elemento of checkeados) {
                data.events.filter(evento => elemento == evento.category).forEach(evento => { htmlEvents += createCard(evento) });
                cardContainer.innerHTML = htmlEvents;
            };
        } else if ( (checkeados.length > 0) && (keyWord != "") ) {
            bothFiltersSearch(checkeados, keyWord, htmlEvents);            
        } else {
            createCards();
        };
    });
};


// Busqueda por texto Ingresado
const searchForm = document.querySelector(".searchForm");
const searchInput = document.querySelector(".searchInput");
searchForm.addEventListener('submit', e => {
    e.preventDefault();
    let htmlEvents = "";
    let result = false;
    let keyWord = searchInput.value.toLowerCase().trim();
    //Guardo checkboxes para enviar como Argumento en bothFiltersSearch
    let checkedCategories = [];
    for (let chk of homeChecks) {
        if (chk.checked) {
            checkedCategories.push(chk.value)
        };
    };
    
    if ((keyWord != "") && (checkedCategories.length == 0)) {
        data.events.forEach(event => {
            if ( (event.name.toLowerCase().includes(keyWord)) || (event.description.toLowerCase().includes(keyWord)) ) {
                htmlEvents += createCard(event);
                result = true;
            }
        });
        if (result) {
            cardContainer.innerHTML = htmlEvents;
        } else {
            nothingFound(keyWord);
        };
    } else if ((keyWord != "") && (checkedCategories.length > 0)){
        bothFiltersSearch(checkedCategories, keyWord, htmlEvents);
    } else {
        createCards();
    };
});