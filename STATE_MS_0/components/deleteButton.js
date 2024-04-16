function renderDeleteButton(parentID, id) {
    let parentWrapper = document.getElementById(parentID);

    
    let deleteButtonDOM = document.createElement("button");
    deleteButtonDOM.textContent = "DELETE";
    parentWrapper.appendChild(deleteButtonDOM);

    deleteButtonDOM.addEventListener("click", function() {


        let gameRqst = new Request("./api/games.php", { 
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token: token,  
                id: id
            })
        })

        STATE.Delete('entityOne', id, gameRqst);
    });
        
}



function renderDeleteButton2(parentID, id) {
    let parentWrapper = document.getElementById(parentID);

    
    let deleteButtonDOM = document.createElement("button");
    deleteButtonDOM.textContent = "DELETE";
    parentWrapper.appendChild(deleteButtonDOM);

    deleteButtonDOM.addEventListener("click", function() {


        let characterRqst = new Request("./api/characters.php", { 
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token: token,  
                id: id
            })
        })

        STATE.Delete('entityTwo', id, characterRqst);
    });
}

