let pastEvents = "";
let currentDate = new Date(data.currentDate);
let cardContainer = document.getElementById("card-container");


for (let event of data.events) {
    let eventDate = new Date(event.date);
    if (eventDate < currentDate){
    pastEvents += createCard(event);
    }
}


cardContainer.innerHTML = pastEvents;