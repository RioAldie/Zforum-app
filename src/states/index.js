import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import talkDetailReducer from './threadDetail/reducer';
import threadsReducer from './thread/reducer';
import usersReducer from './users/reducer';
import { loadingBarReducer } from 'react-redux-loading-bar';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadsReducer,
    talkDetail: talkDetailReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
