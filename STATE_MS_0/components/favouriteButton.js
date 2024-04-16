function renderFavouriteButton(parentElement, instanceData, entity) {
    let favouriteDOM = document.createElement("button");
    favouriteDOM.id = "favouriteButton"
    favouriteDOM.textContent = instanceData.favorite ? "Unfavourite" : "Favourite";

    let typeOfEntity
    if(entity == "entityOne"){
        typeOfEntity = "games"
    }
    else if (entity == "entityTwo"){
        typeOfEntity = "characters"
    }

    

    favouriteDOM.addEventListener("click", function() {

        let favoriteBool;

        if(favouriteDOM.textContent == "Unfavourite"){
            favoriteBool = false
        }
        else if (favouriteDOM.textContent == "Favourite"){
            favoriteBool = true
        }


        let instanceID = instanceData.id;
        let rqst = new Request(`./api/${typeOfEntity}.php`, { 
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token: token,  
                id: instanceID,
                favorite: favoriteBool
            })
        })
        STATE.PATCH(entity, instanceID, rqst);

    });

    parentElement.appendChild(favouriteDOM);

}
