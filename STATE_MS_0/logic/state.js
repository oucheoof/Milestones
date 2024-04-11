const STATE = {
    entityOne: [
        {
            id: 0,
            title: "God of War",
            rank: 10,
            favourite: false

        }
    ],
    entityTwo: [
        {
            id: 1,
            title: "Kratos",
            rank: 10,
            favourite: false
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