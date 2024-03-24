function deleteInstance(instanceId, parentID) {
    let entityKey;

    if (parentID.includes("One")) {
        entityKey = "entityOne";
    } else {
        entityKey = "entityTwo";
    }

    //STATE[entityKey] = STATE[entityKey].filter(item => item.id !== instanceId)
    let entityArray = STATE[entityKey];

    let filteredArray = [];

    for (let i = 0; i < entityArray.length; i++) {
        let currentItem = entityArray[i];
        
        if (currentItem.id !== instanceId) {
            filteredArray.push(currentItem);
        }
    }

    STATE[entityKey] = filteredArray;

    if (entityKey === "entityOne") {
        renderContainerOne('wrapper');
    } else {
        renderContainerTwo('wrapper');
    }


    renderApp()
}
