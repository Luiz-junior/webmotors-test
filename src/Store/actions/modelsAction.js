import api from '../../Services/api';

import { GET_MAKES, ERROR } from './types';

export const getModels = (makeID) => {
  return async dispatch => {
    const res = await api.get(`/model?MakeID=${makeID}`)

    try {
      dispatch({
        type: GET_MAKES,
        models: res.data,
        loading: false
      })
    } catch (error) {
      dispatch({ type: ERROR, errorStatus: error, loading: false })
    }
  }
}