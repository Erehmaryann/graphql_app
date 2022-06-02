const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        nationality: String!
    }

    type Query {
        users: [User!]!
    }
`;