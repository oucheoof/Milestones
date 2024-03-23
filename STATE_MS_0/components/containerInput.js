function rendercontainerInput(parentID){

    parentDOM = document.getElementById(parentID); // "Wrapper", state.js


    let inputTextDOM = document.createElement("input");
    inputTextDOM.type =  "text";
    parentDOM.appendChild(inputTextDOM);

    let inputNumberDOM = document.createElement("input");
    inputNumberDOM.type =  "number";
    console.log("here");
    parentDOM.appendChild(inputNumberDOM);

    let buttonDOM = document.createElement("button");
    buttonDOM.id = "button_Games";
    buttonDOM.textContent = "Game";
    parentDOM.appendChild(buttonDOM);

    let button2DOM = document.createElement("button");
    button2DOM.id = "button_Character";
    button2DOM.textContent = "Character";
    parentDOM.appendChild(button2DOM);



    buttonDOM.addEventListener("click", function(){
        let textValue = inputTextDOM.value;
        let numberValue = inputNumberDOM.value;

        let containerOneTarget = document.getElementById("containerOne")

        console.log(textValue);
        console.log(numberValue);

        addNewRow(textValue, numberValue, containerOneTarget);
    })

    button2DOM.addEventListener("click", function(){
        let textValue = inputTextDOM.value;
        let numberValue = inputNumberDOM.value;

        let containerTwoTarget = document.getElementById("containerTwo")

        console.log(textValue);
        console.log(numberValue);

        addNewRow(textValue, numberValue, containerTwoTarget);
    })

}