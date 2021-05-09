import axios from 'axios';
import { FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE } from './MovieTypes.js';

export const fetchMovie = (query) => {
    return (dispatch) => {
        if (query != undefined) {
            const searchQuery = query;
            dispatch(fetchMovieRequest())
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d8db71435db5c1351861a378abec204a&language=en-US&query=${searchQuery}&page=1&include_adult=false`)
                .then(response => {
                    const movies = response.data.results;
                    console.log(movies);
                    dispatch(fetchMovieSucces(movies))

                })
                .catch(error => {
                    dispatch(fetchMoviefailure(error.message))
                })

        }


    }
}
export const fetchMovieRequest = () => {
    return {
        type: FETCH_MOVIE_REQUEST,
    }
}
export const fetchMovieSucces = (movie) => {
    return {
        type: FETCH_MOVIE_SUCCESS,
        payload: movie
    }
}
export const fetchMoviefailure = (error) => {
    return {
        type: FETCH_MOVIE_FAILURE,
        payload: error,
    }

}
