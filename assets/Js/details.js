let clickDetail = location.search;
let siguiente = new URLSearchParams(clickDetail);
let eventGuia = siguiente.get("id");
let obj = data.events.find(event => event._id == eventGuia);

let cardDetailPage = document.getElementById("detailCard");
let htmlDetail = 
    `
    <img class="img-detail p-2  rounded-start" src="${obj.image}" alt="Detail image">
    <div class="card text-center px-3 border" style="width: 28rem; height:28rem">
        <div class="card-body">
            <h2 class="card-title">${obj.name}</h2>
            <p class="card-text fs-5">${obj.description}</p>
            <div class="card-footer mt-4 text-start">
                <p><span>Category: </span>${obj.category}</p>
                <p><span>Date: </span>${obj.date}</p>
                <p><span>Place: </span>${obj.place}</p>
                <p><span>Capacity: </span>${obj.capacity}</p>
                <p id="assistEstimate"></p>
                <p><span>Price: </span>$ ${obj.price}</p>
            </div>
        </div>
    </div>
    `;
cardDetailPage.innerHTML = htmlDetail;
let currentDate = new Date(data.currentDate);
let eventDate = new Date(obj.date);
let assisEstimate = document.getElementById("assistEstimate");
if (eventDate < currentDate) {
    assisEstimate.innerHTML = `<span> Assistance: </span>${obj.assistance}`
} else {
    assisEstimate.innerHTML = `<span>Estimate: </span>${obj.estimate}`
}