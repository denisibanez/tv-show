export interface EpisodesInterfaceResponse {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: Type;
  airdate: Date;
  airtime: Airtime;
  airstamp: Date;
  runtime: number;
  rating: Rating;
  image: Image;
  summary: string;
  _links: Links;
}

export interface DataEpisodesInterfaceResponse {
  data: EpisodesInterfaceResponse[];
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
  name: Name;
}

export enum Name {
  UnderTheDome = 'Under the Dome',
}

export enum Airtime {
  The2100 = '21:00',
  The2200 = '22:00',
}

export interface Image {
  medium: string;
  original: string;
}

export interface Rating {
  average: number;
}

export enum Type {
  Regular = 'regular',
}
