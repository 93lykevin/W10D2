import React from 'react';

class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount(){
    this.id = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.id);
  }

  tick() {
    // console.log(this.state.date)
    this.setState({ date: new Date()});
  }

  render() {
    return (
      <div >
        <h1> 🕒 Clock 🕒 </h1>
        <div className="clock-element">
          <p>
            <span>Date:</span>
            <span className="day"> {this.state.date.toDateString()} </span>
          </p>
          <p>
            <span>Time:</span>
            <span className="time"> {this.state.date.toLocaleTimeString()} </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Clock;