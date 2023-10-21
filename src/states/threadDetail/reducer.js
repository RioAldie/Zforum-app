import { ActionType } from './action';

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.REPLY_THREAD:
      return {
        ...threadDetail,
        comments: threadDetail.comments.includes(
          action.payload.userId
        )
          ? threadDetail.comments.filter(
              (id) => id !== action.payload.userId
            )
          : threadDetail.comments.concat(action.payload.userId),
      };

    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
