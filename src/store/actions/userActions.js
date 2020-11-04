// import axios from "axios"
import * as actionTypes from "./actionTypes"

// const ENDPOINT_URL = "https://questionnarie-app-api.herokuapp.com"

export const updateUsername = (username) => ({
  type: actionTypes.UPDATE_USERNAME,
  username
})

export const updateUserAnswer = (userAnswer) => ({
  type: actionTypes.UPDATE_USER_ANSWER,
  userAnswer
})