function renderDeleteButton(parentID) {
    let entities = parentID === "containerTwo" ? STATE.entityTwo : STATE.entityOne;
    let parentWrapper = document.getElementById(parentID);

    entities.forEach((entity, index) => {
        let buttonId = `deleteBtn_${parentID}_${entity.id}`;

        if (!document.getElementById(buttonId)) {
            let deleteButtonDOM = document.createElement("button");
            deleteButtonDOM.textContent = "DELETE";
            deleteButtonDOM.id = buttonId;
            parentWrapper.appendChild(deleteButtonDOM);

            deleteButtonDOM.addEventListener("click", function() {
                const entityIndex = entities.findIndex(e => e.id === entity.id);
                if (entityIndex > -1) {
                    entities.splice(entityIndex, 1);
                    renderApp(); 
                }
            });
        }
    });
}


function renderDeleteButton2(parentID) {
    let entityTwo = STATE.entityTwo; 
    let parentWrapper = document.getElementById(parentID);

    if (!parentWrapper) {
        console.error(`Parent with ID ${parentID} not found.`);
        return;
    }


    entityTwo.forEach((entity, index) => {
        let buttonId = `deleteBtn_${index}`; 

        if (!document.getElementById(buttonId)) {

            let deleteButtonDOM = document.createElement("button");
            deleteButtonDOM.textContent = "DELETE";
            deleteButtonDOM.id = buttonId;
            parentWrapper.appendChild(deleteButtonDOM);


            deleteButtonDOM.addEventListener("click", function() {
                console.log("Delete logic for entity with index: ", index);
                entityTwo.splice(index, 1);
                renderApp();
            });
        }
    });
}
