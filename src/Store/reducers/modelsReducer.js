import { GET_MODELS, GET_MAKES } from '../actions/types';

const initialState = {
  models: [],
  loading: true,
  error: ''
}

const modelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MODELS:
      return { ...state, models: action.models, loading: action.loading }
    default:
      return state;
  }
}

export default modelsReducer