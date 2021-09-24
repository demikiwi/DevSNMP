const fs = require("fs");

//lecture du fichier JSON
const materiel = require("./materiels");

//Definiton nouveau materiel
let materiel = {
    "ip": "test",
    "actif": "test",
    "description": "test",
    "info": "test"
  };

//ajout du materiel dans l'objet materiels
materiels.push(materiel);

//ecriture dans le fichier JSON
fs.writeFile("materiels.JSON", JSON.stringify(materiels),err => {

  //check des erreurs
  if (err) throw err;

  //succès
  console.log("Ecriture terminée");
})