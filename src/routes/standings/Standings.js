import React, {Component} from 'react'
import StandingsComponent from '../../components/Standings'

export default class StandingsContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {standings: this.props.standings};
   }

  render() {
    var standings = this.state.standings.map(standing =>
        <StandingsComponent key={standing.position} standings={standing} />
    );

    return (
      <table>
        <tbody>
        <tr>
          <th>#</th>
          <th>Team Name</th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GD</th>
          <th>Pts</th>
        </tr>
          {standings}
        </tbody>
      </table>
    )
  }

}
