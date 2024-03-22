function renderContainerTwo( parentID) {

    const DOM = document.createElement( 'div');
    DOM.id = 'containerTwo';
    document.getElementById( parentID).append( DOM);


    const entityArray = STATE.entityTwo;

    for( let i = 0; i < entityArray.length; i++) {
        renderInstance( 'containerTwo', entityArray[i]);
    }

}