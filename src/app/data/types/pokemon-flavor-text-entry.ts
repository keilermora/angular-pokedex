import { NamedPokeAPIResource } from './named-poke-api-resource';

export interface PokemonFlavorTextEntry {
  flavor_text: string;
  language: NamedPokeAPIResource;
  version: NamedPokeAPIResource;
}
