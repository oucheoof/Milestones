function renderContainerOne( parentID) { 

    let DOM = document.createElement("div"); 
    DOM.id = "containerOne"; 

    let parentDOM = document.getElementById(parentID); 

    parentDOM.appendChild(DOM);

    const entityOne = STATE.GET("entityOne");

    for(let i = 0; i < entityOne.length; i++){
        renderInstance(DOM.id, entityOne[i])
    }
}

function postRenderInstanceContainerOne(row){
    renderInstance("containerOne", row);
}