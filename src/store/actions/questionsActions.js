import axios from "axios"
import * as actionTypes from "./actionTypes"

const ENDPOINT_URL = "https://questionnarie-app-api.herokuapp.com"

export const fetchQuestions = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.FETCH_QUESTIONS_START
    })
    axios.get(`${ENDPOINT_URL}/questionnaires`)
      .then(response => {
        dispatch({
          type: actionTypes.FETCH_QUESTIONS_SUCCESS,
          payload: response.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}