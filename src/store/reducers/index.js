import { combineReducers } from "redux"
import questionsReducer from "./questionsReducer"
import userReducer from "./userReducer"

const allReducers = combineReducers({
  questions: questionsReducer,
  user: userReducer
})

export default allReducers