const {Schema, model} = require('mongoose');

const lodgeSchema = new Schema({
    
    title: {
        type: String,
        required: true,
        trim: true,
      },
        description: {
        type: String,
        required: true,
      },

      url: {
        type: String, 
        required: true
      }

});

const Product = model('Product', productSchema);

module.exports = Product;