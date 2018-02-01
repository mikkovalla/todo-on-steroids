import { ADD_REMINDER, DELETE_REMINDER } from '../constants'

export const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text
  }
  console.log('action happening', action)
  return action
}

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log('action delete', action)
  return action
}
