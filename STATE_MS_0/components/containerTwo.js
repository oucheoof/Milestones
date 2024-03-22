function renderContainerTwo( parentID) {

    /*
    
        SKAPA DOM 
        APPENDA TILL PARENT_ID
        HÄMTA entityTwo 
        Rendera Instansen
    
    
    */
    let DOM = document.createElement("p"); 
    DOM.id = "containerTwo"; 

    parentDOM = document.getElementById(parentID);

    parentDOM.appendChild(DOM);

    const entitytwo = STATE.entityTwo;

    for(let i = 0; i < entitytwo.length; i++){
        renderInstance(DOM.id, entitytwo[i])
    }

}