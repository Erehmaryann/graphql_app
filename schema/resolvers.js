const { UserList } = require("../FakeData");

// All the fuctions that are going to return data in the frontend
const resolvers = {
    // the highest level field 
    Query: {
        // resolver func for all fields inside the Query
        users() {
            // return your data
            return UserList;
        }
    }
};

module.exports = { resolvers };