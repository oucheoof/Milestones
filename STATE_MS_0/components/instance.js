function renderInstance( parentID, instanceData) {

    /*
    
        skapa DOM appenda till parentID
        textContent = instancedata.message från ROW
    
    */

    let DOM = document.createElement("div");
    let parentDOM = document.getElementById(parentID);
    DOM.textContent = `Title: ${instanceData.title}, Rank: ${instanceData.rank}`;

    parentDOM.appendChild(DOM);

    DOM.id = "instance";
    


}