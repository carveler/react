import counterReducer from './counterReducer';
import toggleReducer from './toggleReducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counterReducer,
  toggleReducer,
});

export default allReducers;
