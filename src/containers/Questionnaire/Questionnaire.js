import React from 'react'
import {withRouter} from "react-router-dom"

import "./Questionnaire.scss"

class Questionnaire extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currQuestion: 0,
      userAnswer: []
    }
  }

  answerClickedHandler = (ansId) => {
    const nextQuestion = this.state.currQuestion + 1
    const answer = [...this.state.userAnswer, ansId]
    if (this.state.currQuestion < this.props.questions.length) {
      this.setState({currQuestion: nextQuestion, userAnswer: answer})
    } else {
      // this.setState({userAnswer: answer})
    }
  }

  renderQuestions = () => {
    return (
      <React.Fragment>
        <div className="question">
          <div className="question__text">{this.props.questions[this.state.currQuestion].question}</div>
          <div className="question__count">
            <span>Question {this.state.currQuestion + 1}</span>/{this.props.questions.length}
          </div>
        </div>
        <div className="answer-options">
          {this.props.questions[this.state.currQuestion].answer_options.map((option, index) => {
            return <button key={index} onClick={() => this.answerClickedHandler(index)}>{option}</button>
          })}
        </div>
      </React.Fragment>
    ) 
  }

  render() {
    console.log(this.state)
    return (
      <div className="Questionnaire">
        <div className="card">
          {this.props.questions.length !== 0 ? this.renderQuestions() : null}
        </div>
      </div>
    )
  }
}

export default withRouter(Questionnaire)