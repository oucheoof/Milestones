const _state = {
    entityOne: [
    ],
    entityTwo: [
    ]
}

const STATE ={
    renderApp,
    GET,
    POST,
    Delete,
    PATCH
    
}

let token = "ec24b88c7f3f7a3d488f29d59f70baba7f86414e";

function GET(entity){
    let entityArray = _state[entity];

    let copyOfEntity = JSON.parse(JSON.stringify(entityArray));
    return copyOfEntity;
}


async function POST(entity, rqst){

    const data = await fetcher( rqst);

    _state[entity].push(data);

    switch(entity){
        case "entityOne": 
            postRenderInstanceContainerOne(data);
            break;
        
        case "entityTwo": 
            postRenderInstanceContainerTwo(data);
            break;
    }

    updateCounter();
}


async function Delete(entity, id, rqst){

    const data = await fetcher( rqst);

    
    const entityIndex = _state[entity].findIndex(e => e.id === data.id);
        

    _state[entity].splice(entityIndex, 1);

    deleteInstance(entity, id); 
    
    updateCounter();

}

async function PATCH (entity, id, rqst){
    
    const data = await fetcher(rqst);

    const rowIndex = _state[entity].findIndex(e => e.id === data.id);

    console.log(rowIndex);

    // let boolFavourite = _state[entity][rowIndex].favourite;

    // if(boolFavourite === false){
    //     boolFavourite = true;
    // }
    // else{
    //     boolFavourite = false;
    // }

    _state[entity][rowIndex].favorite = data.favorite;

    patchInstance(entity, id, data.favorite);
}




async function renderApp() {

    document.querySelector('main').innerHTML = null;


    let gamesRequest = new Request("./api/games.php?token=" + token)
    let characterRequest = new Request("./api/characters.php?token=" + token)

    const gameData = await fetcher (gamesRequest)
    const characterData = await fetcher (characterRequest)

    _state.entityOne = gameData;

    _state.entityTwo =  characterData;

    renderContainerOne('wrapper');
    renderContainerTwo('wrapper');
    renderContainerTotal("wrapper");
    rendercontainerInput("wrapper");
    


}