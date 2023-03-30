import React, { Component } from "react";
import "./App.css";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <h1>Cobain</h1>
          <Timer start="0" />
        </header>
      </div>
    );
  }
}

export default App;
