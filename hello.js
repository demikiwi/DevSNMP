const express = require('express')
const app = express()
const port = 8081
const json = require('./materiels.json')
const json2html = require('node-json2html')

app.get('/', (req,res) => {
    res.send('Bienvenue - Sauzer / Constandi')
  })
  
app.get('/list_device',(req,res) => {
  header='<div><h1>Super-superviseur by Antoine & Nicolas</h1></div><div><a href="/add_device" class=button>add device</a></div>'
  let template = {'<>':'ul','html':[
    {'<>':'div','obj':function(){return(this.device)},'html':[
        {'<>':'span class="ip" style="width:100px;"','text':'${ip} '},
        {'<>':'span class="actif" style="width:50px;"','text':'${actif} '},
        {'<>':'span class="description" style="width:400px;"','text':'${description} '},
        {'<>':'span class="info" style="width:300px;"','text':'${info} '},
        {'<>':'a href="/edit_device" class="button"','text':'edit device'}
    ]}
]};
  console.log("appel de la page device_list")

  tab=json2html.render(json,template)
  result = header + tab
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
  
app.listen(port,() => {
  console.log("Server up and running")
  })