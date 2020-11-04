import React from 'react'
import axios from "axios"

import "./Score.scss"

const ENDPOINT_URL = "https://questionnarie-app-api.herokuapp.com"

class Score extends React.Component {
  constructor(props) {
    super(props)
    this.countTotalScore = this.countTotalScore.bind(this)
    this.submitDataHandler = this.submitDataHandler.bind(this)
  }

  countTotalScore() {
    const questions = this.props.questions.questions
    const userAnswer = this.props.user.userAnswer
    let count = 0
    for (let i = 0; i < questions.length; i++) {
      if (userAnswer[i] === questions[i].correct_answer_idx) {
        count++
      }
    }
    this.props.updateUserScore(count)
  }

  submitDataHandler() {
    const username = this.props.user.username.username
    const userAnswer = this.props.user.userAnswer
    const totalScore = this.props.user.totalScore
    const data = {
      username, 
      userAnswer,
      totalScore
    }
    axios.post(`${ENDPOINT_URL}/users/answer`, data)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="Score">
        <div className="card">
          {this.props.user.totalScore === 0 ? (
            <React.Fragment>
              <h1>You already answered all the questions. Click reveal score button to see your score</h1>
              <button onClick={this.countTotalScore}>Reveal Score</button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <h1>You answerd {this.props.user.totalScore} out of 10 questions correctly!</h1>
              <button onClick={this.submitDataHandler}>Go to ladderboard</button>
            </React.Fragment>
          )}
        </div>
      </div>
    )
  }
}

export default Score
