import PokemonEntity, { PokemonV2TypeEntity } from './pokemon/pokemon.entity';

interface QueryResultsData {
  pokemon_v2_pokemon: PokemonEntity[];
  pokemon_v2_type: PokemonV2TypeEntity[];
}

export default QueryResultsData;
