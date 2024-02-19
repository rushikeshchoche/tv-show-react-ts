import { getEnvironment } from '../utils/config';
import { Show } from '../type/Show';
import { Episode } from '../type/Episode';
import axios from 'axios';

const TvmazeApiUrl = `${getEnvironment.apiBaseUrl}`;

export const getShowInfo = async (showId: number): Promise<Show> => {
  const response = await axios.get<Show>(`${TvmazeApiUrl}shows/${showId}`);
  return response.data;
};

export const getShowEpisodeList = async (
  showId: number
): Promise<Episode[]> => {
  const response = await axios.get<Episode[]>(
    `${TvmazeApiUrl}shows/${showId}/episodes`
  );
  return response.data;
};

export const getEpisodeDetails = async (
  episodeId: number
): Promise<Episode> => {
  const response = await axios.get<Episode>(
    `${TvmazeApiUrl}episodes/${episodeId}`
  );
  return response.data;
};
