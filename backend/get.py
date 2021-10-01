from pysnmp.hlapi import *

data = (
  ObjectType(ObjectIdentity('SNMPv2-MIB', 'sysLocation', 0)),
  ObjectType(ObjectIdentity('SNMPv2-MIB', 'sysDescr', 0))
)

g = getCmd(SnmpEngine()
           , CommunityData('public', mpModel=1)                                                 # mpModel=1 = SNMPv2c
           , UdpTransportTarget(('demo.snmplabs.com', 161))                                     # nom de la cible à requeter   mau-nas1-176-2.local.univ-savoie.fr
           , ContextData()
           , *data)

#Gestion des erreurs

errorIndication, errorStatus, errorIndex, varBinds = next(g)

if errorIndication:
    print(errorIndication)
elif errorStatus:
    print('%s at %s' % (
                         errorStatus.prettyPrint(),
                         errorIndex and varBinds[int(errorIndex) - 1][0] or '?'
                       )

          )
else:
    for varBind in varBinds:
        print(' = '.join([x.prettyPrint() for x in varBind]))