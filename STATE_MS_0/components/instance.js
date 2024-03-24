function renderInstance( parentID, instanceData) {

    /*
    
        skapa DOM appenda till parentID
        textContent = instancedata.message från ROW
    
    */

    let DOM = document.createElement("div");
    DOM.id = "instance";
    DOM.textContent = instanceData.message;

    parentDOM = document.getElementById(parentID);

    parentDOM.appendChild(DOM);
}

function renderDeleteButton(parentID, entityName) {
    let deleteButtonDOM = document.createElement("button");
    deleteButtonDOM.id = "delete";
    deleteButtonDOM.textContent = "DELETE";
    let parentDOM = document.getElementById(parentID); // Get parent DOM element
    parentDOM.appendChild(deleteButtonDOM);

    deleteButtonDOM.addEventListener("click", function () {
        if (STATE[entityName]) { // Check if the entity exists
            delete STATE[entityName];
            console.log("Works");
            parentDOM.innerHTML = ''; // Clear parent element
        }
    });
}

renderApp(); // Call renderApp to render everything


