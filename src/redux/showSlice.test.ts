import { configureStore } from '@reduxjs/toolkit';
import showReducer, { fetchShow } from './showSlice';
import * as TvmazeService from '../service/TvmazeService';
import { Show } from '../type/Show';
import { DEFAULT_SHOW_ID } from '../utils/constants';

jest.mock('../service/TvmazeService');
jest.mock('axios');

describe('showSlice', () => {
  const stubShowResults: Show = {
    id: 1955,
    name: 'The Powerpuff Girls',
    type: 'Animation',
    language: 'English',
    airdate: '',
    episodes: [],
    genres: [],
    image: {
      medium: '',
      original: '',
    },
    rating: {
      average: 9,
    },
    runtime: 30,
    summary: '',
  };

  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should get showInfo', async () => {
    jest
      .spyOn(TvmazeService, 'getShowInfo')
      .mockResolvedValueOnce(stubShowResults);
    jest.spyOn(TvmazeService, 'getShowEpisodeList').mockResolvedValueOnce([]);
    const store = configureStore({ reducer: showReducer });
    await store.dispatch(fetchShow(DEFAULT_SHOW_ID));
    expect(store.getState()).toEqual({
      data: stubShowResults,
      error: null,
      isLoading: false,
    });
  });
});
