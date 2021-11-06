import Mapper from '@app/base/mapper';
import PokemonTypeModel from '@app/domain/pokemon-type/pokemon-type.model';
import { PokemonV2TypeEntity } from './pokemon-type.entity';

const PokemonTypeMapper: Mapper<PokemonV2TypeEntity, PokemonTypeModel> = {
  mapFrom: (pokemonV2TypeEntity: PokemonV2TypeEntity): PokemonTypeModel => ({
    id: pokemonV2TypeEntity.id,
    name: pokemonV2TypeEntity.name,
  }),
};

export default PokemonTypeMapper;
