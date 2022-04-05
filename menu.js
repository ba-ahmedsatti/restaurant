const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
// delete no use import
// const MongoClient = require('mongodb').MongoClient;

// import mongoose
const mongoose = require('mongoose');
// import menu schema
const Menu = require('./schema/menu.model')

// import About schema
const About = require('./schema/about.model')

const app = express();
const port = 8080;

// set db url, db name food
const DB_URL = 'mongodb://localhost:27017/food';


// connect to mongodb
mongoose.connect(DB_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));


// const DB_URL1 = 'mongodb://localhost:27017/about';

// mongoose.connect(DB_URL1, { useNewUrlParser: true });
// const db1 = mongoose.connection;
// db1.on('error', console.error.bind(console, 'MongoDB connection error'));

const urlencodedParser = bodyParser.urlencoded({ extended: false });


app.set('view engine', 'pug');

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use(express.static('public'));

app.use(cors({
  origin: '*'
}));



// const menus = [
//   { id: 1, name: 'burger', price: 49, image: 'menu.jpg' },
//   { id: 2, name: 'salad', price: 39, image: 'menu1.jpg' },
//   { id: 3, name: 'shrimp', price: 30, image: 'menu3.jpg' },
//   { id: 4, name: 'pasta', price: 40, image: 'menu4.jpg' },
//   { id: 5, name: 'steak', price: 38, image: 'menu6.jpg' },
//   { id: 6, name: 'pizza', price: 45, image: 'menu7.jpg' },
//   { id: 7, name: 'fish', price: 33,image: 'menu8.jpg' },
//   { id: 8, name: 'ribeye', price: 46, image: 'menu9.jpg' },
// ]



// // rewrite '/' route for mongodb example
// app.get('/menu', async (req, res) => {
//   // get all menu data from menus collection
//   const data = await menus.find();
//   res.render('menu', { data })
// });

app.get('/menu', async (req, res) => {
  const menus = await Menu.find();
  res.render('menu', { menus})
});

app.get('/about', async (req, res) => {
  const abouts = await About.find();
  res.render('about', { abouts })
});


app.get('/menu/:menuId', (req, res) => {
  res.render('menus', { menu: documents.find(menu => menu.id === req.params.menuId)})
});


app.get('/home', (req, res) => {
  const home = {name: 'hero', image: 'hero.jpg'}
  res.render('home', {home});
});

// const abouts = [
//   {name: 'food', image: 'food.jpg'},
//   {name: 'food', image: 'food1.jpg'},
//   {name: 'food', image: 'food2.jpg'},
//   {name: 'food', image: 'food3.jpg'}
// ];


// delete redundant route for '/'
// app.get('/', (req, res) => {
//   MongoClient.connect(url, function(err, client) {
//     const db = client.db('abouts');
//     const collection = db.collection('about');
//     collection.find({}).toArray((error, documents) => {
//       client.close();
//       res.render('about', {abouts: documents});
//     })
//   });
// });


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