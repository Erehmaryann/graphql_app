const { UserList, MovieList } = require("../FakeData");

// All the fuctions that are going to return data in the frontend
const resolvers = {
    // the root query is the starting point of the graphql query
    Query: {
        // USER RESOLVER
        // resolver func for all fields inside the Query
        users: () => {
            // return your data
            return UserList;
        },
        // resolver func accepts two arguments: the parent and the args
        // If you don't want to use the parent, you can replace it with an underscore
        user: (_, args) => {
            // return the user that matches the number value of the id
            return UserList.find(user => user.id === Number(args.id));
        },

        // MOVIE RESOLVER
        movies: () => {
            return MovieList;
        },
        movie: (_, args) => {
            return MovieList.find(movie => movie.name === args.name);
        },
    },
    // the user type
    User: {
        // resolver func for the favoriteMovies field
        favoriteMovies: () => {
            // movies that are produced between 2000 to 2015
            return MovieList.filter(movie => movie.yearOfProduction >= 2000 && movie.yearOfProduction <= 2015);
        }
    },
    // the root Mutation
    Mutation: {
        // resolver func for the createUser field
        createUser: (_, args) => {
            // create a new user
            const user = args.input;
            // the id of the last user in the list
            const lastId = UserList[UserList.length - 1].id;
            // add 1 to the last id to get the new id
            user.id = lastId + 1;
            // add the new user to the list
            UserList.push(user);
            // return the new user
            return user;
        },
        // resolver func for the updateUsername field
        updateUsername: (_, args) => {
            // destructure the input and get the id and newUsername
            const { id, newUsername } = args.input;
            // initialize the userUpdated variable
            let userUpdated;
            // loop through the list of users
            UserList.forEach(user => {
                // if the id matches the id of the user
                if (user.id === Number(id)) {
                    // update the username of the user
                    user.username = newUsername;
                    // set the userUpdated variable to the updated user
                    userUpdated = user;
                }
            }
            );
            // return the updated user
            return userUpdated;
        }
    }
};

module.exports = { resolvers };