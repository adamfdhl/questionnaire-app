import React from 'react'
import axios from "axios"

import "./Score.scss"

const ENDPOINT_URL = "https://questionnarie-app-api.herokuapp.com"

class Score extends React.Component {
  constructor(props) {
    super(props)
    this.countTotalScore = this.countTotalScore.bind(this)
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
    const dataUsername = {
      username: this.props.user.username
    }
    const dataUserAnswer = {

    }
    axios.all([
      axios.post(`${ENDPOINT_URL}/users/add`, dataUsername),
      
    ])
  }

  render() {
    console.log(this.props)
    return (
      <div className="Score">
        {this.props.user.totalScore === 0 ? (
          <h1>You already answered all the questions. Click reveal score button to see your score</h1>
        ) : (
          <h1>You answerd {this.props.user.totalScore} out of 10 questions correctly!</h1>
        )}
        <button onClick={this.countTotalScore}>Reveal Score</button>
        <button onClick={this.submitDataHandler}>Go to ladderboard</button>
      </div>
    )
  }
}

export default Score
