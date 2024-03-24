const STATE = {
    entityOne: [
        {
            /* message: 'Hello from entity ONE' */
        }
    ],
    entityTwo: [
        {
            /* message: 'Hello from entity TWO' */
        }
    ]
}



function renderApp() {

    document.querySelector('main').innerHTML = null;

    renderContainerOne('wrapper');
    renderContainerTwo('wrapper');
    renderContainerTotal("wrapper");
    rendercontainerInput("wrapper");
    renderInstance('wrapper', STATE.entityOne[0]); // Render instance with entityOne data
    renderDeleteButton('wrapper', 'entityOne'); // Pass parentID and entity name

}