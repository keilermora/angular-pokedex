import Mapper from '@app/base/mapper';
import PokemonModel, { PokemonTypeModel } from '@app/domain/pokemon/pokemon.model';
import PokemonEntity, {
  PokemonV2PokemonTypeEntity,
  StatEntity,
  TypeEntity,
} from './pokemon.entity';

const PokemonMapper: Mapper<PokemonEntity, PokemonModel> = {
  mapFrom: (pokemonEntity: PokemonEntity): PokemonModel => {
    const { height, id, name, pokemon_v2_pokemontypes, sprites, stats, types, weight } =
      pokemonEntity;

    let pokemonTypes: PokemonTypeModel[] = [];
    if (types?.length) {
      pokemonTypes = types.map(({ type }: TypeEntity) => ({
        id: 0,
        name: type.name,
      }));
    } else if (pokemon_v2_pokemontypes?.length) {
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
      stats: stats?.map(({ base_stat, stat }: StatEntity) => ({
        name: stat.name,
        value: base_stat,
      })),
      types: pokemonTypes,
    };
  },
};

export default PokemonMapper;
