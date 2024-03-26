function renderInstance( parentID, instanceData) {

    /*
    
        skapa DOM appenda till parentID
        textContent = instancedata.message från ROW
    
    */

    let DOM = document.createElement("div");
    let parentDOM = document.getElementById(parentID);
    parentDOM.appendChild(DOM);


    DOM.id = "instance";
/*     DOM.textContent = instanceData.message;
 */
    for(let key in instanceData){
        if(key != "id"){
            const text = document.createElement("p");
            DOM.append(text);
            text.textContent = `${key}: ${instanceData[key]}`;
        }
    }
    

}