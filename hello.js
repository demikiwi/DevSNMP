const express = require('express')
const exphbs = require('express-handlebars');
const app = express()
const port = 8081
const json2html = require('node-json2html')
var bodyParser = require('body-parser')
const add = require('./ajout')
const edit = require('./edit');
const monitoring = require('./monitoring');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send('Bienvenue - Sauzer / Constandi')
  })

app.get('/list_device',(req,res) => {

const json = require('./materiels.json')

  header='<head><title>Superviseur</title><style>body { margin: 0; padding-bottom: 3rem; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }</style></head><div><h1>Super-superviseur by Antoine & Nicolas</h1></div><div><a href="/add_device" class=button>add device</a></div>'
  let template = {'<>':'ul','html':[
    {'<>':'div','obj':function(){return(this.device)},'html':[
        {'<>':'span class="ip"','text':'${ip} '},
        {'<>':'span class="actif"','text':'${actif} '},
        {'<>':'span class="description"','text':'${description} '},
        {'<>':'span class="info"','text':'${port} '},
        {'<>':'a href="/edit_device/${uuid}"','text':'edit device'},
        {'<>':'span class="separateur"','text':' '},
        {'<>':'a href="/remove_device/${uuid}"','text':'remove device'},
        {'<>':'span class="separateur"','text':' '},
        {'<>':'a href="/monitor/${uuid}"','text':'monitor device'}
    ]}  
]};
  console.log("appel de la page device_list")

  tab=json2html.render(json,template)
  result = header + tab
  return res.send(result)

});

app.engine('hbs', exphbs({
  defaultLayout: 'edit',
  extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.get('/edit_device/:uuid', (req, res) => {
  prefil = edit.PrefillPourEdit(req.params.uuid)

  console.log("le bouton edit device a été cliqué")

  res.render('edit', { 
    ip_pre: prefil.ip,
    description_pre: prefil.description,
    communaute_pre: prefil.communaute,
    oid1_pre: prefil.oid1,
    oid2_pre: prefil.oid2,
    oid3_pre: prefil.oid3,
    port_pre: prefil.port,
    uuid_pre: prefil.uuid
    })
});

app.post('/edit', function (req, res, next) {
  form_data = req.body
  edit.editDevice(form_data.ip, form_data.etat, form_data.description, form_data.communaute, form_data.oid1, form_data.oid2, form_data.oid3, form_data.port, form_data.uuid)
  res.writeHead(301,{Location: '/list_device'});
  res.end();
});

app.post('/ajout', function (req, res, next) {
  form_data = req.body
  add.fonctionDajout(form_data.ip, form_data.etat, form_data.description, form_data.communaute, form_data.oid1, form_data.oid2, form_data.oid3, form_data.port)
  res.writeHead(301,{Location: '/list_device'});
  res.end();
});

app.get('/add_device', (req, res) => {
  console.log("le bouton add device a été cliqué")
  res.sendFile(__dirname + '/add.html');
});

app.get('/remove_device/:uuid', (req, res) => {
  edit.removeDevice(req.params.uuid)
  res.writeHead(301,{Location: '/list_device'});
  res.end();
});

app.get('/monitor/:uuid', (req, res) => {

  prefil = edit.PrefillPourEdit(req.params.uuid)

  res.render('oid', { 
    layout: false,
    uuid_pre: req.params.uuid,
    description_pre : prefil.description,
    ip_pre : prefil.ip,
    oid1_pre : prefil.oid1,
    oid2_pre : prefil.oid2,
    oid3_pre : prefil.oid3
    })
});

app.get('/monitor/:uuid/oid1', (req, res) => {
  oid = monitoring.prefil_oid_1(req.params.uuid)

  monitoring.getdata(req.params.uuid)


  res.render('oid', { 
    layout: false,
    uuid_pre: req.params.uuid
    })
});

app.get('/monitor/:uuid/oid2', (req, res) => {
  oid = monitoring.prefil_oid_2(req.params.uuid)


  res.render('oid', { 
    layout: false,
    uuid_pre: req.params.uuid
    })
});

app.get('/monitor/:uuid/oid3', (req, res) => {
  oid = monitoring.prefil_oid_3(req.params.uuid)


  res.render('oid', { 
    layout: false,
    uuid_pre: req.params.uuid
    })
});

app.listen(port,() => {
  console.log("Server up and running")
  });