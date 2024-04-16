function rendercontainerInput(parentID){

    parentDOM = document.getElementById(parentID);


    let inputTextDOM = document.createElement("input");
    inputTextDOM.type =  "text";
    inputTextDOM.placeholder = "Title/Character"
    parentDOM.appendChild(inputTextDOM);

    console.log(inputTextDOM);

    let inputNumberDOM = document.createElement("input");
    parentDOM = document.getElementById(parentID);
    inputNumberDOM.type =  "number";
    inputNumberDOM.placeholder = "Ranking"

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

        let rqst = new Request("./api/games.php", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token: token,  
                name: textValue, 
                rating: numberValue,               
                favorite: false
            })
        })
        
        STATE.POST('entityOne', rqst)
        
    });
    
    button2DOM.addEventListener("click", function() {
        let textValue = inputTextDOM.value;
        let numberValue = inputNumberDOM.value;

        let rqst = new Request("./api/characters.php", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token: token,  
                name: textValue, 
                rating: numberValue,               
                favorite: false
            })
        })
        
        STATE.POST('entityTwo', rqst)

    });


}