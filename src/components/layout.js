import React from 'react';
import Navbar from './top-navigation';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
