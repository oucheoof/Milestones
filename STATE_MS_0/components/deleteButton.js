function renderDeleteButton(parentID){
    let deleteButtonDOM = document.createElement("button");
    let entityOne = STATE.entityOne;

    deleteButtonDOM.textContent = "DELETE";
    parentWrapper = document.getElementById(parentID);

    for (let i = 0; i < entityOne.length; i++) {

        deleteButtonDOM.id = `deleteButton_${i}`; // Assign a unique ID based on index i
    } //Fixa id

    parentWrapper.appendChild(deleteButtonDOM);

    deleteButtonDOM.addEventListener("click", function(){
        //Fixa delete
    })
}