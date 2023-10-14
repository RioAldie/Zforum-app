import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './auth/reducer';
import isPreloadReducer from './isPreload/reducer';
import talkDetailReducer from './threadDetail/reducer';
import talksReducer from './thread/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    talks: talksReducer,
    talkDetail: talkDetailReducer,
  },
});

export default store;
