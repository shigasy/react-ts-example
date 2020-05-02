import React, { Component, SyntheticEvent } from 'react';

interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
  }

  increment = (e: SyntheticEvent) => {
    e.preventDefault(); // オリジナルの挙動を抑制
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>{count}</h1>
        <button type="button" onClick={this.increment}>
          カウントアップ
        </button>
      </div>
    );
  }
}

export default Counter;
