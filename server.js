const express = require('express');
const path = require('path');
const { port } = require('./config.json');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use('',express.static(path.join(__dirname, 'public')));


app.route('/dashboard').get((req, res) => {
    res.render('dashboard');//irá renderizar o arquivo menu.ejs
  }).post((req, res) => {
    console.log('processing...')//aguardando renderizar o arquivo
    res.send('processing...')
  });

app.route('/commands').get((req, res) => {
    res.render('commands');//irá renderizar o arquivo menu.ejs
  }).post((req, res) => {
    console.log('processing...')//aguardando renderizar o arquivo
    res.send('processing...')
  });  

app.route('/updates').get((req, res) => {
    res.render('updates');//irá renderizar o arquivo menu.ejs
  }).post((req, res) => {
    console.log('processing...')//aguardando renderizar o arquivo
    res.send('processing...')
  }); 
  
app.route('/404').get((req, res) => {
    res.render('404');//irá renderizar o arquivo menu.ejs
  }).post((req, res) => {
    console.log('processing...')//aguardando renderizar o arquivo
    res.send('processing...')
  });  
  

app.get('/', (request, response) => {
 let html = 'index';
  response.render(html);//renderizando a pagina padrão index.ejs
});


app.listen(port, () => console.log(`App listening at http://localhost:${port}`));