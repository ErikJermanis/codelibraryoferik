import { combineReducers } from 'redux';
import navReducer from './navigation/navReducer';

export default combineReducers({
  nav: navReducer
})