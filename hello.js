const http =  require('http')
const express = require('express')
const app = express()
const port = 8080
json = require('./BDD.json');

app.get('/', (req,res) => {
    res.send('Bienvenue - Sauzer / Constandi')
  })
  
app.get('/device_list',(req,res) => {
  res.setHeader("Content-Type","application/json")
  return res.json(json)
})
  
  app.listen(port,() => {
    console.log("Server up and running")
  })