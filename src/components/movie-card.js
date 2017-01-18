import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router';

class MovieCard extends React.Component {
  getGenres(movie, genres = []) {
    if (movie.genres) {
      return movie.genres.map(genre => genre.name);
    }
    return movie.genre_ids
      .map(genre => genres.find(g => g.id === genre ))
      .map(genre => genre.name);
  }

  onDetailsClick = () => browserHistory.push(`/movies/${this.props.movie.id}`);
  onAddToFav = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.onFavAdd(this.props.movie)
  };

  onRemoveFromFav = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.onFavRemove(this.props.movie);
  };

  render() {
    const { movie, genres, isFav } = this.props;
    return (
      <Card style={{ width: '280px', cursor: 'pointer' }} onTouchTap={this.onDetailsClick}>
        <CardMedia>
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}/>
        </CardMedia>
        <CardTitle title={movie.title} subtitle={this.getGenres(movie, genres).join(', ')} />
        <CardText>
          {movie.overview}
        </CardText>
        <CardActions>
          <FlatButton label={isFav ? "Remove from favorites" : "Add to favorites"} onTouchTap={!isFav ? this.onAddToFav : this.onRemoveFromFav } />
        </CardActions>
      </Card>
    );
  }
}

export default MovieCard;