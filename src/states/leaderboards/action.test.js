import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';
import api from '../../utils/api';
import {
  asyncReceiveLeaderboards,
  receiveLeaderboardsActionCreator,
} from './action';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const fakeLeaderboardResponse = [
  {
    user: {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 10,
  },
  {
    user: {
      id: 'users-2',
      name: 'Jane Doe',
      email: 'jane@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 5,
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncReceiveLeaderboards thunk', () => {
  beforeEach(() => {
    api._getLeaderBoards = api.getLeaderBoards;
  });

  afterEach(() => {
    api.getLeaderBoards = api._getLeaderBoards;

    // delete backup data

    delete api._getLeaderBoards;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    api.getLeaderBoards = () =>
      Promise.resolve(fakeLeaderboardResponse);

    // mock dispatch
    const dispatch = vi.fn();
    // action
    await asyncReceiveLeaderboards()(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(fakeLeaderboardResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
describe('asyncReceiveLeaderboards thunk', () => {
  // … kode pengujian lainnya

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getLeaderBoards = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // mock alert
    window.alert = vi.fn();

    // action
    await asyncReceiveLeaderboards()(dispatch);
    // assert

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(
      fakeErrorResponse.message
    );
  });
});
