import { NamedPokeAPIResource } from './named-poke-api-resource';

export interface PokemonStat {
  stat: NamedPokeAPIResource;
  base_stat: number;
}
