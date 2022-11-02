import { pokemonTypes } from 'src/app/data/constants/pokemon-types.constant';
import Mapper from '../../base/mapper';
import { PokemonV2TypeEntity } from './pokemon-type.entity';
import PokemonTypeModel from './pokemon-type.model';

const PokemonTypeMapper: Mapper<PokemonV2TypeEntity, PokemonTypeModel> = {
  mapFrom: (pokemonV2TypeEntity: PokemonV2TypeEntity): PokemonTypeModel => {
    const { id, name } = pokemonV2TypeEntity;

    const pokemonType = pokemonTypes.find((type) => type.id === id);

    return {
      id: id,
      name: name,
      color: pokemonType?.color,
    };
  },
};

export default PokemonTypeMapper;
