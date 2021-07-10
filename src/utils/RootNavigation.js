import * as React from "react";

export const navigationRef = React.createRef();

export function navigate(name, params) {
  return navigationRef.current?.navigate(name, params);
}

export function goBack() {
  return navigationRef.current?.goBack();
}

export function dispatch(payload) {
  return navigationRef.current?.dispatch(payload);
}
