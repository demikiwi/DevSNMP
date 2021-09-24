const express = require('express')
const app = express()
const port = 8080
const json = require('./materiels.json');
const json2html = require('node-json2html');

app.get('/', (req,res) => {
    res.send('Bienvenue - Sauzer / Constandi')
  })
  
app.get('/device_list',(req,res) => {
  let template = {'<>':'ul','html':[
    {'<>':'li','obj':function(){return(this.device)},'html':[
        {'<>':'span','text':'${ip}'},
        {'<>':'span','text':'${actif}'},
        {'<>':'span','text':'${description}'},
        {'<>':'span','text':'${info}'}
    ]}
]};
  console
  return res.send(json2html.render(json,template))
})
  
  app.listen(port,() => {
    console.log("Server up and running")
  })