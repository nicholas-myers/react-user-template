interface UserState {
  isLoggedIn: boolean;
}

const initialState: UserState = {
  isLoggedIn: false,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOG_IN": {
      return { ...state, isLoggedIn: true };
    }
    case "LOG_OUT": {
      return { ...state, isLoggedIn: false };
    }
    default:
      return state;
  }
};
