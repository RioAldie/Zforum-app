import { ActionType } from './action';

function threadDetailReducer(detailThread = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.detailThread;
    case ActionType.REPLY_THREAD:
      return {
        ...detailThread,
        comments: [action.payload.comment, ...detailThread.comments],
      };

    default:
      return detailThread;
  }
}

export default threadDetailReducer;
