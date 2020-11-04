import * as actionTypes from "../actions/actionTypes"

const initState = {
  username: null,
  userAnswer: [],
  currQuestion: 1,
  totalScore: 0,
  selectedUser: null
}

const questionsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USERNAME:
      return {
        ...state,
        username: action.username
      }
    case actionTypes.UPDATE_USER_ANSWER:
      return {
        ...state,
        userAnswer: [...state.userAnswer, action.userAnswer],
        currQuestion: state.currQuestion + 1
      }
    case actionTypes.UPDATE_USER_SCORE:
      return {
        ...state,
        totalScore: action.score
      }
    case actionTypes.UPDATE_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.userId
      }
    default:
      return state
  }
}

export default questionsReducer