import React, { Component } from 'react';
import Player from '../Player'
import s from './Team.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class Team extends Component {
    render() {
      var players = this.props.team.squad.data.map(player =>
        <Player player={player} />
      )

        return (
          <div className={s.team}>
          <h2 className={s.teamName}>{this.props.team.name}</h2>
              <img src={this.props.team.logo_path} />
              <div>
              <p>Coach</p>
                {this.props.team.coach.fullName}
              </div>
              <table>
                <tbody>
                  <th>Players</th>
                  <th>Img</th>
                  {players}
                </tbody>
              </table>
              <table className={s.venueTable}>
              <tbody>
                <th>Venue</th>
                <th>Location</th>
                <th>Capacity</th>
                <th>Address</th>
                <tr>
                  <td>{this.props.team.venue.name}</td>
                  <td>{this.props.team.venue.city}</td>
                  <td>{this.props.team.venue.capacity}</td>
                  <td>{this.props.team.venue.address}</td>
                </tr>
              </tbody>
              </table>
              <img src={this.props.team.venue.image_path} />
          </div>
        )
    }
}
export default withStyles(s)(Team);
