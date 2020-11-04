import * as actionTypes from "../actions/actionTypes"

const initState = {
  loading: false,
  questions: null
}

const questionsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_QUESTIONS_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_QUESTIONS_SUCCESS:
      return {
        questions: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default questionsReducer