import React, { Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Featured.css';

class Fixture extends Component {

  render() {
    return(
      <div>
        <h3>{this.props.fixture.localTeam.name} vs {this.props.fixture.visitorTeam.name}</h3>
        <p>{this.props.fixture.scores.localteam_score} - {this.props.fixture.scores.visitorteam_score}</p>
      </div>
    )
  }

}
export default withStyles(s)(Fixture);
