import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

function Movies() {
    const movies = useSelector(state => state.movies)
    let dispatch = useDispatch()
    const addToFavorites = (id) => {
        dispatch({type: 'ADD_FAVORITES', payload: id})
    }
    return (
        <ul className="movies">
            {movies.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem addToFavorites={addToFavorites} {...movie} />
                </li>
            ))}
        </ul>
    );
}


export default Movies;