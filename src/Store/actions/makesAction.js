import api from '../../Services/api';

import { GET_MAKES, ERROR } from './types';

export const getMakes = () => {
  return async dispatch => {
    const res = await api.get(`/make`)

    try {
      dispatch({
        type: GET_MAKES,
        makes: res.data,
        loading: false
      })
    } catch (error) {
      dispatch({ type: ERROR, errorStatus: error, loading: false })
    }
  }
}
