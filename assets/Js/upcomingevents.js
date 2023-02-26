let upcomingEvents = "";
let currentDate = new Date(data.currentDate);
let cardContainer = document.getElementById("card-container");


for (let event of data.events) {
    let eventDate = new Date(event.date);
    if (eventDate > currentDate){
        upcomingEvents += createCard(event);
    }
}


cardContainer.innerHTML = upcomingEvents;