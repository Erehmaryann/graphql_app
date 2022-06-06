const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favoriteMovies: [Movie]
    }
    
    type Movie {
        id: ID!
        name: String!
        yearOfProduction: Int!
        isInTheaters: Boolean!
    }

    type Query {
        users: UserResult
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }
    
    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = CANADA
    }
    
    input UpdateUsernameInput {
        id: ID!
        newUsername: String!
    }
    
    type Mutation {
        createUser(input: CreateUserInput!): User
        updateUsername(input: UpdateUsernameInput!): User
        deleteUser(id: ID!): User
    }
    
    enum Nationality {
        CANADA
        GERMANY
        CHINA
        NIGERIA
        BRAZIL
    } 
    
    type UsersSuccessfulResult {
        users: [User!]!
    }
    
    type UsersErrorResult {
        message: String! 
    }
     
    union UserResult = UsersSuccessfulResult | UsersErrorResult
`;

module.exports = { typeDefs };