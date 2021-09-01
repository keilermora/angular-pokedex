interface Pokedex {
  pokemonName: string;
  pokemonTypeId: number;
  version: PokedexVersion;
}

interface PokedexVersion {
  id: number;
  limit: number;
  name: string;
  sprites: PokedexVersionSprites;
}

interface PokedexVersionSprites {
  animated: boolean;
  height: number;
  url: string;
  width: number;
}

export default Pokedex;
export { PokedexVersion, PokedexVersionSprites };
