function renderFavouriteButton(parentElement, instanceData, entity) {
    let favouriteDOM = document.createElement("button");
    favouriteDOM.textContent = instanceData.favourite ? "Unfavourite" : "Favourite";

    favouriteDOM.addEventListener("click", function() {
        let instanceID = instanceData.id;
        STATE.PATCH(entity, instanceID);

    });

    parentElement.appendChild(favouriteDOM);

    console.log(instanceData);
}
