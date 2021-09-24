const fs = require("fs");

//lecture du fichier JSON
fs.readFile("materiels.json", function(err, data){

    //check des erreurs
    if (err) throw err;

    //convertion en js
    const materiels = JSON.parse(data);

    //affichage de la liste de materiels
    console.log(materiels);
})