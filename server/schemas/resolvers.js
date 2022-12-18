const Customer = require("../models/customer");

const resolvers = {
Query: {
    allCustomers: async() => {
        return await Customer.find({});
    }
}



}

module.exports = resolvers;