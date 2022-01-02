import { PokemonSpecieEntity } from './pokemon-specie/pokemon-specie.entity';
import PokemonEntity, { PokemonV2TypeEntity } from './pokemon/pokemon.entity';

interface QueryResultsData {
  pokemon_v2_pokemon: PokemonEntity[];
  pokemon_v2_type: PokemonV2TypeEntity[];
  pokemon_v2_pokemonspecies: PokemonSpecieEntity[];
}

export default QueryResultsData;
