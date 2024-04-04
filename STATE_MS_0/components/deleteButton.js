// Adjusting the function to accept an ID for deletion
function renderDeleteButton(parentID) {
    let entities = parentID === "containerTwo" ? STATE.entityTwo : STATE.entityOne;
    let parentWrapper = document.getElementById(parentID);

    entities.forEach((entity, index) => {
        let buttonId = `deleteBtn_${parentID}_${entity.id}`; // Unique per entity and container

        if (!document.getElementById(buttonId)) {
            let deleteButtonDOM = document.createElement("button");
            deleteButtonDOM.textContent = "DELETE";
            deleteButtonDOM.id = buttonId;
            parentWrapper.appendChild(deleteButtonDOM);

            deleteButtonDOM.addEventListener("click", function() {
                const entityIndex = entities.findIndex(e => e.id === entity.id);
                if (entityIndex > -1) {
                    entities.splice(entityIndex, 1);
                    renderApp(); // A function that re-renders the app
                }
            });
        }
    });
}


function renderDeleteButton2(parentID) {
    let entityTwo = STATE.entityTwo; // Assuming STATE.entityOne is an array
    let parentWrapper = document.getElementById(parentID);

    if (!parentWrapper) {
        console.error(`Parent with ID ${parentID} not found.`);
        return;
    }

    // Use forEach to iterate over entityOne
    entityTwo.forEach((entity, index) => {
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
                entityTwo.splice(index, 1);
                renderApp();
            });
        }
    });
}
