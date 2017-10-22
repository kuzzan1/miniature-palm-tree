import React, { Component } from 'react'
import Event from '../Event'
import Link from '../Link';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Fixture.css';


class Fixture extends Component {

  constructor(props) {
    super(props);
    this.state = {openEvents: false};
  }
  toggleEvents() {
    this.setState({
      openEvents: !this.state.openEvents
    });
  }
  render() {
    var holder = this.props.fixture.events.map(event => <Event key={event.id} event={event} /> );
    var events = this.state.openEvents ? holder : null;
    //<td>{events}</td>
      return (
        <tr onClick={this.toggleEvents.bind(this)}>
          <td className={s.time}>{this.props.fixture.time}</td>
          <td className={s.textGreen}><i>{this.props.fixture.currentMinute}</i></td>
          <td className={s.textRight}><Link to={"/team/"+this.props.fixture.localTeam.id} id={this.props.fixture.localTeam.id}>{this.props.fixture.localTeam.name}</Link></td>
          <td className={s.score}>{this.props.fixture.scores.localTeam_Score} - {this.props.fixture.scores.visitorTeam_score}</td>
          <td className={s.textLeft}>
          <Link to={"/team/"+this.props.fixture.visitorTeam.id} id={this.props.fixture.visitorTeam.id}>
          {this.props.fixture.visitorTeam.name}</Link></td>
        </tr>
      )
  }
}
export default withStyles(s)(Fixture);
