const express = require('express')
const app = express()
const port = 8081
const json = require('./materiels.json')
const json2html = require('node-json2html')

app.get('/', (req,res) => {
    res.send('Bienvenue - Sauzer / Constandi')
  })

app.get('/list_device',(req,res) => {

var script = '<script>function getValue(uuiddata)\n{\nvar x = document.getElementById(uuiddata);\nvar ipFromData = x.querySelector(".ip")\nvar actifFromData = x.querySelector(".actif")\nvar descriptionFromData = x.querySelector(".description")\nvar infoFromData = x.querySelector(".info")\nvar data = \n{\nip: ipFromData,\nactif: actifFromData,\ndescription: descriptionFromData,\ninfo: infoFromData\n}\nconsole.log(data)\n}</script>'

  header='<head><title>Socket.IO chat</title><style>body { margin: 0; padding-bottom: 3rem; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }</style></head><div><h1>Super-superviseur by Antoine & Nicolas</h1></div><div><a href="/add_device" class=button>add device</a></div>'
  let template = {'<>':'ul','html':[
    {'<>':'div id="$uuid"','obj':function(){return(this.device)},'html':[
        {'<>':'span class="ip"','text':'${ip} '},
        {'<>':'span class="actif"','text':'${actif} '},
        {'<>':'span class="description"','text':'${description} '},
        {'<>':'span class="info"','text':'${info} '},
        {'<>':'a href="" ','text':'edit device'}
    ]}  
]};
  console.log("appel de la page device_list")

  tab=json2html.render(json,template)
  result = header + script + tab
  return res.send(result)

})

app.get('/edit_device', (req, res) => {
  console.log("le bouton edit device a été cliqué")
  res.sendFile(__dirname + '/edit.html');
});

app.get('/add_device', (req, res) => {
  console.log("le bouton add device a été cliqué")
  res.sendFile(__dirname + '/add.html');
});

/*
######################################
Fonction placé dans la variable script
######################################
function getValue(uuiddata){
  var x = document.getElementById(uuiddata);
  var ipFromData = x.querySelector(".ip")
  var actifFromData = x.querySelector(".actif")
  var descriptionFromData = x.querySelector(".description")
  var infoFromData = x.querySelector(".info")
  var data = {
    ip: ipFromData,
    actif: actifFromData,
    description: descriptionFromData,
    info: infoFromData
  }
  console.log(data)
}
*/
  
app.listen(port,() => {
  console.log("Server up and running")
  })