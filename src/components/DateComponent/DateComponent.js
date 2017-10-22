import React, {Component} from 'react';
import Link from '../Link';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DateComponent.css';

class DateComponent extends Component {
    render() {
      return (
          <Link className={s.fixtureLink} to={"/fixtures/"+this.props.date} key={this.props.date}>
            <span className={s.day}>{this.props.dayNumber}</span> {this.props.month}
            <span className={s.sm}> {this.props.dayName}</span>
          </Link>
      )
    }
}

export default withStyles(s)(DateComponent);
