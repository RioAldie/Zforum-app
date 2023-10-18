import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import threadsReducer from './thread/reducer';
import usersReducer from './users/reducer';
import { loadingBarReducer } from 'react-redux-loading-bar';
import threadDetailReducer from './threadDetail/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
