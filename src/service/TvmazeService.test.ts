import axios from 'axios';
import { Show } from '../type/Show';
import { getEpisodeDetails, getShowInfo } from './TvmazeService';
import { DEFAULT_SHOW_ID } from '../utils/constants';
import { Episode } from '../type/Episode';

jest.mock('axios');

describe('TvmazeService', () => {
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
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  describe('getShowInfo()', () => {
    it('should return show results', async () => {
      jest.mocked(axios, true).get.mockResolvedValueOnce({
        data: stubShowResults,
      });
      const data = await getShowInfo(DEFAULT_SHOW_ID);
      expect(axios.get).toHaveBeenCalled();
      expect(data).toEqual(stubShowResults);
    });
  });

  describe('getEpisodeDetails()', () => {
    it('should return episode details', async () => {
      jest.mocked(axios, true).get.mockResolvedValueOnce({
        data: stubEpisodeDetails,
      });
      const data = await getEpisodeDetails(160178);
      expect(axios.get).toHaveBeenCalled();
      expect(data).toEqual(stubEpisodeDetails);
    });
  });
});
