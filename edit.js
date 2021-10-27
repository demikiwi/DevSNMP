var materiels = require('./materiels.json')

function editIP(leUuid, data){
  console.log("appel de la fonction verifAdd")
  for (var i=0; i<fic.materiels.length; i++) {
    console.log(i)
    if (materiels.device[i].uuid == leUuid) {
      materiels.device[i].ip = data;
      break;
    }
  }

  fs.writeFile('materiels.JSON', JSON.stringify(materiels,null,2),err => {

    //check des erreurs
    if (err) throw err;
    //succès
    console.log("Ecriture terminée");
  })

}

function editActif(leUuid, data){
  console.log("appel de la fonction verifAdd")
  for (var i=0; i<materiels.device.length; i++) {
    console.log(i)
    if (materiels.device[i].uuid == leUuid) {
      materiels.device[i].actif = data;
      break;
    }
  }

  fs.writeFile('materiels.JSON', JSON.stringify(materiels),err => {

    //check des erreurs
    if (err) throw err;
    //succès
    console.log("Ecriture terminée");
  })

}

function editDescription(leUuid, data){
  console.log("appel de la fonction verifAdd")
  for (var i=0; i<materiels.device.length; i++) {
    console.log(i)
    if (materiels.device[i].uuid == leUuid) {
      materiels.device[i].description = data;
      break;
    }
  }

  fs.writeFile('materiels.JSON', JSON.stringify(materiels),err => {

    //check des erreurs
    if (err) throw err;
    //succès
    console.log("Ecriture terminée");
  })

}

function editInfo(leUuid, data){
  console.log("appel de la fonction verifAdd")
  for (var i=0; i<materiels.device.length; i++) {
    console.log(i)
    if (materiels.device[i].uuid == leUuid) {
      materiels.device[i].info = data;
      break;
    }
  }

  fs.writeFile('materiels.JSON', JSON.stringify(materiels),err => {

    //check des erreurs
    if (err) throw err;
    //succès
    console.log("Ecriture terminée");
  })

}

module.exports = {
  PrefillPourEdit: function (uuid){
    console.log(uuid)
    //Onboucle sur tout les objets "device" présent dans la variable materiels définie en début du script.
    for (var i=0; i<materiels.device.length; i++){
      //Si l'UUID récupéré existe bien alors on récupère toute les données de l'objet qui possède cet UUID.
      if (materiels.device[i].uuid == uuid) {

        ip = materiels.device[i].ip
        actif = materiels.device[i].actif
        description = materiels.device[i].description
        communaute = materiels.device[i].communaute
        port = materiels.device[i].port
        //Récupération des OIDs, le premier OID a l'index 0 de l'objet.
        oid1 = materiels.device[i].oids[0].oid
        oid2 = materiels.device[i].oids[1].oid
        oid3 = materiels.device[i].oids[2].oid

        console.log("ip = " + ip +", actif = " + actif +", description =" + description + ", communaute = " + communaute + ", OIDS = " +oid1+"\n"+oid2+"\n"+oid3)
        }

      }
    }
  }