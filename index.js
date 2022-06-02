const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");

// Define an instance of ApolloServer
// Apolloserver takes in two pieces of information
// resolvers are the functions that will be used to resolve the queries
// and typeDefs are the schema that will be used to validate the queries
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server is running on ${url}`);
});