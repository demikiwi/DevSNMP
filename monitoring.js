const fs = require('fs')
const materiels = require('./materiels.json')
const Papa = require('papaparse')

fs.readFile(__dirname + '/logs.txt',"utf-8",  function (err, data) {
    if (err) {
        throw err; 
      }
      csv = data.toString();
    });

config_papa_parse = {
    delimiter: ";"
}

module.exports = {
    getdata: function (uuid){
        var raw_data = Papa.parse(csv, config_papa_parse);

        console.log(raw_data)
    },
    prefil_oid_1: function (uuid){
        
        for (var i=0; i<materiels.device.length; i++){

            if (materiels.device[i].uuid == uuid) {
                oid1 = materiels.device[i].oids[0].oid

                result = '{"oid1":"'+oid1+'"}';
                return JSON.parse(result)
            }
        }
    },
    prefil_oid_2: function (uuid){
        
        for (var i=0; i<materiels.device.length; i++){

            if (materiels.device[i].uuid == uuid) {
                oid2 = materiels.device[i].oids[1].oid

                result = '{"oid2":"'+oid2+'"}';
                return JSON.parse(result)
            }
        }
    },
    prefil_oid_3: function (uuid){
        
        for (var i=0; i<materiels.device.length; i++){

            if (materiels.device[i].uuid == uuid) {
                oid3 = materiels.device[i].oids[2].oid

                result = '{"oid3":"'+oid3+'"}';
                return JSON.parse(result)
            }
        }
    },
}
