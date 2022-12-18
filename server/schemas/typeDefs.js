const {gql} = require('apollo-server-express');

const typeDefs = gql`

type Customer{
    _id: ID!
    firstName: String!
    lastName: String! 
    email: String!
}

type Lodge{
    _id: ID!
    title: String!
    description: String!
    price: Int!
    guests: String!
    bed: String!
}

type Product{
    _id: ID!
    title: String!
    description: String!
    url: String!
}

type Booking{
    _id: ID!
    checkIn: String!
    checkOut: String!
    paymentDate: String!
    customer: [Customer]
    lodge: [Lodge]
    pet: Boolean
}

input customerBooking {
    _id: ID
}

input lodgePick {
    _id: ID
}

type Query {
    allCustomers: [Customer]!
    allLodges: [Lodge]!
    allBookings: [Booking]!
    allProducts: [Product]!
    getOneCustomer: (customerId: ID): Customer!
    getOneLodge: (lodgeId: ID): Lodge!
}

type Mutation {
    createLodge(title: String!, description: String!, price: Int!, guests: String!, bed: String!): Lodge
    createCustomer(firstName: String!, lastName: String!, email: String!): Customer
    createProduct(title: String!, description: String!, url: String!): Product
    createBooking(checkIn: String!, checkOut: String!, paymentDate: String!, customer: [customerBooking], lodge:[lodgePick], pet: Boolean): Booking
}
`;

module.exports = typeDefs;