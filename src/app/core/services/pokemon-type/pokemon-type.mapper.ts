import Mapper from '../../base/mapper';
import { PokemonV2TypeEntity } from './pokemon-type.entity';
import PokemonTypeModel from './pokemon-type.model';

const PokemonTypeMapper: Mapper<PokemonV2TypeEntity, PokemonTypeModel> = {
  mapFrom: (pokemonV2TypeEntity: PokemonV2TypeEntity): PokemonTypeModel => ({
    id: pokemonV2TypeEntity.id,
    name: pokemonV2TypeEntity.name,
  }),
};

export default PokemonTypeMapper;
