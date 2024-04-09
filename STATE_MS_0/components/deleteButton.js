function renderDeleteButton(parentID) {
    let parentWrapper = document.getElementById(parentID);

    
    let deleteButtonDOM = document.createElement("button");
    deleteButtonDOM.textContent = "DELETE";
    parentWrapper.appendChild(deleteButtonDOM);

    deleteButtonDOM.addEventListener("click", function() {

        const entityIndex = STATE.GET("entityOne").findIndex(e => e.id === STATE.GET("entityOne").id);
            STATE.GET("entityOne").splice(entityIndex, 1);
            renderApp(); 
    });
        
}



function renderDeleteButton2(parentID) {
    let parentWrapper = document.getElementById(parentID);

    
    let deleteButtonDOM = document.createElement("button");
    deleteButtonDOM.textContent = "DELETE";
    parentWrapper.appendChild(deleteButtonDOM);

    deleteButtonDOM.addEventListener("click", function() {
        const entityIndex = STATE.GET("entityTwo").findIndex(e => e.id === STATE.GET("entityTwo").id);

            STATE.GET("entityTwo").splice(entityIndex, 1);
            renderApp(); 
    }); 

}

