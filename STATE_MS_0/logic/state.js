const STATE = {
    entityOne: [
        {
            message: 'Hello from entity ONE'
        }
    ],
    entityTwo: [
        {
            message: 'Hello from entity TWO'
        }
    ]
}



function renderApp() {

    document.querySelector('main').innerHTML = null;

    renderContainerOne('wrapper');
    renderContainerTwo('wrapper');
    renderContainerTotal("wrapper");
    rendercontainerInput("wrapper");

}