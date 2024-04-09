function renderInstance(parentID, instanceData) {
    let instanceID = instanceData.id;
    let DOM = document.createElement("div");
    let parentDOM = document.getElementById(parentID);
    DOM.textContent = `Title: ${instanceData.title}, Rank: ${instanceData.rank}`;

    parentDOM.appendChild(DOM);

    DOM.id = `${parentID}: ${instanceID}`;



    if (parentID === "containerTwo") {
        renderDeleteButton2(DOM.id, instanceID);
    }
    else if (parentID === "containerOne") {
        renderDeleteButton(DOM.id, instanceID);
    }

    renderFavouriteButton(DOM, instanceData);

}
