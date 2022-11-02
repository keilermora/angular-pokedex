import Mapper from '../../base/mapper';
import PokemonTypeMapper from '../pokemon-type/pokemon-type.mapper';
import PokemonTypeModel from '../pokemon-type/pokemon-type.model';
import PokemonEntity from './pokemon.entity';
import PokemonModel from './pokemon.model';

const PokemonMapper: Mapper<PokemonEntity, PokemonModel> = {
  mapFrom: (pokemonEntity: PokemonEntity): PokemonModel => {
    const { height, id, name, pokemon_v2_pokemontypes, sprites, weight } = pokemonEntity;

    let pokemonTypes: PokemonTypeModel[] = [];
    if (pokemon_v2_pokemontypes?.length) {
      const pokemonTypeEntities = pokemon_v2_pokemontypes.map(
        (typeEntity) => typeEntity.pokemon_v2_type
      );
      const pokemonTypeModels = pokemonTypeEntities.map(PokemonTypeMapper.mapFrom);

      pokemonTypes = pokemonTypeModels.map((typeModel: PokemonTypeModel) => ({
        id: typeModel.id,
        name: typeModel.name,
        color: typeModel.color,
      }));
    }

    return {
      id: id,
      name: name,
      sprite: sprites?.other['official-artwork'].front_default,
      height: height,
      weight: weight,
      types: pokemonTypes,
    };
  },
};

export default PokemonMapper;
