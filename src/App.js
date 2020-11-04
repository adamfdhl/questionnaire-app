import React from "react"
import Slide from "react-reveal/Slide"
import {connect} from "react-redux"
import {BrowserRouter, Route} from "react-router-dom"
import * as actions from "./store/actions"
import Home from "./containers/Home/Home"
import Questionnaire from "./containers/Questionnaire/Questionnaire"
import Score from "./containers/Score/Score"
import Ladderboard from "./containers/Ladderboard/Ladderboard"

import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchQuestions()
  }

  render() {
    return (
      <BrowserRouter>
        <Slide left>
          <div className="App">
            <Route path="/ladderboard" exact component={Ladderboard} />
            <Route path="/score" exact component={() => <Score {...this.props} />} />
            <Route path="/questionnaire" exact component={() => <Questionnaire {...this.props} />} />
            <Route path="/" exact component={() => <Home {...this.props} />} />
          </div>
        </Slide>
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
    updateUserAnswer: (userAnswer) => dispatch(actions.updateUserAnswer(userAnswer)),
    updateUserScore: (score) => dispatch(actions.updateUserScore(score))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
