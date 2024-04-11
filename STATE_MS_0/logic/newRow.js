function addNewRow(textValue, numberValue, targetContainerID){ 
    let newRow = document.createElement("div");

    newRow.textContent = `Text: ${textValue}, Rating: ${numberValue}`;

    targetContainerID.appendChild(newRow);
    console.log("here");

    rendercontainerInput();
}