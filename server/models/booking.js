const { Schema, model } = require('mongoose');


const bookingSchema = new Schema (
    {
       
        description: {
            type: String, 
            maxlength: 500 
        },
        checkIn: {
            type: Date, 
            default: Date.now,
        }, 
        checkOut: {
            type: Date, 
            default: Date.now,
        }, 
        paymentDate: {
                type: Date, 
                default: Date.now,
        },
        customer: [{
            type: Schema.Types.ObjectId,
            ref: 'customer'
        }],
        lodge: [{
            type: Schema.Types.ObjectId,
            ref: 'lodge'
        }],
        pet: {
            type: Boolean, 
            default: false
        },
       
    },
   
);

const Booking = model('booking', bookingSchema);

module.exports = Booking;