const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 8080;
const url = 'mongodb://localhost:27017';
const urlencodedParser = bodyParser.urlencoded({ extended: false });


app.set('view engine', 'pug');

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use(express.static('public'));

app.use(cors({
  origin: '*'
}));



const menus = [
  { id: 1, name: 'burger', price: 49, image: 'menu.jpg' },
  { id: 2, name: 'salad', price: 39, image: 'menu1.jpg' },
  { id: 3, name: 'shrimp', price: 30, image: 'menu3.jpg' },
  { id: 4, name: 'pasta', price: 40, image: 'menu4.jpg' },
  { id: 5, name: 'steak', price: 38, image: 'menu6.jpg' },
  { id: 6, name: 'pizza', price: 45, image: 'menu7.jpg' },
  { id: 7, name: 'fish', price: 33,image: 'menu8.jpg' },
  { id: 8, name: 'ribeye', price: 46, image: 'menu9.jpg' },
]

app.get('/', (req, res) => {
  MongoClient.connect(url, function(err, client) {
    const db = client.db('menus');
    const collection = db.collection('menu');
    collection.find({}).toArray((error, documents) => {
      client.close();
      res.render('menu', {menus: documents});
    })
  });
});


app.get('/menu/:menuId', (req, res) => {
  res.render('menus', { menu: documents.find(menu => menu.id === req.params.menuId)})
});


app.get('/home', (req, res) => {
  const home = {name: 'hero', image: 'hero.jpg'}
  res.render('home', {home});
});

const abouts = [
  {name: 'food', image: 'food.jpg'},
  {name: 'food', image: 'food1.jpg'},
  {name: 'food', image: 'food2.jpg'},
  {name: 'food', image: 'food3.jpg'}
];

  
app.get('/', (req, res) => {
  MongoClient.connect(url, function(err, client) {
    const db = client.db('abouts');
    const collection = db.collection('about');
    collection.find({}).toArray((error, documents) => {
      client.close();
      res.render('about', {abouts: documents});
    })
  });
});


app.get('/reservation', (req, res) => {
  const reservation = 'reservartion';
  res.render('reservation');
});

app.get('/reserve', (req, res) => {
  const reserve = 'reserve';
  res.render('reserve', {reserve});
});

app.get('/contact', (req, res) => {
  const contact = 'contact';
  res.render('contact', {contact});
});

app.use((req, res, next) => {
  res.status(404);
  res.render('404');
  return;
});