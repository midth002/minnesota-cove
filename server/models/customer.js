const {Schema, model} = require('mongoose');

const customerSchema = new Schema({
   
    firstName: {
        type: String,
        required: true,
        trim: true,
      },
        lastName: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
      },

});

const Customer = model('Customer', customerSchema);

module.exports = Customer;