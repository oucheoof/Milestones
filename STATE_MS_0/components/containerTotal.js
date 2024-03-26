function renderContainerTotal (parentID){
    let DOM = document.createElement("div");
    DOM.id = "containerTotal"
    parentDOM = document.getElementById(parentID); //DOM = reference // ID = string
    
    parentDOM.appendChild(DOM);

    const listings = ["EntityOne", "EntityTwo", "Favorites"];

    for(let i = 0; i < listings.length; i++){

        let listingsDOM = document.createElement("p");
        listingsDOM.id = listings[i];

        parentDOM = document.getElementById(parentID)
        DOM.appendChild(listingsDOM);
        
    }
    document.getElementById("EntityOne").textContent = "Games:" + STATE.entityOne.length;
    document.getElementById("EntityTwo").textContent = "Characters:" + STATE.entityTwo.length;
    document.getElementById("Favorites").textContent = "Favorites:";
}

