import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  
  state: {
    name: "Sukar",
    age: 7
  };


componentDidMount(){
  console.log('Fateen');
}

  serachComponentHandler = () => {
    //console.log(this.state.age);
    //setState({ name: "Mom", age: this.state.age + 1 });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.serachComponentHandler}>Click Me !</button>
        <Person name="Fateen" age="25">
          Welcome To Me .
        </Person>
        <Person name="Amal" age="45">
          Welcome To Me .
        </Person>
        <Person name="Hadeel" age="30">
          Welcome To Me .
        </Person>
      </div>
    );
  }
}

export default App;
