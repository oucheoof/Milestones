const _state = {
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

const STATE ={
    renderApp,
    GET,
    POST,
    Delete
    
}

function GET(entity){
    let entityArray = _state[entity];

    let copyOfEntity = JSON.parse(JSON.stringify(entityArray));
    return copyOfEntity;
}

function POST(entity, row){
    let newID = 0;

    for(let i = 0; i < _state[entity].length; i++){
        let row = _state[entity][i];;

        if(row.id > newID){
            newID = row.id;

        }
    
    }

    newID++;

    row.id = newID;

    _state[entity].push(row);

    renderApp()

}

function Delete(entity, id){
    
    const entityIndex = _state[entity].findIndex(e => e.id === id);
        

    _state[entity].splice(entityIndex, 1);
    renderApp(); 
}




function renderApp() {

    document.querySelector('main').innerHTML = null;

    renderContainerOne('wrapper');
    renderContainerTwo('wrapper');
    renderContainerTotal("wrapper");
    rendercontainerInput("wrapper");
    


}