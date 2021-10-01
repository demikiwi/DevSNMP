const express = require('express')
const app = express()
const port = 8081
const json = require('./materiels.json')
const json2html = require('node-json2html')

app.get('/', (req,res) => {
    res.send('Bienvenue - Sauzer / Constandi')
  })
  
app.get('/device_list',(req,res) => {
  header="<div><h1>Super-superviseur by antoine & Nicolas</h1></div>"
  let template = {'<>':'ul','html':[
    {'<>':'div','obj':function(){return(this.device)},'html':[
        {'<>':'span class="ip" style="width:100px;"','text':'${ip} '},
        {'<>':'span class="actif" style="width:50px;"','text':'${actif} '},
        {'<>':'span class="description" style="width:400px;"','text':'${description} '},
        {'<>':'span class="info" style="width:300px;"','text':'${info} '}
    ]}
]};
  console.log("appel de la page device_list")

  tab=json2html.render(json,template)
  result = header + tab
  return res.send(result)

})
  
  app.listen(port,() => {
    console.log("Server up and running")
  })