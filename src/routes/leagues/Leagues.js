import React, {Component} from 'react';
import Leagues from '../../components/Leagues';
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

export default class League extends Component {

  constructor(props) {
	  super(props);
    this.state = {leagues: this.props.leagues, date: this.props.date, subscription: null};
   }
   fetchData(date) {
      if(!this.state.subscription) {
       var sock = new SockJS(window.location.protocol+'//'+window.location.hostname+':8080/gs-guide-websocket');
       var stomp = Stomp.over(sock);
     }
     if(date === new Date().toISOString().slice(0,10)) {
       this.connect(stomp);
     } else if(this.state.subscription) {
       this.state.subscription.unsubscribe();
       this.setState({'subscription': null});
     }
   }
  connect(client) {
     client.connect({}, function(frame) {
       console.log('Connected: ' + frame);
        var subscription = client.subscribe("/topic/greetings", function(msg) {
          var data = JSON.parse(msg.body);
          this.setState({leagues:data});
        }.bind(this));
        this.setState({'subscription': subscription});
     }.bind(this));
  }

  componentDidMount() {
      this.fetchData(this.state.date);
  	}

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({leagues: nextProps.leagues});

  }

    render() {
      return (
        <Leagues leagues={this.state.leagues}/>
      )
    }
}
