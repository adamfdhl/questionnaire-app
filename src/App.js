import React from "react"
import {connect} from "react-redux"
import {BrowserRouter, Route} from "react-router-dom"
import * as actions from "./store/actions"
import Home from "./containers/Home/Home"
import Questionnaire from "./containers/Questionnaire/Questionnaire"

import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchQuestions()
  }

  render() {
    console.log(this.props)
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/questionnaire" exact component={() => <Questionnaire {...this.props} />} />
          <Route path="/" exact component={() => <Home {...this.props} />} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch(actions.fetchQuestions()),
    updateUsername: (username) => dispatch(actions.updateUsername(username)),
    updateUserAnswer: (userAnswer) => dispatch(actions.updateUserAnswer(userAnswer))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
