import React, { Component } from 'react';
import './App.css';

import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import MovieDetailsPage from './containers/movie-details';
import MovieListPage from './containers/movie-list';
import MoviewFavoritesPage from './containers/movie-favorites';
import Layout from './components/layout';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider >
        <Router history={browserHistory}>
          <Route path="/" component={Layout}>
            <IndexRedirect to="movies" />
            <Route path="movies" component={MovieListPage} />
            <Route path="movies/favorites" component={MoviewFavoritesPage} />
            <Route path="movies/:id" component={MovieDetailsPage} />
          </Route>
        </Router>
      </MuiThemeProvider>
    );
  }
}
