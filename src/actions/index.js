import { ADD_REMINDER } from '../constants'

export const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text
  }
  console.log('action happening', action)
  return action
}