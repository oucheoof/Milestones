function renderDeleteButton(parentID) {
    let entityOne = STATE.entityOne; // Assuming STATE.entityOne is an array
    let parentWrapper = document.getElementById(parentID);

    // Ensure the parent wrapper is found
    if (!parentWrapper) {
        console.error(`Parent with ID ${parentID} not found.`);
        return; // Exit if the parent doesn't exist
    }

    // Iterate through your entityOne array
    for (let i = 0; i < entityOne.length; i++) {
        // Construct a more specific ID string for the current button
        let buttonId = `${parentID}${i}`;

        // Check if a button with this ID already exists
        if (!document.getElementById(buttonId)) {
            // If the button doesn't exist, create and append it
            let deleteButtonDOM = document.createElement("button");
            deleteButtonDOM.textContent = "DELETE";
            deleteButtonDOM.id = buttonId; // Assign the constructed ID
            parentWrapper.appendChild(deleteButtonDOM);

            // Add your event listener here
            deleteButtonDOM.addEventListener("click", function() {

            });
        }
    }
}
