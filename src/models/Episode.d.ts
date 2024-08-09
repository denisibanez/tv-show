export interface EpisodeByNumberInterface {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: Date;
  airtime: string;
  airstamp: Date;
  runtime: number;
  rating: Rating;
  image: Image;
  summary: string;
  _links: Links;
}

export interface DataEpisodeInterface {
  data: EpisodeByNumberInterface;
}

export interface Links {
  self: Self;
  show: Show;
}

export interface Self {
  href: string;
}

export interface Show {
  href: string;
  name: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Rating {
  average: null;
}
