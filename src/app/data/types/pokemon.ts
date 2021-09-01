import NamedPokeAPIResource from './named-poke-api-resource';

interface Pokemon {
  id: number;
  name: string;
  pokemon_v2_pokemontypes?: PokemonTypeContainer[];

  type?: PokemonType;
  height?: number;
  sprites?: PokemonSprites;
  stats?: PokemonStat[];
  types?: PokemonType[];
  weight?: number;
}

interface PokemonSprites {
  front_default?: string;
  other?: PokemonSpritesOther;
}

interface PokemonSpritesOther {
  'official-artwork': PokemonSprites;
}

interface PokemonStat {
  base_stat: number;
  stat: NamedPokeAPIResource;
}

interface PokemonTypeContainer {
  pokemon_v2_type: PokemonTypeV2;
}

interface PokemonType {
  type: NamedPokeAPIResource;
}

interface PokemonTypeV2 {
  id: number;
  name: string;
}

export default Pokemon;
export {
  PokemonSprites,
  PokemonSpritesOther,
  PokemonStat,
  PokemonTypeContainer,
  PokemonType,
  PokemonTypeV2,
};
