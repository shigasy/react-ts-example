import React, { Component } from 'react';

const LIMIT = 20;

interface TimeState {
  timerLeft: number;
}

class Timer extends Component<{}, TimeState> {
  timerId?: NodeJS.Timer;

  constructor(props: {}) {
    super(props);
    this.state = { timerLeft: LIMIT };
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000);
  }

  componentDidUpdate() {
    const { timerLeft } = this.state;
    if (timerLeft === 0) {
      this.reset();
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId as NodeJS.Timer);
  }

  tick = () => {
    this.setState(prevState => ({ timerLeft: prevState.timerLeft - 1 }));
  };

  reset = () => {
    this.setState({ timerLeft: LIMIT });
  };

  render() {
    const { timerLeft } = this.state;

    return (
      <div>
        <h2>{timerLeft}</h2>
        <button type="button" onClick={this.reset}>
          reset
        </button>
      </div>
    );
  }
}
export default Timer;
