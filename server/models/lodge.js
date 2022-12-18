const {Schema, model} = require('mongoose');

const lodgeSchema = new Schema({
    lodgeId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
    title: {
        type: String,
        required: true,
        trim: true,
      },
        description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true
      },
      guests: {
        type: String,
        required: true,
        maxLength: 10
      },
      bed: {
        type: String,
        required: true, 
        maxLength: 10
      },
      features: {
        type: String, 
        required: true
      }


});

const Lodge = model('Lodge', lodgeSchema);

module.exports = Lodge;