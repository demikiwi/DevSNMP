const fs = require('fs')
const materiels = require('./materiels.json')

module.exports = {
  PrefillPourEdit: function (uuid){
    console.log(uuid)
    //Onboucle sur tout les objets "device" présent dans la variable materiels définie en début du script.
    for (var i=0; i<materiels.device.length; i++){
      //Si l'UUID récupéré existe bien alors on récupère toute les données de l'objet qui possède cet UUID.
      if (materiels.device[i].uuid == uuid) {
        console.log("l'UUID a bien été trouvé")
        ip = materiels.device[i].ip
        actif = materiels.device[i].actif
        description = materiels.device[i].description
        communaute = materiels.device[i].communaute
        port = materiels.device[i].port
        //Récupération des OIDs, le premier OID a l'index 0 de l'objet.
        oid1 = materiels.device[i].oids[0].oid
        oid2 = materiels.device[i].oids[1].oid
        oid3 = materiels.device[i].oids[2].oid

        //concatenation dans un JSON des variables du device
        result = '{"ip":"'+ip+'","actif":"'+actif+'","description":"'+description+'","communaute":"'+communaute+'","oid1":"'+oid1+'","oid2":"'+oid2+'","oid3":"'+oid3+'","port":"'+port+'","uuid":"'+uuid+'"}';
        return JSON.parse(result)
      }

      }
    },
    editDevice: function (IP, Etat, Description, Communaute, Oid1, Oid2, Oid3, Port,Uuid){
      for (var i=0; i<materiels.device.length; i++) {
        if (materiels.device[i].uuid == Uuid) {
          materiels.device[i].ip = IP;
          materiels.device[i].actif = Etat;
          materiels.device[i].description = Description;
          materiels.device[i].communaute = Communaute;
          materiels.device[i].port = Port;
          materiels.device[i].oids[0].oid = Oid1;
          materiels.device[i].oids[1].oid = Oid2;
          materiels.device[i].oids[2].oid = Oid3;
          break;
        }
      }
      fs.writeFile('materiels.JSON', JSON.stringify(materiels,null,2),err => {

        //check des erreurs
        if (err) throw err;
        //succès
        console.log("Ecriture terminée du device" + Uuid);
      })
    },
    removeDevice: function (Uuid){
      for (var i=0; i<materiels.device.length; i++) {
        if (materiels.device[i].uuid == Uuid) {
          // result = materiels.device.splice(i,1)
          // console.log(result)
          materiels.device.splice(i,1)
          break;
        }
      }
      fs.writeFile('materiels.JSON', JSON.stringify(materiels,null,2),err => {

        //check des erreurs
        if (err) throw err;
        //succès
        console.log("Supression terminée du device" + Uuid);
      })
    }
  }