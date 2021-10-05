import PokemonSortByEnum from '@data/enums/pokemon-sort-by.enum';

interface Pokedex {
  pokemonName: string;
  pokemonTypeId: number;
  version: PokedexVersion;
  pokemonSortBy: PokemonSortByEnum;
}

interface PokedexVersion {
  id: number;
  limit: number;
  name: string;
  sprites: PokedexVersionSprites;
  releasedYear: number;
}

interface PokedexVersionSprites {
  animated: boolean;
  height: number;
  url: string;
  width: number;
}

export default Pokedex;
export { PokedexVersion, PokedexVersionSprites };
