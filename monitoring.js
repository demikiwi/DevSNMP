const fs = require('fs')
const materiels = require('./materiels.json')

module.exports = {
    getdata: function (uuid){
        
    },
    prefil_oid_1: function (uuid){
        
        oid1 = materiels.device[i].oids[0].oid

        result = '{"oid1":"'+oid1+'"}';
        return JSON.parse(result)
    },
    prefil_oid_2: function (uuid){
        
        oid1 = materiels.device[i].oids[1].oid

        result = '{"oid1":"'+oid1+'"}';
        return JSON.parse(result)
    },
    prefil_oid_3: function (uuid){
        
        oid1 = materiels.device[i].oids[2].oid

        result = '{"oid1":"'+oid1+'"}';
        return JSON.parse(result)
    },
}
