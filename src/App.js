import React from "react"
import axios from "axios"
import {BrowserRouter, Route} from "react-router-dom"
import Home from "./containers/Home/Home"
import Questionnaire from "./containers/Questionnaire/Questionnaire"

import './App.css';

const ENDPOINT_URL = "https://questionnarie-app-api.herokuapp.com"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    axios.get(`${ENDPOINT_URL}/questionnaires`)
      .then(response => {
        this.setState({ questions: response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/questionnaire" exact component={() => <Questionnaire {...this.state} />} />
          <Route path="/" exact component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
