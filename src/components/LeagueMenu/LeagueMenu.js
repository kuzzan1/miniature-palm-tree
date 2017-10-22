import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LeagueMenu.css';
import Link from '../Link';

class LeagueMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {leagues: []};
  }

  async componentDidMount() {
    const json = await fetch('http://localhost:8080/data/leagues')
    .then((resp) => {
      return resp.json();
    }).then((json) => {
      return json;
    });
    this.setState({leagues: json})
  }


  render () {
    var leagues = this.state.leagues.map(league =>
        <li>
          <Link to={"/standings/"+league.current_season_id} key={league.id}>
              {league.name}
          </Link>
        </li>
    );

    return (
      <ul className={s.left}>
        {leagues}
      </ul>
    )
  }
}
export default withStyles(s)(LeagueMenu);
