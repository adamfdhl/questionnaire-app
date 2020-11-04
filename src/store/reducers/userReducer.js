import * as actionTypes from "../actions/actionTypes"

const initState = {
  username: null,
  userAnswer: [],
  currQuestion: 0
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
    default:
      return state
  }
}

export default questionsReducer