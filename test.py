from pysnmp.hlapi import *
import json

fileObject = open("materiels.json", "r")
jsonContent = fileObject.read()
obj_python = json.loads(jsonContent)


iterator = getCmd(SnmpEngine(),
                  CommunityData('public'),
                  UdpTransportTarget(('glmsfr.ddns.net', 22558)),
                  ContextData(),
                  ObjectType(ObjectIdentity(obj_python['OID'])))

errorIndication, errorStatus, errorIndex, varBinds = next(iterator)

if errorIndication:  # SNMP engine errors
    print(errorIndication)
else:
    if errorStatus:  # SNMP agent errors
        print('%s at %s' % (errorStatus.prettyPrint(), varBinds[int(errorIndex)-1] if errorIndex else '?'))
    else:
        for varBind in varBinds:  # SNMP response contents
            print(' = '.join([x.prettyPrint() for x in varBind]))