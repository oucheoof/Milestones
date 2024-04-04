function renderFavouriteButton(parentElement, instanceData) {
    let favouriteDOM = document.createElement("button");
    favouriteDOM.textContent = instanceData.favourite ? "Unfavourite" : "Favourite";

    favouriteDOM.addEventListener("click", function() {
        // Toggle the favourite status of the entity
        instanceData.favourite = !instanceData.favourite;
        
        // Update button text based on new favourite value
        this.textContent = instanceData.favourite ? "Unfavourite" : "Favourite";

        // Optionally, update other parts of your app that depend on the favourite status
        // This could involve re-rendering parts of the UI or saving the state change
    });

    parentElement.appendChild(favouriteDOM);
}
