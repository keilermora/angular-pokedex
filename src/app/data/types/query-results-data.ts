import Pokemon, { PokemonTypeV2 } from './pokemon';

interface QueryResultsData {
  pokemon_v2_pokemon: Pokemon[];
  pokemon_v2_type: PokemonTypeV2[];
}

export default QueryResultsData;
