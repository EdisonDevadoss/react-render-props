import React, { Component } from "react";
import RenderProps from "./RenderProps";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RenderProps
            render={({ on, toggle }) => {
              return (
                <div>
                  {on && <h1>Show More</h1>}
                  <button onClick={toggle}>Show / Hide </button>
                </div>
              );
            }}
          />
        </header>
      </div>
    );
  }
}

export default App;
