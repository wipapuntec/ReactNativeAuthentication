import {call, put, takeLatest, select} from 'redux-saga/effects';
import {Actions, checkAccountSuccess} from './action';
import {dispatch, goBack, navigate} from '../../utils/RootNavigation';
import {CommonActions} from '@react-navigation/native';
import {setShowModalAction} from '../modal/action';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import {
  Actions as Action,
  setAccessToken,
  setEmpId,
  setConsent,
  setForceChangePin,
  setForceChangePassword,
  setUserInfo,
  setAllowFaceAndTouchIdSuccess,
} from '../user/action';
import AsyncStorage from '@react-native-community/async-storage';

// check account [set user/update firebase token]--> isForceChangePassword? --> isForceChangePin? --> device เคย allow Face/TouchId? --> consent? --> หน้า login ผ่าน Pin เพื่อเข้าสู่ระบบ

//กรอก username/password เช็ค account กับ api
function* checkAccount(action) {
  const {username, password} = action.payload;
  const response = {
    username: username,
    password: password,
    empId: '123456789',
    accessToken: '987654321',
    isForceChangePassword: true,
    isForceChangePin: true,
    consent: true,
  };
  yield put(checkAccountSuccess(response));
  yield put(setAccessToken(response.accessToken));
  yield put(setEmpId(response.empId));
  yield put(setConsent(response.consent));
  yield put(setForceChangePin(response.isForceChangePin));
  yield put(setForceChangePassword(response.setForceChangePassword));

  // userInfo
  yield put(setUserInfo(response.accessToken, response.empId));

  console.log('username/password use when call api :: ', username, password);

  if (response.isForceChangePassword) {
    navigate('ChangePasswordScreen');
  } else {
    if (response.isForceChangePin) {
      navigate('CreateWithPinScreen');
    } else {
      ////storage allow faceId in cookie
      const checkStatusAllowFaceAndTouchId = yield AsyncStorage.getItem(
        response.empId,
      );

      if (checkStatusAllowFaceAndTouchId !== null) {
        if (checkStatusAllowFaceAndTouchId === 'true') {
          yield put(setAllowFaceAndTouchIdSuccess(true));
        } else {
          yield put(setAllowFaceAndTouchIdSuccess(false));
        }

        if (response.consent) {
          dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'ConsentScreen'}],
            }),
          );
        } else {
          navigate('SettingStack', {
            screen: 'SettingScreen',
            initial: true,
          });
        }
      } else {
        let isSupport = false;
        try {
          yield FingerprintScanner.isSensorAvailable();
          isSupport = true;
        } catch (error) {
          isSupport = false;
        }

        if (isSupport) {
          navigate('AllowFaceIDScreen');
        } else {
          navigate('LoginWithPinScreen');
        }
      }
    }
  }
}

// isForceChangePassword --> isForceChangePin? --> device เคย allow Face/TouchId? --> consent? --> หน้า login ผ่าน Pin เพื่อเข้าสู่ระบบ
function* callChangePassword(action) {
  const {oldPass, newPass, fromSetting} = action.payload;
  const {language} = yield select(state => state.auth);

  console.log('oldPass/newPass  use when call api :: ', oldPass, newPass);

  if (fromSetting) {
    // มาจากเมนู Setting
    yield put(
      setShowModalAction(
        'sucesss',
        language === 'th'
          ? 'เปลี่ยน Password สำเร็จ'
          : 'Change Password is success.',
        () => {
          navigate('SettingStack', {
            screen: 'SettingScreen',
            initial: true,
          });
        },
        true,
      ),
    );
  } else {
    const response = {
      username: 'usernameJa',
      password: 'passwordJa',
      empId: '123456789',
      accessToken: '987654321',
      isForceChangePassword: false,
      isForceChangePin: true,
      consent: true,
    };
    yield put(checkAccountSuccess(response));
    yield put(setForceChangePassword(response.isForceChangePassword)); //false เพราะเปลี่ยน Pass แล้ว

    if (response.isForceChangePin) {
      navigate('CreateWithPinScreen');
    } else {
      ////storage allow faceId in cookie
      const checkStatusAllowFaceAndTouchId = yield AsyncStorage.getItem(
        response.empId,
      );

      if (checkStatusAllowFaceAndTouchId !== null) {
        if (checkStatusAllowFaceAndTouchId === 'true') {
          yield put(setAllowFaceAndTouchIdSuccess(true));
        } else {
          yield put(setAllowFaceAndTouchIdSuccess(false));
        }

        if (response.consent) {
          dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'ConsentScreen'}],
            }),
          );
        } else {
          navigate('SettingStack', {
            screen: 'SettingScreen',
            initial: true,
          });
        }
      } else {
        let isSupport = false;
        try {
          yield FingerprintScanner.isSensorAvailable();
          isSupport = true;
        } catch (error) {
          isSupport = false;
        }

        if (isSupport) {
          navigate('AllowFaceIDScreen');
        } else {
          navigate('LoginWithPinScreen');
        }
      }
    }
  }
}

