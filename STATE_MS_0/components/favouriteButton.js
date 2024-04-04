function renderFavouriteButton(parentElement, instanceData) {
    let favouriteDOM = document.createElement("button");
    favouriteDOM.textContent = instanceData.favourite ? "Unfavourite" : "Favourite";

    favouriteDOM.addEventListener("click", function() {

        instanceData.favourite = !instanceData.favourite;
        
        this.textContent = instanceData.favourite ? "Unfavourite" : "Favourite";

    });

    parentElement.appendChild(favouriteDOM);

    console.log(instanceData);

}
