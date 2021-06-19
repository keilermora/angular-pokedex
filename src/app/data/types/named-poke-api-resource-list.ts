import { NamedPokeAPIResource } from './named-poke-api-resource';

export interface NamedPokeAPIResourceList {
  count: number;
  next?: string;
  previous?: string;
  results: NamedPokeAPIResource[];
}
