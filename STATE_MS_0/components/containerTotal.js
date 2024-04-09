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

    // Update counts for EntityOne and EntityTwo
    document.getElementById("EntityOne").textContent = "Games: " + STATE.GET("entityOne").length;
    document.getElementById("EntityTwo").textContent = "Characters: " + STATE.GET("entityTwo").length;

    // Calculate and display the favorites count
    let favoritesCount = STATE.GET("entityOne").filter(e => e.favourite).length + STATE.GET("entityTwo").filter(e => e.favourite).length;
    document.getElementById("Favorites").textContent = "Favorites: " + favoritesCount;

    
}
