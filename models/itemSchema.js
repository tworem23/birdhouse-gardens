const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  image: {type : String},
  price: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = itemSchema;