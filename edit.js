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