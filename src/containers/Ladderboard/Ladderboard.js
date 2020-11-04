import React from 'react'
import axios from "axios"

import TrophyImage from "../../assets/images/trophy.jpg"
import "./Ladderboard.scss"

const ENDPOINT_URL = "https://questionnarie-app-api.herokuapp.com"

class Ladderboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
    this.renderTable = this.renderTable.bind(this)
    // this.detailUserHandler = this.detailUserHandler.bind(this)
  }

  componentDidMount() {
    axios
      .get(`${ENDPOINT_URL}/users`)
      .then(response => {
        this.setState({users: response.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  detailUserHandler = (userId) => {
    this.props.history.push(`/detail-user/${userId}`)
  }

  renderTable() {
    return this.state.users
          .sort((a, b) => b.total_point - a.total_point)
          .map((user, idx) => {
            return (
              <tr key={idx} className="table-item">
                <td><span>{idx + 1}</span></td>
                <td className="username" onClick={() => this.detailUserHandler(user._id)}>{user.username}</td>
                <td>{user.total_point}</td>
              </tr>
            )
          })
  }

  render() {
    return (
      <div className="Ladderboard">
        <div className="card">
          <div className="ladder-header">
            <h1>Ladderboard</h1>
            <img src={TrophyImage} alt="trophy" className="trophy-img" />
          </div>
          <div className="ladder-table">
            <table>
              <tr className="table-header">
                <th>Rank</th>
                <th>Username</th>
                <th>Score</th>
              </tr>
              {this.renderTable()}
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Ladderboard