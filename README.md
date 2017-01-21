## DEMO APP (lynchak-mv-movies-db.surge.sh)

# How to start developing

To start developing please use next commands:
```
npm install
npm start
```

## How to create production build
Please run `npm run build`

# Project structure
This project uses standard redux approach to build simple redux-based applications.

You can find root component `index.js`, reducers in `reduces/index.js`, actions in `actions/index.js`, containers in `containers/*.js` and all resusable components in `components/*`

## Available project actions
```
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const REQUEST_GENRES = 'REQUEST_GENRES';
export const RECEIVE_GENRES = 'RECEIVE_GENRES';
export const REQUEST_MOVIE_BY_ID = 'REQUEST_MOVIE_BY_ID';
export const RECEIVE_MOVIE_BY_ID = 'RECEIVE_MOVIE_BY_ID';
export const ADD_MOVIE_TO_FAV = 'ADD_MOVIE_TO_FAV';
export const REMOVE_MOVIE_FROM_FAV = 'REMOVE_MOVIE_FROM_FAV';
```