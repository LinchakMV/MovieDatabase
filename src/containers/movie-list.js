import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMovies, addMovieToFav, removeMovieFromFav } from '../actions';
import MovieCard from '../components/movie-card';
import LoadingIndicator from '../components/loading-indicator';
import TextField from 'material-ui/TextField';

class MovieListContainer extends Component {
  state = {
    search: ''
  };

  componentDidMount() {
    this.props.dispatch(fetchMovies());
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

  onSearch = (e) => {
   this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div>
        <div style={{ paddingTop: '45px', textAlign: 'center' }}>
          <TextField
            type="search"
            floatingLabelText="Search"
            onChange={this.onSearch} style={{ width: '350px' }}
          />
        </div>
        <div style={{ padding: '15px 75px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {this.props.isLoading ? <LoadingIndicator /> : null}
          {!this.props.isLoading ? this.props.movies.filter(movie => movie.title.toLowerCase().includes(this.state.search.toLowerCase())).map(movie => {
            return (
              <div style={{ paddingBottom: '10px' }} key={movie.id}>
                <MovieCard movie={movie} genres={this.props.genres} isFav={this.getIsFav(movie)} onFavAdd={this.onFavAdd} onFavRemove={this.onFavRemove}/>
              </div>
            )
          }) : null}
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    movies: state.movies.itemsMovies,
    genres: state.movies.itemsGenres,
    favs: state.movies.favMovies,
    isLoading: state.movies.isFetchingMovies || state.movies.isFetchingGenres
  }
);
export default connect(mapStateToProps)(MovieListContainer);