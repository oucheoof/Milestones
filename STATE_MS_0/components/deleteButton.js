function renderDeleteButton(parentID){
    let deleteButtonDOM = document.createElement("button");
    let entityOne = STATE.entityOne;

    deleteButtonDOM.textContent = "DELETE";
    parentWrapper = document.getElementById(parentID);

    for (let i = 0; i < entityOne.length; i++) {

        deleteButtonDOM.id = `deleteButton_${i}`; // Assign a unique ID based on index i
    }

    parentWrapper.appendChild(deleteButtonDOM);

    deleteButtonDOM.addEventListener("click", function(){
        for (let i = 0; i < entityOne.length; i++) {
            let entity = entityOne[i];

            if(entity.id == deleteButtonDOM.id){
                entityOne.splice(i, 1); // Remove the object at index i
                console.log("true");

                break; // Stop the loop after removing the object

            }
        }
    })    
}