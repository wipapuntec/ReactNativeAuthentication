//@flow
import {Actions} from './action';

type State = {
  modalAction: ?ModalAction,
  modalError: ?boolean,
};

type ModalAction = {
  icon: ?string,
  detail: ?string,
  action: ?any,
  isVisible: ?boolean,
};

const initialState = {
  modalAction: {
    icon: null,
    detail: null,
    action: null,
    isVisible: false,
  },
  modalError: false,
};

type Action = {type: string, payload: any};

const reducer = (
  state: State = initialState,
  {type, payload}: Action,
): State => {
  switch (type) {
    case Actions.SET_SHOW_MODAL_ACTION:
      return {
        ...state,
        modalAction: {
          icon: payload.icon,
          detail: payload.detail,
          action: payload.action,
          isVisible: payload.isVisible,
        },
      };
    case Actions.SET_HIDE_MODAL_ACTION:
      return initialState;

    case Actions.SET_HIDE_MODAL:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
