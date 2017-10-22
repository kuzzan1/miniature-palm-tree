import React, { Component } from 'react';
import Team from '../../components/Team';
export default class TeamContainer extends Component {
    render() {
        return (
          <div>
              <Team team={this.props.team}  />
          </div>
        )
    }
}
