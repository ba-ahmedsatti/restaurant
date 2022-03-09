const express = require('express');
const app = express();
const port = 8002;

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/menu', (req, res) => {
  const menus = [
    { name: 'burger', price: 49, image: 'menu.jpg' },
    { name: 'salad', price: 39, image: 'menu1.jpg' },
    { name: 'shrimp', price: 30, image: 'menu3.jpg' },
    { name: 'pasta', price: 40, image: 'menu4.jpg' },
    { name: 'steak', price: 38, image: 'menu6.jpg' },
    { name: 'pizza', price: 45, image: 'menu7.jpg' },
    { name: 'fish', price: 33,image: 'menu8.jpg' },
    { name: 'ribeye', price: 46, image: 'menu9.jpg' }
  ];
  res.render('menu', { menus });
});

app.get('/home', (req, res) => {
  const home = {name: 'hero', image: 'hero.jpg'}
  res.render('home', {home});
});

app.get('/about', (req, res) => {
  const abouts = [
    {name: 'food', image: 'food.jpg'},
    {name: 'food', image: 'food1.jpg'},
    {name: 'food', image: 'food2.jpg'},
    {name: 'food', image: 'food3.jpg'}
];
  res.render('about', {abouts});
});

app.get('/reservation', (req, res) => {
  const reservation = 'reservartion page';
  res.render('reservation', {reservation});
});

app.get('/contact', (req, res) => {
  const contact = 'contact page';
  res.render('contact', {contact});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});