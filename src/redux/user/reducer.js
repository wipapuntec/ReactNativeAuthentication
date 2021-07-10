//@flow

import {Actions} from './action';

type State = {
  userInfo: Object,
  empId: string,
  accessToken: string,
  isForceChangePassword: boolean,
  isForceChangePin: boolean,
  consent: boolean,
  allowFaceAndTouch: boolean,
};

const initialState = {
  userInfo: {},
  empId: '',
  accessToken: '',
  isForceChangePassword: false,
  isForceChangePin: false,
  consent: false,
  allowFaceAndTouch: false,
};

type Action = {type: string, payload: any};

const reducer = (
  state: State = initialState,
  {type, payload}: Action,
): State => {
  switch (type) {
    case Actions.SET_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...payload,
        },
      };

    case Actions.SET_EMP_ID:
      return {
        ...state,
        empId: payload.empId,
      };

    case Actions.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: payload.accessToken,
      };

    case Actions.SET_FORCE_CHANGE_PASSWORD:
      return {
        ...state,
        isForceChangePassword: payload.isForceChangePassword,
      };

    case Actions.SET_FORCE_CHANGE_PIN:
      return {
        ...state,
        isForceChangePin: payload.isForceChangePin,
      };

    case Actions.SET_ALLOW_FACEID_TOUCHID_SUCCESS:
      return {
        ...state,
        allowFaceAndTouch: payload.allowFaceAndTouch,
      };

    case Actions.SET_CONSENT:
      return {
        ...state,
        consent: payload.consent,
      };

    case Actions.LOGOUT:
      return state;

    default:
      return state;
  }
};

export default reducer;
