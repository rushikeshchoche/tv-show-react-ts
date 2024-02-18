import { BaseInfo, Episode } from './Episode';

export interface Show extends BaseInfo {
  language: string;
  genres: string[];
  episodes: Episode[];
}
