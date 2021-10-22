from pysnmp.hlapi import *
from json import *


def snmp():

    equipement = fromJsonToObject("../materiels.json")
    snmpresult = ""

    for device in equipement:
        for oid in equipement.oids:
            iterator = getCmd(SnmpEngine(),
                            CommunityData(equipement.communaute),
                            UdpTransportTarget((equipement.ip, equipement.port)),
                            ContextData(),
                            ObjectType(ObjectIdentity('1.3.6.1.2.1.2.2.1.16.10')))

            errorIndication, errorStatus, errorIndex, varBinds = next(iterator)

            if errorIndication:  # SNMP engine errors
                print(errorIndication)
            else:
                if errorStatus:  # SNMP agent errors
                    print('%s at %s' % (errorStatus.prettyPrint(), varBinds[int(errorIndex)-1] if errorIndex else '?'))
                else:
                    for varBind in varBinds:  # SNMP response contents
                        print(' = '.join([x.prettyPrint() for x in varBind]))

            snmpresult = 
    return snmpresult 