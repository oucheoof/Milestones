let idValue = 0; //Flytta vart?

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

        STATE.entityOne.push({
            /* message: `idValue: ${idValue}, Text: ${textValue}, Number: ${numberValue}`, */ 
            id: idValue,
            title: textValue,
            rank: numberValue
        });
        
        idValue++;

        /* renderDeleteButton(); */

        renderApp();
    });
    
    button2DOM.addEventListener("click", function() {
        let textValue = inputTextDOM.value;
        let numberValue = inputNumberDOM.value;

        STATE.entityTwo.push({
            id: `ID: ${idValue}, Character: ${textValue}, Rank: ${numberValue}`,
        });

        renderApp()
    });


}