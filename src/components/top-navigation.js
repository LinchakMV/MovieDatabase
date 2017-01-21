import React, {Component} from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Stars from 'material-ui/svg-icons/action/stars';
import { browserHistory } from 'react-router';

const recentsIcon = <Stars />;
const favoritesIcon = <Favorite />;


export default class TopNavigation extends Component {
  render() {
    return (
      <div style={{ position: 'fixed', width: '100%', zIndex: 1 }}>
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={window.location.pathname.includes('favorites') ? 1 : 0}>
            <BottomNavigationItem
              label="Top movies"
              icon={recentsIcon}
              onTouchTap={() => browserHistory.push('/movies')}
            />
            <BottomNavigationItem
              label="Favorites"
              icon={favoritesIcon}
              onTouchTap={() => browserHistory.push('/movies/favorites')}
            />
          </BottomNavigation>
        </Paper>
      </div>
    );
  }
}
