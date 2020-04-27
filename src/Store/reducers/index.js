import { combineReducers } from 'redux';

import makesReducer from '../reducers/makesReducer'
import modelsReducer from '../reducers/modelsReducer'

const reducers = combineReducers({
  makesReducer,
  modelsReducer
});

export default reducers;