import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_LIKE_THREAD: 'TOGGLE_LIKE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function toggleLikeThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_LIKE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread({ title, body }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.createThread({ title, body });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToogleLikeThread(talkId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(
      toggleLikeThreadActionCreator({ talkId, userId: authUser.id })
    );

    try {
      await api.toggleLikeTalk(talkId);
    } catch (error) {
      alert(error.message);
      dispatch(
        toggleLikeThreadActionCreator({ talkId, userId: authUser.id })
      );
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  toggleLikeThreadActionCreator,
  asyncAddThread,
  asyncToogleLikeThread,
};
