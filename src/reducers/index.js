import { combineReducers } from 'redux'
import {
  REQUEST_MOVIES,
  RECEIVE_MOVIES,
  REQUEST_GENRES,
  RECEIVE_GENRES,
  REQUEST_MOVIE_BY_ID,
  RECEIVE_MOVIE_BY_ID,
  ADD_MOVIE_TO_FAV,
  REMOVE_MOVIE_FROM_FAV
} from '../actions'


const initialState = {
  isFetchingMovies: false,
  isFetchingGenres: false,
  isFetchingCurrent: false,
  favMovies: [],
  itemsGenres: [],
  itemsMovies: [],
  currentMovie: null
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_MOVIE_FROM_FAV:
      return {
        ...state,
        favMovies: state.favMovies.filter(fav => {
          return fav.id !== action.id;
        })
      };
    case ADD_MOVIE_TO_FAV:
      return {
        ...state,
        favMovies: state.favMovies.concat(action.movie)
      };
    case REQUEST_MOVIE_BY_ID:
      return {
        ...state,
        isFetchingCurrent: true
      };
    case RECEIVE_MOVIE_BY_ID:
      return {
        ...state,
        isFetchingCurrent: false,
        currentMovie: action.movie,
      };
    case REQUEST_GENRES:
      return {
        ...state,
        isFetchingGenres: true
      };
    case RECEIVE_GENRES:
      return {
        ...state,
        isFetchingGenres: false,
        itemsGenres: action.genres,
      };
    case REQUEST_MOVIES:
      return {
        ...state,
        isFetchingMovies: true
      };
    case RECEIVE_MOVIES:
      return {
        ...state,
        isFetchingMovies: false,
        itemsMovies: action.movies
      };
    default:
      return state
  }
};

const rootReducer = combineReducers({
  movies
});

export default rootReducer