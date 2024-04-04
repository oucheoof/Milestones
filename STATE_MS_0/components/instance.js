function renderInstance(parentID, instanceData, instanceID) {
    let DOM = document.createElement("div");
    let parentDOM = document.getElementById(parentID);
    DOM.textContent = `Title: ${instanceData.title}, Rank: ${instanceData.rank}`;

    parentDOM.appendChild(DOM);

    DOM.id = `$instance: ${instanceID}`;
    /* instanceID = DOM.id */



    if (parentID === "containerTwo") {
        renderDeleteButton2(parentID, instanceID);
    }
    else if (parentID === "containerOne") {
        renderDeleteButton(parentID, instanceID);
    }

    // Correctly passing the DOM element, not the ID
    renderFavouriteButton(DOM, instanceData);

}