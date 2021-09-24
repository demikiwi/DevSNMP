const http = require('http');
const express = require('express');

app.get('/', (req,res) => {
    res.send('Bienvenue - Sauzer / Constandi')
  })
  
  app.get('/device_list',(req,res) => {
    res.setHeader("Content-Type", "application/json");
            res.writeHead(200);
            res.send('../BDD.json')
  })
  
  app.listen(8080,() => {
    console.log("Server up and running")
  })