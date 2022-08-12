import Mapper from '../../base/mapper';
import PokemonEntity, {
  PokemonV2PokemonTypeEntity,
  StatEntity,
  TypeEntity,
} from './pokemon.entity';
import PokemonModel, { PokemonTypeModel } from './pokemon.model';

const PokemonMapper: Mapper<PokemonEntity, PokemonModel> = {
  mapFrom: (pokemonEntity: PokemonEntity): PokemonModel => {
    const { height, id, name, pokemon_v2_pokemontypes, sprites, weight } = pokemonEntity;

    let pokemonTypes: PokemonTypeModel[] = [];
    if (pokemon_v2_pokemontypes?.length) {
      pokemonTypes = pokemon_v2_pokemontypes.map(
        ({ pokemon_v2_type }: PokemonV2PokemonTypeEntity) => ({
          id: pokemon_v2_type.id,
          name: pokemon_v2_type.name,
        })
      );
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
