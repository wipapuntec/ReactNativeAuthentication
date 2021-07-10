//@flow

export const Actions = {
  SET_HIDE_MODAL: 'UTILS@SET_HIDE_MODAL',
  SET_SHOW_MODAL_ACTION: 'UTILS@SET_SHOW_MODAL_ACTION',
  SET_HIDE_MODAL_ACTION: 'UTILS@SET_HIDE_MODAL_ACTION',
};

export type Action = {
  type: 'UTILS@SET_SHOW_MODAL_ACTION',
  payload: {
    icon: ?string,
    detail: ?string,
    action: ?any,
    isVisible: ?boolean,
  },
};

export const setShowModalAction = (
  icon: ?string,
  detail: ?string,
  action: ?any,
  isVisible: ?boolean,
): Action => ({
  type: Actions.SET_SHOW_MODAL_ACTION,
  payload: {
    icon,
    detail,
    action,
    isVisible,
  },
});

export const setHideModalAction = () => ({
  type: Actions.SET_HIDE_MODAL_ACTION,
});

export const hideModal = () => ({
  type: Actions.SET_HIDE_MODAL,
});
