import { ActionTypeAuth } from '../ActionType';

function authUserReducer(authUser = null, action = {}) {
  switch (action.type) {
    case ActionTypeAuth.SET_AUTH_USER:
      return action.payload.authUser;
    case ActionTypeAuth.UNSET_AUTH_USER:
      return null;
    default:
      return authUser;
  }
}

export default authUserReducer;
