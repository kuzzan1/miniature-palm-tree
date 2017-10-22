import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Player.css';

class Player extends Component {
    render() {
      return (
        <tr>
          <td>{this.props.player.fullname}</td>
          <td><img src={this.props.player.image_path}></img></td>
        </tr>
      )
    }
}
export default withStyles(s)(Player);
