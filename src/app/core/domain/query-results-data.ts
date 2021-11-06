import { PokemonV2TypeEntity } from '@app/domain/pokemon-type/pokemon-type.entity';
import PokemonEntity from '@app/domain/pokemon/pokemon.entity';

interface QueryResultsData {
  pokemon_v2_pokemon: PokemonEntity[];
  pokemon_v2_type: PokemonV2TypeEntity[];
}

export default QueryResultsData;
