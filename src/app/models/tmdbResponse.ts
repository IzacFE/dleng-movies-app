import { Cast } from './cast';

export interface Movies<T> {
  page: number;
  total_results: number;
  total_pages: number;
  results: T[];
}

export interface Casts<T> {
  cast: T[];
  crew: any[];
  id: number;
}
