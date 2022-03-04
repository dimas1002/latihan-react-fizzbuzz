import React, { Component } from "react";

const Header = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "red" }}>React FizzBuzz</h1>
      <p>
        Counting Incrementlly, Replacing any number that is divisible by three
        with the word "fizz",any number that is divisible by five with the word
        "buzz", and any number that is divisible by fifteen with the word
        "fizzbuzz".
      </p>
      <br></br>
      <hr></hr>
    </div>
  );
};

class Action extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  handleDecrement = () => {
    if (this.state.count > 1) {
      this.setState((prevState) => ({ count: prevState.count - 1 }));
    }
  };

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", color: "blue" }}>
        <h2>
          {this.state.count % 15 === 0
            ? "fizzbuzz"
            : this.state.count % 5 === 0
            ? "buzz"
            : this.state.count % 3 === 0
            ? "fizz"
            : this.state.count}
        </h2>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
      </div>
    );
  }
}

export default App;
