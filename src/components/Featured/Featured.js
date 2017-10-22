import React, { Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Featured.css';
import Fixture from './Fixture';

class Featured extends Component {

  constructor(props) {
    super(props);
    this.state = {games: []};
  }

  async componentDidMount() {
    const json = await fetch('http://localhost:8080/data/featured/games')
    .then((resp) => {
      return resp.json();
    }).then((json) => {
      return json;
    });
    this.setState({games: json})
  }

  render() {
    var games = this.state.games.map(game =>
        <Fixture fixture={game} />
    );
    return (
      <div>
        <h2>Today's featured Games</h2>
        {games}
      </div>
    )
  }
}
export default withStyles(s)(Featured);
