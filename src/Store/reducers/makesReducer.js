import { GET_MAKES } from '../actions/types';

const initialState = {
  makes: [],
  loading: true,
  error: ''
}

const makesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAKES:
      return { ...state, makes: action.makes, loading: action.loading }
    default:
      return state;
  }
}

export default makesReducer