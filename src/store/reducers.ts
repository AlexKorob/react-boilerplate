import { combineReducers } from 'redux';
import auth from 'features/auth/redux/authSlice';

export default combineReducers({
  auth,
});
