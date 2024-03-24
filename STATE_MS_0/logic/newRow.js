function addNewRow(textValue, numberValue, targetContainerID){ //function rendercontainerInput
    let newRow = document.createElement("div");

    newRow.textContent = `Text: ${textValue}, Rating: ${numberValue}`;

    targetContainerID.appendChild(newRow);
    console.log("here");

    rendercontainerInput();
}