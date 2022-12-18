const {gql} = require('apollo-server-express');

const typeDefs = gql`

type Customer{
    _id: ID!
    firstName: String!
    lastName: String! 
    email: String!
}

type Query {
    allCustomers: [Customer]!
}


`;

module.exports = typeDefs;