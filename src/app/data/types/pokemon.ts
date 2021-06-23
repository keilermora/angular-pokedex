import NamedPokeAPIResource from './named-poke-api-resource';

interface Pokemon {
  height?: number;
  id: number;
  name: string;
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

interface PokemonType {
  type: NamedPokeAPIResource;
}

export default Pokemon;
export { PokemonSprites, PokemonSpritesOther, PokemonStat, PokemonType };
