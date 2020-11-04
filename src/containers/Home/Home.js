import React from 'react'
import {withRouter} from "react-router-dom"
// import axios from 'axios'

import "./Home.scss"

// const ENDPOINT_URL = "https://questionnarie-app-api.herokuapp.com"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
    }
    this.submitUsernameHandler = this.submitUsernameHandler.bind(this)
  }

  submitUsernameHandler(e) {
    e.preventDefault()
    const data = {
      username: this.state.username
    }
    this.props.updateUsername(data)
    this.props.history.push("/questionnaire")
  }

  render() {
    return (
      <div className="Home">
        <h1>Welcome To PopoQuiz</h1>
        <h3>Please write your name down here:</h3>
        <input type="text" placeholder="Username..." value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
        <button type="submit" disabled={this.state.username === ""} onClick={e => this.submitUsernameHandler(e)}>Go!</button>
      </div>
    )
  }
}

export default withRouter(Home)
