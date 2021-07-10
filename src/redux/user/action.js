//@flow

export const Actions = {
  SET_USER_INFO: 'USER@SET_USER_INFO',
  SET_USER_INFO_SUCCESS: 'USER@SET_USER_INFO_SUCCESS',

  SET_EMP_ID: 'USER@SET_EMP_ID',
  SET_ACCESS_TOKEN: 'USER@SET_ACCESS_TOKEN',
  SET_FORCE_CHANGE_PASSWORD: 'USER@SET_FORCE_CHANGE_PASSWORD',
  SET_FORCE_CHANGE_PIN: 'USER@SET_FORCE_CHANGE_PIN',
  SET_CONSENT: 'USER@SET_CONSENT',

  SET_ALLOW_FACEID_TOUCHID: 'USER@SET_ALLOW_FACEID_TOUCHID',
  SET_ALLOW_FACEID_TOUCHID_SUCCESS: 'USER@SET_ALLOW_FACEID_TOUCHID_SUCCESS',

  LOGOUT: 'USER@LOGOUT',
};

export type Action =
  | {
      type: 'USER@SET_USER_INFO',
      payload: {accessToken: string, empId: string},
    }
  | {
      type: 'USER@SET_EMP_ID',
      payload: {empId: string},
    }
  | {
      type: 'USER@SET_ACCESS_TOKEN',
      payload: {accessToken: string},
    }
  | {
      type: 'USER@SET_FORCE_CHANGE_PASSWORD',
      payload: {isForceChangePassword: boolean},
    }
  | {
      type: 'USER@SET_FORCE_CHANGE_PIN',
      payload: {isForceChangePin: boolean},
    }
  | {
      type: 'USER@SET_ALLOW_FACEID_TOUCHID',
      payload: {allowFaceAndTouch: boolean, fromSetting: boolean},
    }
  | {
      type: 'USER@SET_ALLOW_FACEID_TOUCHID_SUCCESS',
      payload: {allowFaceAndTouch: boolean},
    }
  | {
      type: 'USER@SET_CONSENT',
      payload: {consent: boolean},
    }
  | {
      type: 'USER@SET_USER_INFO_SUCCESS',
      // payload: any,
      payload: Object,
    };

export const setUserInfo = (accessToken: string, empId: string): Action => ({
  type: Actions.SET_USER_INFO,
  payload: {
    accessToken,
    empId,
  },
});

export const setUserInfoSuccess = (payload: Object): Action => ({
  type: Actions.SET_USER_INFO_SUCCESS,
  payload,
});

export const setAccessToken = (accessToken: string): Action => ({
  type: Actions.SET_ACCESS_TOKEN,
  payload: {accessToken},
});

export const setEmpId = (empId: string): Action => ({
  type: Actions.SET_EMP_ID,
  payload: {empId},
});
export const setForceChangePassword = (
  isForceChangePassword: boolean,
): Action => ({
  type: Actions.SET_FORCE_CHANGE_PASSWORD,
  payload: {
    isForceChangePassword,
  },
});

export const setForceChangePin = (isForceChangePin: boolean): Action => ({
  type: Actions.SET_FORCE_CHANGE_PIN,
  payload: {
    isForceChangePin,
  },
});

export const setAllowFaceAndTouchId = (
  allowFaceAndTouch: boolean,
  fromSetting: boolean,
): Action => ({
  type: Actions.SET_ALLOW_FACEID_TOUCHID,
  payload: {allowFaceAndTouch, fromSetting},
});

export const setAllowFaceAndTouchIdSuccess = (
  allowFaceAndTouch: boolean,
): Action => ({
  type: Actions.SET_ALLOW_FACEID_TOUCHID_SUCCESS,
  payload: {allowFaceAndTouch},
});

export const setConsent = (consent: boolean): Action => ({
  type: Actions.SET_CONSENT,
  payload: {
    consent,
  },
});

export const logout = () => ({
  type: Actions.LOGOUT,
});
