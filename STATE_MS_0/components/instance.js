function renderInstance(parentID, instanceData, instanceID) {
    let DOM = document.createElement("div");
    let parentDOM = document.getElementById(parentID);
    DOM.textContent = `Title: ${instanceData.title}, Rank: ${instanceData.rank}`;

    parentDOM.appendChild(DOM);

    // Increment the counter and use it to generate a unique ID
    DOM.id = `$instance: ${instanceID}`;
    /* instanceID = DOM.id */



    if (parentID === "containerTwo") {
        renderDeleteButton2(parentID, instanceID);
    }
    else if (parentID === "containerOne") {
        renderDeleteButton(parentID, instanceID);
    }

}