export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const REQUEST_GENRES = 'REQUEST_GENRES';
export const RECEIVE_GENRES = 'RECEIVE_GENRES';
export const REQUEST_MOVIE_BY_ID = 'REQUEST_MOVIE_BY_ID';
export const RECEIVE_MOVIE_BY_ID = 'RECEIVE_MOVIE_BY_ID';
export const ADD_MOVIE_TO_FAV = 'ADD_MOVIE_TO_FAV';
export const REMOVE_MOVIE_FROM_FAV = 'REMOVE_MOVIE_FROM_FAV';

const API_URL = 'https://api.themoviedb.org/3/'

function requestMovies() {
  return {
    type: REQUEST_MOVIES,
  };
}

function receiveMovies(json) {
  return {
    type: RECEIVE_MOVIES,
    movies: json.results
  }
}

function requestGenres() {
  return {
    type: REQUEST_GENRES,
  };
}

function receiveGenres(json) {
  return {
    type: RECEIVE_GENRES,
    genres: json.genres
  };
}

function requestMovieById(id) {
  return {
    type: REQUEST_MOVIE_BY_ID,
    id
  };
}

function receiveMovieById(movie) {
  return {
    type: RECEIVE_MOVIE_BY_ID,
    movie
  };
}


export function addMovieToFav(movie) {
  return {
    type: ADD_MOVIE_TO_FAV,
    movie
  };
}

export function removeMovieFromFav(id) {
  return {
    type: REMOVE_MOVIE_FROM_FAV,
    id
  };
}

export const fetchMovieById = id => dispatch => {
  dispatch(requestMovieById(id));
  return fetch(`${API_URL}movie/${id}?api_key=6b30c447f707a2c83d1261a13b406b9d`)
    .then(response => response.json())
    .then(json => dispatch(receiveMovieById(json)))

};

export const fetchGenres = () => (dispatch) => {
  dispatch(requestGenres());
  fetch(`${API_URL}genre/movie/list?api_key=6b30c447f707a2c83d1261a13b406b9d`)
    .then(response => response.json())
    .then(json => dispatch(receiveGenres(json)))
};

export const fetchMovies = () => (dispatch) => {
  dispatch(requestMovies());
  dispatch(requestGenres());
  return fetch(`${API_URL}movie/popular?api_key=6b30c447f707a2c83d1261a13b406b9d`)
    .then(response => response.json())
    .then(json => dispatch(receiveMovies(json)))
    .then(() => fetch(`${API_URL}genre/movie/list?api_key=6b30c447f707a2c83d1261a13b406b9d`))
    .then(response => response.json())
    .then(json => dispatch(receiveGenres(json)))
};
