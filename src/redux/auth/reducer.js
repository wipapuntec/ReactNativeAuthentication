//@flow

import {Actions} from './action';
// import type {Action} from './action';

type State = {
  language: string,
  checkAccount: Object, // any???
};

const initialState = {
  language: 'th',
  checkAccount: {},
};

type Action = {type: string, payload: any};

const reducer = (
  state: State = initialState,
  {type, payload}: Action,
): State => {
  switch (type) {
    case Actions.CHECK_ACCOUNT_SUCCESS:
      return {
        ...state,
        checkAccount: {
          ...payload,
        },
      };

    case Actions.CHANGE_LANGUAGE:
      return {
        ...state,
        language: payload.language,
      };

    default:
      return state;
  }
};

export default reducer;
