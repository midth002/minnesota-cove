const {Customer, Lodge, Product, Booking } = require("../models");

const resolvers = {
Query: {
    allCustomers: async() => {
        return await Customer.find({});
    },
    allLodges: async() => {
        return await Lodge.find({});
    },
    allBookings: async() => {
        return await Booking.find({});
    },
    allProducts: async() => {
        return await Product.find({});
    },
    getOneCustomer: async (parent, {customerId}) => {
        return await Customer.findOne({_id: customerId})
    }, 
    getOneLodge: async (parent, {lodgeId}) => {
        return await Lodge.findOne({_id: lodgeId})
    }, 

}, 

Mutation: {
    createLodge: async(parent, args) => {
        return await Lodge.create(args);
    },
    createCustomer: async(parent, args) => {
        return await Customer.create(args);
    },
    createProduct: async(parent, args) => {
        return await Product.create(args);
    },
    createBooking: async(parent, args) => {
        return await Booking.create(args);
    },
}



}

module.exports = resolvers;