let rqst = new Request ("./api/games.php", {
    method: "POST", //Beror på dokumentation
    headers: {"Content-type":" application/json"},
    body: JSON.stringify({
            name: "123",
            rating: 13,
            token: token
        })
})

//api:et används för att spara data
//STATE sparar data lokalt?
//