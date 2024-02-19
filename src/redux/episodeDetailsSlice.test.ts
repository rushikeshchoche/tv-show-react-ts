import { configureStore } from '@reduxjs/toolkit';
import episodeDetailsReducer, {
  fetchEpisodeDetails,
} from './episodeDetailsSlice';
import * as TvmazeService from '../service/TvmazeService';
import { Episode } from '../type/Episode';

jest.mock('../service/TvmazeService');
jest.mock('axios');

describe('episodeDetailsSlice', () => {
  const stubEpisodeDetails: Episode = {
    id: 160178,
    name: '',
    airdate: '',
    type: '',
    image: {
      medium: '',
      original: '',
    },
    number: 1,
    season: 1,
    rating: {
      average: 7,
    },
    runtime: 30,
    summary: '',
  };

  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should get episodeDetails', async () => {
    jest
      .spyOn(TvmazeService, 'getEpisodeDetails')
      .mockResolvedValueOnce(stubEpisodeDetails);
    const store = configureStore({ reducer: episodeDetailsReducer });
    await store.dispatch(fetchEpisodeDetails(160178));
    expect(store.getState()).toEqual({
      data: stubEpisodeDetails,
      error: null,
      isLoading: false,
    });
  });
});
