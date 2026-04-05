// Mirrors ci_snow: src/api/hooks/index.ts  (adapted — no Redux, uses useReducer)
import { useReducer } from 'react'
import { ActionType } from '../action_types/form'
import { submit } from '../actions'

const initialState = {
  submitting: false,
  submitComplete: false,
  error: '',
}

function formReducer(state, action) {
  switch (action.type) {
    case ActionType.SUBMITTING:
      return { ...state, submitting: true, error: '' }
    case ActionType.SUBMIT_SUCCESS:
      return { ...state, submitting: false, submitComplete: true }
    case ActionType.SUBMIT_ERROR:
      return { ...state, submitting: false, error: action.error }
    default:
      return state
  }
}

/**
 * Custom hook — wraps the submit action and exposes state.
 * Usage: const { submitting, submitComplete, error, submitForm } = useFormSubmit()
 */
export function useFormSubmit() {
  const [state, dispatch] = useReducer(formReducer, initialState)

  const submitForm = (formFields) => submit(formFields, dispatch)

  return { ...state, submitForm }
}
