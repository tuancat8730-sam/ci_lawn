// Mirrors ci_snow: src/api/actions/index.ts
import axios from 'axios'
import { ActionType } from '../action_types/form'

// Vite exposes env vars via import.meta.env.VITE_*
const form_key = import.meta.env.VITE_FORM_KEY ?? ''

const SUBMIT_URL = `https://api.capitalirrigation.com/api/snow_submit_form/?${form_key}`

/**
 * Submit the contact/quote form to the Capital Irrigation API.
 * @param {object} form - FormFields payload
 * @param {function} dispatch - local dispatch(action) from useReducer
 */
export const submit = async (form, dispatch) => {
  dispatch({ type: ActionType.SUBMITTING })

  try {
    await axios.post(SUBMIT_URL, form)
    dispatch({ type: ActionType.SUBMIT_SUCCESS })
  } catch (err) {
    dispatch({
      type: ActionType.SUBMIT_ERROR,
      error:
        'Sorry! There was a problem processing the form. Please give us a call at 780-989-3987 or email us at lawncare@capitalirrigation.com',
    })
  }
}
