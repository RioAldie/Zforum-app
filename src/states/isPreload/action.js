import api from '../../utils/api';
import { ActionTypePreload } from '../ActionType';
import setAuthUserActionCreator from '../auth/action';

function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionTypePreload.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}
function asyncPreloadProcess() {
  return async (dispatch) => {
    try {
      // preload process
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      // fallback process
      dispatch(setAuthUserActionCreator(null));
    } finally {
      // end preload process
      dispatch(setIsPreloadActionCreator(false));
    }
  };
}
export default {
  setIsPreloadActionCreator,
  asyncPreloadProcess,
};
