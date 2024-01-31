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
    {name: 'Whole Goose', category: categories[0], price: 5.95},
    {name: 'Whole Chicken', category: categories[0], price: 6.95},
    {name: 'Whole Duck', category: categories[0], price: 3.95},
    {name: 'Fresh Plums', category: categories[1], price: 14.95},
    {name: 'Fresh Apples', category: categories[1], price: 13.95},
    {name: 'Fresh Peaches', category: categories[1], price: 25.95},
    {name: 'Shitake', category: categories[2], price: 1.95},
    {name: 'Oysters', category: categories[2], price: 4.95},
    {name: 'Chicken Eggs', category: categories[3], price: 3.95},
    {name: 'Quail Eggs', category: categories[3], price: 7.95},
    {name: 'Thyme', category: categories[4], price: 1.95},
    {name: 'Rosemary', category: categories[4], price: 2.95},
    {name: 'Sage', category: categories[4], price: 3.95},
    {name: 'Herb Pot', category: categories[5], price: 1.95},
    {name: 'Flower Pot', category: categories[5], price: 0.95},
    {name: 'Peach Wood', category: categories[6], price: 0.95},
    {name: 'Apple Wood', category: categories[6], price: 0.95},
  ]);

  console.log(items)

  process.exit();

})();