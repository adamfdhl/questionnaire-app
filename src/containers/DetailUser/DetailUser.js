import React from 'react'
import axios from 'axios'

import "./DetailUser.scss"

const id = window.location.pathname.split("/")[2]
const ENDPOINT_URL = "https://questionnarie-app-api.herokuapp.com"

class DetailUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
    this.renderDetailQuestions = this.renderDetailQuestions.bind(this)
  }

  componentDidMount() {
    axios
      .get(`${ENDPOINT_URL}/users/${id}`)
      .then(response => {
        this.setState({user: response.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  renderDetailQuestions() {
    return (this.props.questions.questions ? (this.props.questions.questions.map((item, idx) => {
      return (
        <div className="question" key={idx}>
          <div style={{
            color: this.state.user.answers[idx] === item.correct_answer_idx ? "darkgreen" : "white",
            fontWeight: "bold",
            float: "right"
          }}>
            {this.state.user.answers[idx] === item.correct_answer_idx ? `CORRECT` : null}
          </div>
          <div className="question-text">{item.question}</div>
          <div className="question-answer">{item.answer_options[this.state.user.answers[idx]]}</div>
        </div>
      )
    })) : null)
  }

  render() {
    return (
      <div className="DetailUser">
        <div className="card">
          {this.state.user ? (
            <React.Fragment>
              <div className="detail-header">
                <h1>Username: {this.state.user.username}</h1>
                <p>Total Score: {this.state.user.total_point}</p>
              </div>
              <div className="detail-questions">
                {this.renderDetailQuestions()}
              </div>
            </React.Fragment>
          ) : null}
        </div>
      </div>
    )
  }
}

export default DetailUser;