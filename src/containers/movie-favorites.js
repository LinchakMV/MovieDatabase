import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addMovieToFav, removeMovieFromFav, fetchGenres } from '../actions';
import MovieCard from '../components/movie-card';
import LoadingIndicator from '../components/loading-indicator';

class MovieFavoritesContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchGenres());
  }

  getIsFav(movie) {
    if (this.props.favs.find(fav => fav.id === movie.id)) {
      return true
    }
    return false;
  }

  onFavAdd = (movie) => {
    this.props.dispatch(addMovieToFav(movie))
  };

  onFavRemove = (movie) => {
    this.props.dispatch(removeMovieFromFav(movie.id))
  };

  render() {
    return (
      <div>
        <div style={{ padding: '75px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {this.props.isLoading ? <LoadingIndicator /> : null}
          {!this.props.isLoading ? this.props.favs.map(movie => {
              return (
                <div style={{ paddingBottom: '10px' }} key={movie.id}>
                  <MovieCard movie={movie} genres={this.props.genres} isFav={this.getIsFav(movie)} onFavAdd={this.onFavAdd} onFavRemove={this.onFavRemove}/>
                </div>
              )
            }) : null}
          {!this.props.favs.length ? <p>No favorite items :(</p> : null}
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    favs: state.movies.favMovies,
    genres: state.movies.itemsGenres,
    isLoading: state.movies.isFetchingGenres
  }
);
export default connect(mapStateToProps)(MovieFavoritesContainer);