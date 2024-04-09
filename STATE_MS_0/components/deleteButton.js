function renderDeleteButton(parentID) {
    let entities = STATE.entityOne;
    let parentWrapper = document.getElementById(parentID);

    
    let deleteButtonDOM = document.createElement("button");
    deleteButtonDOM.textContent = "DELETE";
    parentWrapper.appendChild(deleteButtonDOM);

    deleteButtonDOM.addEventListener("click", function() {

        const entityIndex = entities.findIndex(e => e.id === entities.id);
            entities.splice(entityIndex, 1);
            renderApp(); 
    });
        
}



function renderDeleteButton2(parentID) {
    let entityTwo = STATE.entityTwo; 
    let parentWrapper = document.getElementById(parentID);

    
    let deleteButtonDOM = document.createElement("button");
    deleteButtonDOM.textContent = "DELETE";
    parentWrapper.appendChild(deleteButtonDOM);

    deleteButtonDOM.addEventListener("click", function() {
        const entityIndex = entityTwo.findIndex(e => e.id === entityTwo.id);

            entityTwo.splice(entityIndex, 1);
            renderApp(); 
    });

}

