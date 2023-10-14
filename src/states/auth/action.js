import api from '../../utils/api';
import { ActionTypeAuth } from '../ActionType';

const setAuthUserActionCreator = (authUser) => {
  return {
    type: ActionTypeAuth.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
};

const unsetAuthUserActionCreator = () => {
  return {
    type: ActionTypeAuth.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
};
function asyncSetAuthUser({ id, password }) {
  return async (dispatch) => {
    try {
      const token = await api.login({ id, password });
      api.putAccessToken(token);
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUnsetAuthUser() {
  return (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    api.putAccessToken('');
  };
}

export default {
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};
