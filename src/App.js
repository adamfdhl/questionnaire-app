import React from "react"
import {BrowserRouter, Route} from "react-router-dom"
import Home from "./containers/Home/Home"

import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
