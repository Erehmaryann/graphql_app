import React, { useState } from 'react';
import {
    useQuery,
    gql,
    useLazyQuery
} from "@apollo/client";

const QUERY_ALL_USERS = gql`
    query GetAllUsers {
        users {
            id
            name
            age
            username
            nationality
        }
    }
`;

const QUERY_ALL_MOVIES = gql`
    query GetAllMovies {
        movies {
            name
        }
    }
`;

const QUERY_MOVIE_BY_NAME = gql`
    query Movie($name: String!){
        movie(name: $name){
            name
            yearOfProduction
        }
    }
`;

const DisplayData = () => {
    const [movieSearched, setMovieSearched] = useState("");

    const { data, loading } = useQuery(QUERY_ALL_USERS);
    const { data: movieData } = useQuery(QUERY_ALL_MOVIES);
    // fetch data base on an event happening.
    const [fetchMovie, { data: movieSearchedData, error: movieSearchedDataError }] = useLazyQuery(QUERY_MOVIE_BY_NAME);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            {data?.users?.map(user => (
                <div key={user.id}>
                    <h1>Name: {user.name}</h1>
                    <p>Age: {user.age}</p>
                    <p>Username: {user.username}</p>
                    <p>Nationality: {user.nationality}</p>
                </div>
            ))}

            {movieData?.movies?.map((movie, idx) => (
                <div key={idx}>
                    <h1>Movie Name: {movie.name}</h1>
                </div>
            ))}
            <div>
                <input type="text" placeholder="Interstellar..." onChange={e => setMovieSearched(e.target.value)} />
                <button onClick={() => fetchMovie({
                    variables: {
                        name: movieSearched
                    }
                })}>fetch movie</button>
                <p>
                    {
                        movieSearchedData && (
                            <div>
                                <h1>Movie Name: {movieSearchedData.movie.name} </h1>
                                <h1>Year Of Production: {movieSearchedData.movie.yearOfProduction} </h1>
                            </div>
                        )
                    }
                    {movieSearchedDataError && (<h1>There was an error fetching the movie</h1>)}
                </p>
            </div>
        </div>
    );
};

export default DisplayData;