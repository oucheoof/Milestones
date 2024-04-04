function renderInstance(parentID, entityName, entityData) {
    const parentDOM = document.getElementById(parentID);
    if (!parentDOM) {
        console.error(`Parent with ID ${parentID} not found.`);
        return;
    }

    const instanceContainer = document.createElement('div');
    instanceContainer.classList.add('entityInstance');
    instanceContainer.textContent = `Title: ${entityData.title}, Rank: ${entityData.rank}`;

    // Create a delete button container
    const deleteContainer = document.createElement('button');
    deleteContainer.classList.add('deleteListing');
    deleteContainer.textContent = 'DELETE';
    deleteContainer.onclick = () => deleteListingInstance(entityName, entityData.id);

    // Append the delete button to the instance container
    instanceContainer.append(deleteContainer);

    // Append the instance container to the parent container
    parentDOM.append(instanceContainer);
}

function deleteListingInstance(entityName, id) {
    // Find and remove the entity with the given id from the specified entity array in STATE
    const entityArray = STATE[entityName];
    const index = entityArray.findIndex(e => e.id === id);
    if (index > -1) {
        entityArray.splice(index, 1);
        STATE.renderApp(); // Re-render the app to reflect the deletion
    } else {
        console.error(`Entity with ID ${id} not found in ${entityName}.`);
    }
}
