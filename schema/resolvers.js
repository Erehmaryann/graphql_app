const { UserList, MovieList } = require("../FakeData");

// All the fuctions that are going to return data in the frontend
const resolvers = {
    // the highest level field 
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
    // the user field
    User: {
        // resolver func for the favoriteMovies field
        favoriteMovies: () => {
            // movies that are produced between 2000 to 2015
            return MovieList.filter(movie => movie.yearOfProduction >= 2000 && movie.yearOfProduction <= 2015);
        }
    }
};

module.exports = { resolvers };