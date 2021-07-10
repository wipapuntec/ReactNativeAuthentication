import {all, fork} from 'redux-saga/effects';

import authSagas from './auth/saga';
import userSagas from './user/saga';

export default function* rootSaga() {
  yield all([...authSagas, ...userSagas].map(fork));
}
