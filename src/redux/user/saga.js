import {takeLatest, put} from 'redux-saga/effects';
import {Actions, setUserInfoSuccess} from './action';
import {dispatch} from '../../utils/RootNavigation';
import {CommonActions} from '@react-navigation/native';

function* callSetUserInfo(action) {
  const {accessToken, empId} = action.payload;
  console.log('accessToken, empId :: ', accessToken, empId);
  const response = {
    firestname: 'Firstnameja',
    lastname: 'Lastnameja',
  };
  yield put(setUserInfoSuccess(response));
}

function* callLogout() {
  dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: 'LoginScreen'}],
    }),
  );
}

export function* watchSetUserInfo() {
  yield takeLatest(Actions.SET_USER_INFO, callSetUserInfo);
}

export function* watchLogout() {
  yield takeLatest(Actions.LOGOUT, callLogout);
}

export default [watchSetUserInfo, watchLogout];