// isForceChangePin --> device เคย allow Face/TouchId? --> consent? --> หน้า login ผ่าน Pin เพื่อเข้าสู่ระบบ
function* callCreatePinSuccess(action) {
  const {pinCode, confirmPin, fromSetting} = action.payload;
  const {language} = yield select(state => state.auth);
  if (fromSetting) {
    //มาจากเมนู setting
    if (pinCode === confirmPin) {
      yield put(
        setShowModalAction(
          'success',
          language === 'th' ? 'เปลี่ยน PIN สำเร็จ' : 'Change PIN is success.',
          () => {
            navigate('SettingStack', {
              screen: 'SettingScreen',
              initial: true,
            });
          },
          true,
        ),
      );
    } else {
      yield put(
        setShowModalAction(
          'error',
          language === 'th' ? 'ยืนยัน PIN ไม่ถูกต้อง' : 'PIN is not match.',
          () => {
            navigate('SettingStack', {
              screen: 'ChangePinScreen',
              initial: true,
              params: {
                mode:
                  language === 'th' ? 'ใส่รหัส PIN ใหม่' : 'Input new PIN code',
              },
            });
          },
          true,
        ),
      );
    }
  } else {
    if (pinCode === confirmPin) {
      const response = {
        username: 'usernameJa',
        password: 'passwordJa',
        empId: '123456789',
        accessToken: '987654321',
        isForceChangePassword: false,
        isForceChangePin: false,
        consent: true,
      };
      yield put(checkAccountSuccess(response));
      yield put(setForceChangePin(response.isForceChangePin));

      ////storage allow faceId in cookie
      const checkStatusAllowFaceAndTouchId = yield AsyncStorage.getItem(
        response.empId,
      );

      if (checkStatusAllowFaceAndTouchId !== null) {
        if (checkStatusAllowFaceAndTouchId === 'true') {
          yield put(setAllowFaceAndTouchIdSuccess(true));
        } else {
          yield put(setAllowFaceAndTouchIdSuccess(false));
        }

        if (response.consent) {
          dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'ConsentScreen'}],
            }),
          );
        } else {
          navigate('SettingStack', {
            screen: 'SettingScreen',
            initial: true,
          });
        }
      } else {
        let isSupport = false;
        try {
          yield FingerprintScanner.isSensorAvailable();
          isSupport = true;
        } catch (error) {
          isSupport = false;
        }

        if (isSupport) {
          navigate('AllowFaceIDScreen');
        } else {
          navigate('LoginWithPinScreen');
        }
      }
      // FingerprintScanner.isSensorAvailable()
      //   .then(async () => {
      //     await navigate('AllowFaceIDScreen');
      //   })
      //   //Call the error method
      //   .catch(navigate('ConsentScreen'));
    } else {
      yield put(
        setShowModalAction(
          'error',
          language === 'th' ? 'ยืนยัน PIN ไม่ถูกต้อง' : 'PIN is not match.',
          () => {
            dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: 'CreateWithPinScreen'}],
              }),
            );
          },
          true,
        ),
      );
    }
  }
}

