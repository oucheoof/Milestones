function rendercontainerInput(parentID){
    let inputTextDOM = document.createElement("input")
    parentDOM = document.getElementById(parentID);
    inputTextDOM.type =  "text";
    parentDOM.appendChild(inputTextDOM);

    //Fortsätt skapa input

    let inputNumberDOM = document.createElement("input")
    parentDOM = document.getElementById(parentID);
    inputNumberDOM.type =  "number";
    console.log("here");
    parentDOM.appendChild(inputNumberDOM);
}