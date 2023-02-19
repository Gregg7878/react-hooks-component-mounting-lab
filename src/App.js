import React, { Component } from 'react';

import Timer from './Timer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timers: [],
    };
    this.handleAddTimer = this.handleAddTimer.bind(this);
  }

  componentDidMount() {
    this.handleAddTimer();
  }

  handleAddTimer() {
    const { timers } = this.state;
    const newTimer = {
      id: Math.floor(Math.random() * 10000),
    };
    this.setState({
      timers: [...timers, newTimer],
    });
  }


  // No need to modify anything in render or the class methods below
  // Unless, of course, you're curious about how it all works
  render() {
    const { timers } = this.state;
    return (
      <div className="App">
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add New Timer</button>
        {timers.map(timer => (
          <Timer key={timer.id} />
        ))}
        <div className="TimerGrid">
          {this.renderTimers()}
        </div>

      </div>
    );
  }

  // returns array of components written in JSX, mapped from this.state.timerIDs
  renderTimers = () => this.state.timerIDs.map(id => {
    return <Timer key={id} id={id} removeTimer={this.removeTimer} />
  })

  // adds a random number for timer ID
  handleAddTimer = () => {
    this.setState(prevState => ({
      timerIDs: [...prevState.timerIDs, Math.floor(Math.random()*1000)]
    }))
  }

  // removeTimer updates state, removing any timer that matches the provided author
  removeTimer = id => {
    this.setState(prevState => ({
      timerIDs: prevState.timerIDs.filter(timer_id => timer_id !== id)
    }))
  }


}

export default App;
