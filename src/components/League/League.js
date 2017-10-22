import React, { Component } from 'react';
import Fixtures from '../Fixtures';
import Link from '../Link';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './League.css';

class League extends Component {
  render() {
      var fixtures = <Fixtures key={this.props.league.id} fixtures={this.props.league.fixtures} />
        return (
          <article id="live">
          <div className={s.panel}>
            <div className={s.panelHeading}>
            <Link className={s.leagueLink} to={"/standings/"+this.props.league.current_season_id} key={this.props.league.current_season_id}>{this.props.league.name}</Link>
            <i className="fa fa-star-o addToFav"></i>
            </div>
            <div className={s.panelBody}>
                {fixtures}
            </div>
          </div>
          </article>
        )
    }
}
export default withStyles(s)(League);
