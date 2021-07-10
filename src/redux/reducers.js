import {combineReducers} from 'redux';
import userReducer from './user/reducer';
import authReducer from './auth/reducer';
import modalReducer from './modal/reducer';

const appReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  user: userReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
