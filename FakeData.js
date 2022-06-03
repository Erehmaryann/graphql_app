const UserList = [
    {
        id: 1,
        name: "John",
        username: "john",
        age: 20,
        nationality: "CANADA",
        friends: [
            {
                id: 2,
                name: "Maryann",
                username: "dev_ryanne",
                age: 21,
                nationality: "GERMANY"
            },
        ]
    },
    {
        id: 2,
        name: "Maryann",
        username: "dev_ryanne",
        age: 21,
        nationality: "GERMANY"
    },
    {
        id: 3,
        name: "Chibuzor",
        username: "coolbuhzor",
        age: 25,
        nationality: "CHINA",
        friends: [
            {
                id: 5,
                name: "Raphael",
                username: "eddyRaph",
                age: 28,
                nationality: "BRAZIL"
            },
            {
                id: 2,
                name: "Maryann",
                username: "dev_ryanne",
                age: 21,
                nationality: "GERMANY"
            },
        ]
    },
    {
        id: 4,
        name: "Rafe",
        username: "rafe123",
        age: 60,
        nationality: "NIGERIA"
    },
    {
        id: 5,
        name: "Raphael",
        username: "eddyRaph",
        age: 28,
        nationality: "BRAZIL"
    }
];

const MovieList = [
    {
        id: 1,
        name: "Avengers Endgame",
        yearOfProduction: 2019,
        isInTheaters: true,
    },
    {
        id: 2,
        name: "Avengers Infinity War",
        yearOfProduction: 2018,
        isInTheaters: true,
    },
    {
        id: 3,
        name: "Avengers Age of Ultron",
        yearOfProduction: 2015,
        isInTheaters: false,
    },
    {
        id: 4,
        name: "Interstellar",
        yearOfProduction: 2014,
        isInTheaters: true,
    },
    {
        id: 5,
        name: "Inception",
        yearOfProduction: 2010,
        isInTheaters: true,
    }
];

module.exports = { UserList, MovieList };