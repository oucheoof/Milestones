function renderDeleteButton(parentID) {
    let entityOne = STATE.entityOne; // Assuming STATE.entityOne is an array
    let parentWrapper = document.getElementById(parentID);

    if (!parentWrapper) {
        console.error(`Parent with ID ${parentID} not found.`);
        return;
    }

    // Use forEach to iterate over entityOne
    entityOne.forEach((entity, index) => {
        let buttonId = `deleteBtn_${index}`; // Construct button ID using index

        if (!document.getElementById(buttonId)) {
            // If the button doesn't exist, create and append it
            let deleteButtonDOM = document.createElement("button");
            deleteButtonDOM.textContent = "DELETE";
            deleteButtonDOM.id = buttonId;
            parentWrapper.appendChild(deleteButtonDOM);

            // Attach event listener directly within forEach loop
            deleteButtonDOM.addEventListener("click", function() {
                console.log("Delete logic for entity with index: ", index);
                entityOne.splice(index, 1);
                renderApp();
            });
        }
    });
}
