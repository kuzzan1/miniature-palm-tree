import React, {Component} from 'react'
import Link from '../Link';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Standings.css';

class Standings extends Component {
  render() {
    return (
      <tr>
          <td>{this.props.standings.position}</td>
          <td><Link to={"/team/"+this.props.standings.team_id} key={this.props.standings.team_id}> {this.props.standings.team_name}</Link></td>
          <td>{this.props.standings.overall.games_played}</td>
          <td>{this.props.standings.overall.won}</td>
          <td>{this.props.standings.overall.draw}</td>
          <td>{this.props.standings.overall.lost}</td>
          <td>{this.props.standings.overall.goals_scored}</td>
          <td>{this.props.standings.points}</td>
      </tr>
    )
  }
}
export default withStyles(s)(Standings);
