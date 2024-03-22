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