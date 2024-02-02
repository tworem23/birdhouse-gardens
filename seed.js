require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Poultry', sortOrder: 10},
    {name: 'Fruit', sortOrder: 20},
    {name: 'Mushrooms', sortOrder: 30},
    {name: 'Eggs', sortOrder: 40},
    {name: 'Herb Seedlings', sortOrder: 50},
    {name: 'Blended Pots', sortOrder: 60},
    {name: 'Smoking Woods', sortOrder: 70},
  ]);

  await Item.deleteMany({}); 
  const items = await Item.create([
    {name: 'Goose per pound', category: categories[0], image: 'https://i.imgur.com/3zbOroH.jpeg', price: 5.99},
    {name: 'Chicken per pound', category: categories[0], image: 'https://i.imgur.com/XBqe1Wz.jpeg', price: 3.99},
    {name: 'Duck per pound', category: categories[0], image: 'https://i.imgur.com/9P5ZOyP.jpeg', price: 6.99},
    {name: 'Bushel of Plums', category: categories[1], image: 'https://i.imgur.com/DmKdHrI.jpeg', price: 23.99},
    {name: 'Bushel of Apples', category: categories[1], image: 'https://i.imgur.com/12yadAJ.jpeg', price: 16.99},
    {name: 'Bushel of Peaches', category: categories[1], image: 'https://i.imgur.com/S8jCrUe.jpeg', price: 25.99},
    {name: 'Shitake per Pound', category: categories[2], image: 'https://i.imgur.com/Cg5pIuh.jpeg', price: 12.99},
    {name: 'Oysters per Pound', category: categories[2], image: 'https://i.imgur.com/Ozr2sr5.jpeg', price: 14.99},
    {name: 'One Dozen Chicken Eggs', category: categories[3], image: 'https://i.imgur.com/7stKYRZ.jpeg', price: 3.99},
    {name: 'Two Dozen Quail Eggs', category: categories[3], image: 'https://i.imgur.com/R2xB8Uz.jpeg', price: 12.99},
    {name: 'Thyme per Ounce', category: categories[4], image: 'https://i.imgur.com/DnnvmIv.jpeg', price: 2.99},
    {name: 'Rosemary per Ounce', category: categories[4], image: 'https://i.imgur.com/u6iNAvE.jpeg', price: 2.99},
    {name: 'Sage per Ounce', category: categories[4], image: 'https://i.imgur.com/EB6mh5l.jpeg', price: 1.99},
    {name: 'Herb Pot', category: categories[5], image: 'https://i.imgur.com/AVUzn3e.jpeg', price: 10.99},
    {name: 'Flower Pot', category: categories[5], image: 'https://i.imgur.com/QjuKFBp.jpeg', price: 14.99},
    {name: 'Bundle of Peach Wood', category: categories[6], image: 'https://i.imgur.com/z8ys4Bz.jpeg', price: 9.99},
    {name: 'Bundle of Apple Wood', category: categories[6], image: 'https://i.imgur.com/joFITS4.jpeg', price: 9.99},
  ]);

  console.log(items)

  process.exit();

})();