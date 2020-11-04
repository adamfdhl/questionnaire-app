import React from 'react'
import {withRouter} from "react-router-dom"

import "./Questionnaire.scss"

class Questionnaire extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currQuestion: 0,
    }
  }

  answerClickedHandler = (ansId) => {
    if (this.props.user.currQuestion < this.props.questions.questions.length) {
      this.props.updateUserAnswer(ansId)
    } else {
      this.props.updateUserAnswer(ansId)
      this.props.history.push("/score")
    }
  }

  renderQuestions = () => {
    return (
      <React.Fragment>
        <div className="question">
          <div className="question__text">{this.props.questions.questions[this.props.user.currQuestion - 1].question}</div>
          <div className="question__count">
            <span>Question {this.props.user.currQuestion}</span>/{this.props.questions.questions.length}
          </div>
        </div>
        <div className="answer-options">
          {this.props.questions.questions[this.props.user.currQuestion - 1].answer_options.map((option, index) => {
            return <button key={index} onClick={() => this.answerClickedHandler(index)}>{option}</button>
          })}
        </div>
      </React.Fragment>
    ) 
  }

  render() {
    return (
      <div className="Questionnaire">
        <div className="card">
          {this.props.questions.questions.length !== 0 ? this.renderQuestions() : null}
        </div>
      </div>
    )
  }
}

export default withRouter(Questionnaire)