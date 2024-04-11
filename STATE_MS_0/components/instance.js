function renderInstance(parentID, instanceData) {
    let instanceID = instanceData.id;
    let DOM = document.createElement("div");
    let parentDOM = document.getElementById(parentID);
    DOM.textContent = `Title: ${instanceData.title}, Rank: ${instanceData.rank}`;

    parentDOM.appendChild(DOM);




    if (parentID === "containerTwo") {
        DOM.id = `entityTwo: ${instanceID}`;
        renderDeleteButton2(DOM.id, instanceID);
        renderFavouriteButton(DOM, instanceData, 'entityTwo');
    }
    else if (parentID === "containerOne") {
        DOM.id = `entityOne: ${instanceID}`;
        renderDeleteButton(DOM.id, instanceID);
        renderFavouriteButton(DOM, instanceData, 'entityOne');s
    }


}

function deleteInstance(entity, id){
    let removeId = document.getElementById(`${entity}: ${id}`);
    removeId.remove();
}

function patchInstance(entity, id, isFavourite) {
    let elementId = `${entity}: ${id}`;
    let instanceElement = document.getElementById(elementId);

    let favouriteButton = instanceElement.querySelector("#favouriteButton");
    if (favouriteButton) {
        favouriteButton.textContent = isFavourite ? "Unfavourite" : "Favourite";
    }
}

