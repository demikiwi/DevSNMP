const fs = require('fs')

//lecture du fichier JSON
const materiels = require("./materiels");

function generateUUID() { // Public Domain/MIT
  var d = new Date().getTime();//Timestamp
  var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16;//random number between 0 and 16
      if(d > 0){//Use timestamp until depleted
          r = (d + r)%16 | 0;
          d = Math.floor(d/16);
      } else {//Use microseconds since page-load if supported
          r = (d2 + r)%16 | 0;
          d2 = Math.floor(d2/16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

uuid = generateUUID()

module.exports = {
  fonctionDajout: function (IP, Etat, Description, Communaute, Oids, Port){
    uuid = generateUUID()

    //Definiton nouveau materiel
    let materiel = {
      "ip": IP,
      "actif": Etat,
      "description": Description,
      "communaute": Communaute,
      "oids" : Oids,
      "port" : Port,
      "uuid": uuid
    };

    materiels.device.push(materiel)
    // //ajout du materiel dans l'objet materiels
    // //console.log(JSON.stringify(materiel))

    console.log(materiels)
    // //ecriture dans le fichier JSON
    fs.writeFile('materiels.JSON', JSON.stringify(materiels,null,2),err => {

    //   //check des erreurs
    if (err) throw err;

    //succès
    console.log("Ecriture terminée");
   })
  }
}