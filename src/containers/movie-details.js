import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieById, addMovieToFav, removeMovieFromFav } from '../actions';

import MovieFull from '../components/movie-full';
import LoadingIndicator from '../components/loading-indicator';

class MovieDetailsPage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchMovieById(this.props.params.id));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      this.props.dispatch(fetchMovieById(nextProps.params.id));
    }
  }

  onFavAdd = (movie) => {
    this.props.dispatch(addMovieToFav(movie))
  };

  onFavRemove = (movie) => {
    this.props.dispatch(removeMovieFromFav(movie.id))
  };

  getIsFav() {
    if (this.props.favs.find(fav => fav.id === this.props.currentMovie.id)) {
      return true
    }
    return false;
  }

  render() {
    const { currentMovie, isLoading } = this.props;

    return (
      <div>
        <div style={{ paddingLeft: '250px', paddingRight: '250px', paddingTop: '75px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {isLoading ? <LoadingIndicator /> : null}
          {!isLoading && currentMovie ? <MovieFull movie={currentMovie} onFavAdd={this.onFavAdd} isFav={this.getIsFav()} onFavRemove={this.onFavRemove} /> : null}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    currentMovie: state.movies.currentMovie,
    isLoading: state.movies.isFetchingCurrent,
    favs: state.movies.favMovies
  }
);

export default connect(mapStateToProps)(MovieDetailsPage);