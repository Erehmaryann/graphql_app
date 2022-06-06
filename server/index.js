const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

// Define an instance of ApolloServer
// Apolloserver takes in two pieces of information
// resolvers are the functions that will be used to resolve the queries
// and typeDefs are the schema that will be used to validate the queries
const server = new ApolloServer({
    typeDefs, resolvers, context: () => {
        // access to a user key called name and value Maryann throughout every resolver.
        return { name: "Maryann" };
    }
});

server.listen().then(({ url }) => {
    console.log(`Server is running on ${url}`);
});