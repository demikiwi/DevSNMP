const express = require('express')
const app = express()
const port = 8080

app.get('/', (req,res) => {
    res.send('Bienvenue - Sauzer / Constandi')
  })
  
app.get('/device_list',(req,res) => {
  res.writeHead(200,{"Content-Type":"application/json"});
  return res.json('../BDD.json');
})
  
  app.listen(port,() => {
    console.log("Server up and running")
  })