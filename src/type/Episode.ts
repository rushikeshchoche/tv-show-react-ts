type coverImage = {
  medium: string;
  original: string;
};

type Rating = {
  average: number;
};

export interface BaseInfo {
  id: number;
  name: string;
  type: string;
  airdate: string;
  rating: Rating;
  image: coverImage;
  runtime: number;
  summary: string;
}

export interface Episode extends BaseInfo {
  season: number;
  number: number;
}
