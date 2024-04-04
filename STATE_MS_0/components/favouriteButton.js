function renderFavouriteButton (parentID){
    favouriteDOM = document.createElement("button");
    favouriteDOM.textContent("Favourite");
    
}

function favourite (){
        for( const row of STATE[entity]) {
        if( row.id !== id) continue;

        //IF FALSE ASSIGN TRUE VICE VERSA
        row.favourite = row.favourite ? false : true;
    }
}