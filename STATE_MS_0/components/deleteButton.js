function renderDeleteButton(parentID, id) {
    let parentWrapper = document.getElementById(parentID);

    
    let deleteButtonDOM = document.createElement("button");
    deleteButtonDOM.textContent = "DELETE";
    parentWrapper.appendChild(deleteButtonDOM);

    deleteButtonDOM.addEventListener("click", function() {
        STATE.Delete('entityOne', id);
    });
        
}



function renderDeleteButton2(parentID, id) {
    let parentWrapper = document.getElementById(parentID);

    
    let deleteButtonDOM = document.createElement("button");
    deleteButtonDOM.textContent = "DELETE";
    parentWrapper.appendChild(deleteButtonDOM);

    deleteButtonDOM.addEventListener("click", function() {
        STATE.Delete('entityTwo', id);
    });

}

