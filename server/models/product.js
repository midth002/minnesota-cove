const {Schema, model} = require('mongoose');

const lodgeSchema = new Schema({
    productId: {
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

});

const Product = model('Product', productSchema);

module.exports = Product;