import React from 'react';
import Chip from 'material-ui/Chip';
import SvgIconFace from 'material-ui/svg-icons/action/stars';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import Favorite from 'material-ui/svg-icons/action/favorite';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

export default class MovieFull extends React.Component {
  onAddToFav = () => this.props.onFavAdd(this.props.movie);
  onRemoveFromFav = () => this.props.onFavRemove(this.props.movie);

  render() {
    const { movie } = this.props;
    return (
    <div>
      <div style={{ display: 'flex' }}>
        <div>
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}/>
        </div>
        <div style={{ paddingLeft: '25px' }}>
          <h1>
            {movie.title}
            {' '}
            ({(new Date(movie.release_date).getFullYear())})
            <Chip
              style={styles.chip}
            >
              <Avatar color="#444" icon={<SvgIconFace />} />
              {movie.vote_average} / 10
            </Chip>
          </h1>
          <p>{movie.overview}</p>
          <RaisedButton
            label={this.props.isFav ? "Remove from favorites" : "Add to favorites"}
            labelPosition="before"
            primary={true}
            icon={<Favorite />}
            onTouchTap={!this.props.isFav ? this.onAddToFav : this.onRemoveFromFav}
            style={styles.button}
          />
        </div>
      </div>
    </div>
    );
  }
}