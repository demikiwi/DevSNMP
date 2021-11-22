import json
from pysnmp.hlapi import *
from json import *
from datetime import datetime
import re


def snmp():

    with open("./materiels.json") as json_data:
        equipement = json.load(json_data)

    for device in equipement['device']:
        for oids in device['oids']:
            iterator = getCmd(SnmpEngine(),
                            CommunityData(device['communaute']),
                            UdpTransportTarget((device['ip'], device['port'])),
                            ContextData(),
                            ObjectType(ObjectIdentity(oids['oid'])))

            errorIndication, errorStatus, errorIndex, varBinds = next(iterator)
            if errorIndication:  # SNMP engine errors
                result = str(errorIndication)
            else:
                if errorStatus:  # SNMP agent errors
                    print('%s at %s' % (errorStatus.prettyPrint(), varBinds[int(errorIndex)-1] if errorIndex else '?'))
                else:
                    for varBind in varBinds:  # SNMP response contents
                        result = (' = '.join([x.prettyPrint() for x in varBind]))
                        result = re.sub('.*= ', '', result)

            snmpresult = str(datetime.now())+';'+device['ip']+';'+device['uuid']+';'+oids['oid']+';'

            fichier = open("./logs.txt", "a")
            fichier.write("\n"+snmpresult+result)
            fichier.close()

    return 0

if __name__ == "__main__":
    snmp()

    #https://matplotlib.org/ librairie affichage graph