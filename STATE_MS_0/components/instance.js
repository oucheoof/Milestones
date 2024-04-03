function renderInstance(parentID, instanceData, instanceID) {
    let DOM = document.createElement("div");
    let parentDOM = document.getElementById(parentID);
    DOM.textContent = `Title: ${instanceData.title}, Rank: ${instanceData.rank}`;

    parentDOM.appendChild(DOM);

    // Increment the counter and use it to generate a unique ID
    DOM.id = `${instanceID}`;
    renderDeleteButton(parentID);
}