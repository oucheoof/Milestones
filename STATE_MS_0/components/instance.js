function renderInstance( parentID, instanceData) {

    /*
        skapa DOM appenda till parentID
        textContent = instancedata.message från ROW
    
    */


    let DOM = document.createElement("div");
    DOM.id = `instance-${instanceData.id}`;
    DOM.textContent = instanceData.message;

    parentDOM = document.getElementById(parentID);

    parentDOM.appendChild(DOM);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
        deleteInstance(instanceData.id, parentID);
    });
    DOM.appendChild(deleteButton);
}