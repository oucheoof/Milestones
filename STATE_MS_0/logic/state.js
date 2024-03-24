const STATE = {
    entityOne: [
        {
/*             id: 1, message: 'Hello from entity ONE'
 */        }
    ],
    entityTwo: [
        {
/*             id: 2, message: 'Hello from entity ONE'
 */        }
    ]
}

function renderApp() {

    document.querySelector('main').innerHTML = null;

    renderContainerOne('wrapper');
    renderContainerTwo('wrapper');
    renderContainerTotal("wrapper");
    rendercontainerInput("wrapper");

}