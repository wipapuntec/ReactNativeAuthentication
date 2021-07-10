//@flow

export const Actions = {
  CHECK_ACCOUNT_REQUEST: 'AUTH@CHECK_ACCOUNT_REQUEST',
  CHECK_ACCOUNT_SUCCESS: 'AUTH@CHECK_ACCOUNT_SUCCESS',

  CHANGE_PASSWORD: 'AUTH@CHANGE_PASSWORD',
  CHANGE_PASSWORD_SUCCESS: 'AUTH@CHANGE_PASSWORD_SUCCESS',

  CREATE_PIN: 'AUTH@CREATE_PIN',
  CREATE_PIN_SUCCESS: 'AUTH@CREATE_PIN_SUCCESS',

  CHANGE_LANGUAGE: 'AUTH@CHANGE_LANGUAGE',

  CHECK_PIN: 'AUTH@CHECK_PIN',
  CHECK_PIN_SUCCESS: 'AUTH@CHECK_PIN_SUCCESS',

  CHECK_FACEID_TOUCHID_SUCCESS: 'AUTH@CHECK_FACEID_TOUCHID_SUCCESS',

  UPDATE_FLAG_CONSENT: 'AUTH@UPDATE_FLAG_CONSENT',
};

export type Action =
  | {
      type: 'AUTH@CHECK_ACCOUNT_REQUEST',
      payload: {username: string, password: string},
    }
  | {
      type: 'AUTH@CHECK_ACCOUNT_SUCCESS',
      payload: Object,
    }
  | {
      type: 'AUTH@CHANGE_PASSWORD',
      payload: {oldPass: string, newPass: string, fromSetting: boolean},
    }
  | {
      type: 'AUTH@CREATE_PIN',
      payload: {pinCode: string, confirmPin: string, fromSetting: boolean},
    }
  | {
      type: 'AUTH@CHANGE_LANGUAGE',
      payload: {language: string},
    }
  | {
      type: 'AUTH@CHECK_PIN',
      payload: {pinCode: string, fromSetting: boolean},
    };

export const checkAccount = (username: string, password: string): Action => ({
  type: Actions.CHECK_ACCOUNT_REQUEST,
  payload: {
    username,
    password,
  },
});

export const checkAccountSuccess = (
  // username: string,
  // password: string,
  // empId: string,
  // accessToken: string,
  // isForceChangePassword: boolean,
  // isForceChangePin: boolean,
  // consent: boolean,
  payload: Object,
): Action => ({
  type: Actions.CHECK_ACCOUNT_SUCCESS,
  payload,
  // payload: {
  //   username,
  //   password,
  //   empId,
  //   accessToken,
  //   isForceChangePassword,
  //   isForceChangePin,
  //   consent,
  // },
});

export const changePasswordRequest = (
  oldPass: string,
  newPass: string,
  fromSetting: boolean,
): Action => ({
  type: Actions.CHANGE_PASSWORD,
  payload: {oldPass, newPass, fromSetting},
});

export const changePasswordSuccess = () => ({
  type: Actions.CHANGE_PASSWORD_SUCCESS,
});

export const createPinRequest = (
  pinCode: string,
  confirmPin: string,
  fromSetting: boolean,
): Action => ({
  type: Actions.CREATE_PIN,
  payload: {pinCode, confirmPin, fromSetting},
});

export const createPinSuccess = () => ({
  type: Actions.CREATE_PIN_SUCCESS,
});

export const changeLanguage = (language: string): Action => ({
  type: Actions.CHANGE_LANGUAGE,
  payload: {language},
});

export const checkPin = (pinCode: string, fromSetting: boolean): Action => ({
  type: Actions.CHECK_PIN,
  payload: {pinCode, fromSetting},
});

export const checkPinSuccess = () => ({
  type: Actions.CHECK_PIN_SUCCESS,
});

export const checkFaceAndTouchId = () => ({
  type: Actions.CHECK_FACEID_TOUCHID_SUCCESS,
});

export const updateFlagConsent = () => ({
  type: Actions.UPDATE_FLAG_CONSENT,
});
