import { combineReducers } from 'redux';
import { basketReducer } from './basketReducer';
import { filterReducer } from './filterReducer';
import authReducer from './authReducer';
export default combineReducers({ basketReducer, authReducer, filterReducer });