// allow Face/TouchId --> consent? --> หน้า login ผ่าน Pin เพื่อเข้าสู่ระบบ
function* callAllowFaceAndTouchID(action) {
  const {allowFaceAndTouch, fromSetting} = action.payload;

  yield put(setAllowFaceAndTouchIdSuccess(allowFaceAndTouch));

  //set in storage (allow faceId/Touch Id)in cookie :: ใช้ empId ในการ get ดู
  const {empId} = yield select(state => state.user);
  yield AsyncStorage.setItem(empId, allowFaceAndTouch.toString());

  if (fromSetting) {
    //จากเมนู setting
    navigate('SettingStack', {
      screen: 'SettingScreen',
      initial: true,
    });
  } else {
    const response = {
      username: 'usernameJa',
      password: 'passwordJa',
      empId: '123456789',
      accessToken: '987654321',
      isForceChangePassword: false,
      isForceChangePin: false,
      consent: true,
    };
    yield put(checkAccountSuccess(response));

    if (response.consent) {
      dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'ConsentScreen'}],
        }),
      );
    } else {
      navigate('LoginWithPinScreen');
    }
  }
}

//consent? --> หน้า login ผ่าน Pin เพื่อเข้าสู่ระบบ
function* callUpdateFlagConsent() {
  const response = {
    username: 'usernameJa',
    password: 'passwordJa',
    empId: '123456789',
    accessToken: '987654321',
    isForceChangePassword: false,
    isForceChangePin: false,
    consent: false,
  };
  yield put(checkAccountSuccess(response));

  yield put(setConsent(response.consent));

  navigate('SettingStack', {
    screen: 'SettingScreen',
    initial: true,
  });
}

//หน้า login ผ่าน Pin เพื่อเข้าสู่ระบบ [กรอก PIN] --> set user ใหม่
function* callCheckPin(action) {
  const {pinCode, fromSetting} = action.payload;
  const {language} = yield select(state => state.auth);
  const {accessToken, empId} = yield select(state => state.user);

  console.log('pinCode :: ', pinCode, fromSetting);
  if (fromSetting) {
    //จากเมนู setting
    navigate('SettingStack', {
      screen: 'ChangePinScreen',
      initial: true,
      params: {
        mode: language === 'th' ? 'ใส่รหัส PIN ใหม่' : 'Input new PIN code',
      },
    });
  } else {
    // userInfo
    yield put(setUserInfo(accessToken, empId));

    navigate('SettingStack', {
      screen: 'SettingScreen',
      initial: true,
    });
  }
}

//หน้า login ผ่าน Pin เพื่อเข้าสู่ระบบ [FACE ID/TOUCH ID]  --> set user ใหม่
function* callCheckFaceAndTouchID() {
  const {accessToken, empId} = yield select(state => state.user);
  yield put(setUserInfo(accessToken, empId));

  navigate('SettingStack', {
    screen: 'SettingScreen',
    initial: true,
  });
}

//watch
export function* watchCheckAccount() {
  yield takeLatest(Actions.CHECK_ACCOUNT_REQUEST, checkAccount);
}
export function* watchChangePassword() {
  yield takeLatest(Actions.CHANGE_PASSWORD, callChangePassword);
}
export function* watchCreatePinSuccess() {
  yield takeLatest(Actions.CREATE_PIN, callCreatePinSuccess);
}
export function* watchAllowFaceAndTouchID() {
  //Action จาก user
  yield takeLatest(Action.SET_ALLOW_FACEID_TOUCHID, callAllowFaceAndTouchID);
}
export function* watchCheckPin() {
  yield takeLatest(Actions.CHECK_PIN, callCheckPin);
}
export function* watchCheckFaceAndTouchID() {
  yield takeLatest(
    Actions.CHECK_FACEID_TOUCHID_SUCCESS,
    callCheckFaceAndTouchID,
  );
}
export function* watchUpdateFlagConsent() {
  yield takeLatest(Actions.UPDATE_FLAG_CONSENT, callUpdateFlagConsent);
}

export default [
  watchCheckAccount,
  watchChangePassword,
  watchCreatePinSuccess,
  watchAllowFaceAndTouchID,
  watchCheckPin,
  watchCheckFaceAndTouchID,
  watchUpdateFlagConsent,
];
