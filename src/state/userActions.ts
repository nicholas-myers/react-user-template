const login = (dispatch: any) => {
  return dispatch({ type: "LOG_IN" });
};

const logout = (dispatch: any) => {
  return dispatch({ type: "LOG_OUT" });
};

export { login, logout };
