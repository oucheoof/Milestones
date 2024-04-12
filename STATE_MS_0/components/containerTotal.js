function renderContainerTotal(parentID) {
    let parentDOM = document.getElementById(parentID);
    if (!parentDOM) {
        console.error(`Parent with ID ${parentID} not found.`);
        return;
    }

    let containerTotalDOM = document.createElement("div");
    containerTotalDOM.id = "containerTotal";
    parentDOM.appendChild(containerTotalDOM);

    const listings = ["EntityOne", "EntityTwo", "Favorites"];

    listings.forEach((listing) => {
        let listingDOM = document.createElement("p");
        listingDOM.id = listing;
        containerTotalDOM.appendChild(listingDOM);
    });

    document.getElementById("EntityOne").textContent = "Games: " + STATE.GET("entityOne").length;
    document.getElementById("EntityTwo").textContent = "Characters: " + STATE.GET("entityTwo").length;

    let favoritesCount = STATE.GET("entityOne").filter(e => e.favourite).length + STATE.GET("entityTwo").filter(e => e.favourite).length;
    document.getElementById("Favorites").textContent = "Favorites: " + favoritesCount;

    
}
function updateCounter() {
    const counterDOM = document.getElementById( 'containerTotal');
    counterDOM.innerHTML = null;
    renderContainerTotal("wrapper");

}
