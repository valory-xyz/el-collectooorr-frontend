import { apiTypes, syncTypes } from './_types';

const initialState = {
  account: null,
  chainId: null,
  balance: null,
  errorMessage: null,
};

export default (state = initialState, action) => {
  const { data } = action;

  switch (action.type) {
    case apiTypes.GET_API: {
      return { ...state, data };
    }
    case syncTypes.SET_CHAIND_ID:
    case syncTypes.SET_ACCOUNT:
    case syncTypes.SET_BALANCE:
    case syncTypes.SET_LOGIN_ERROR:
    case syncTypes.SET_STORE_STATE: {
      return { ...state, ...data };
    }

    case syncTypes.SET_LOGOUT: {
      return { ...initialState };
    }


    default:
      return state;
  }
};
