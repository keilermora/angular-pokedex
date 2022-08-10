import { PokemonV2TypeEntity } from 'src/app/core/services/pokemon-type/pokemon-type.entity';

interface PokemonTypesQueryResults {
  pokemon_v2_type: PokemonV2TypeEntity[];
}

export default PokemonTypesQueryResults;
