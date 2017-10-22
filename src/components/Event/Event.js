import React, {Component} from 'react'

export default class Event extends Component {
  render() {
    return (
      <td>
      <td>{this.props.event.type}</td>
      <td>{this.props.event.minute}</td>
      <td>{this.props.event.player_name}</td>
      <td>{this.props.event.related_player_name}</td>
      </td>
    )
  }
}
