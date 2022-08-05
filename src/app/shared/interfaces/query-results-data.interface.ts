import { PokemonSpecieEntity } from 'src/app/core/services/pokemon-specie/pokemon-specie.entity';
import { PokemonV2TypeEntity } from 'src/app/core/services/pokemon-type/pokemon-type.entity';
import PokemonEntity from 'src/app/core/services/pokemon/pokemon.entity';

interface QueryResultsDataInterface {
  pokemon_v2_pokemon: PokemonEntity[];
  pokemon_v2_type: PokemonV2TypeEntity[];
  pokemon_v2_pokemonspecies: PokemonSpecieEntity[];
}

export default QueryResultsDataInterface;
