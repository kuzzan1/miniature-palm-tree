import React, { Component } from 'react';
import Fixture from '../Fixture';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Fixtures.css';

class Fixtures extends Component {
    render() {
        var fixtures = this.props.fixtures.map(fixture =>
             <Fixture key={fixture.id} fixture={fixture}/>
        );

        return (
            <table className={s.table}>
              <tbody className={s.textCenter}>              
                {fixtures}
              </tbody>
            </table>
        )
    }
}
export default withStyles(s)(Fixtures);
