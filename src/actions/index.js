import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants'

export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    text,
    dueDate
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

export const clearReminders = () => {
  return {
    type: CLEAR_REMINDERS
  }
}