const { Schema, model } = require('mongoose');


const bookingSchema = new Schema (
    {
        checkIn: {
            type: Date, 
            default: Date.now,
            required: true
        }, 
        checkOut: {
            type: Date, 
            default: Date.now,
            required: true
        }, 
        paymentDate: {
                type: Date, 
                default: Date.now,
                required: true
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

    });

const Booking = model('booking', bookingSchema);

module.exports = Booking;