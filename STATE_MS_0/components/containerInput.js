function rendercontainerInput(parentID){

    parentDOM = document.getElementById(parentID);


    let inputTextDOM = document.createElement("input");
    inputTextDOM.type =  "text";
    parentDOM.appendChild(inputTextDOM);

    let inputNumberDOM = document.createElement("input");
    parentDOM = document.getElementById(parentID);
    inputNumberDOM.type =  "number";
    parentDOM.appendChild(inputNumberDOM);

    let buttonDOM = document.createElement("button");
    buttonDOM.id = "button_Games";
    buttonDOM.textContent = "Game";
    parentDOM.appendChild(buttonDOM);

    let button2DOM = document.createElement("button");
    button2DOM.id = "button_Character";
    button2DOM.textContent = "Character";
    parentDOM.appendChild(button2DOM);

    

    buttonDOM.addEventListener("click", function() {
        let textValue = inputTextDOM.value;
        let numberValue = inputNumberDOM.value;

/*         let newID = 0;

        STATE.POST(){
            for(let i = 0; i < STATE.entityOne.length; i++){
            let row = STATE.entityOne[i];

            if(row.id > newID){
                newID = row.id;

            }

            
            }
        }

        newID++;

        STATE.entityOne.push({
            id: newID,
            title: textValue,
            rank: numberValue,
            favourite: false
        }); */

        let newRow = {
            title: textValue,
            rank: numberValue,
            favourite: false
        }
        
        STATE.POST('entityOne', newRow)

        
        // renderApp();
    });
    
    button2DOM.addEventListener("click", function() {
/*         let textValue = inputTextDOM.value;
        let numberValue = inputNumberDOM.value;

        let newID = 0;

        STATE.entityTwo.push({
            id: newID,
            title: textValue,
            rank: numberValue,
            favourite: false
        });

        newID++; */
        
        let newRow = {
            title: textValue,
            rank: numberValue,
            favourite: false
        }

        STATE.POST('entityTwo', newRow)

        // renderApp()
    });


}