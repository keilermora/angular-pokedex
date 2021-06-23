interface Pokedex {
  pokemonName: string;
  version: PokedexVersion;
}

interface PokedexVersion {
  id: number;
  limit: number;
  name: string;
  platform: PokedexVersionPlatform;
  sprites: PokedexVersionSprites;
}

interface PokedexVersionPlatform {
  classTheme: string;
  code: string;
  id: number;
  name: string;
  pokemonCardMaxHeight: number;
}

interface PokedexVersionSprites {
  animated: boolean;
  height: number;
  url: string;
  width: number;
}

export default Pokedex;
export { PokedexVersion, PokedexVersionPlatform, PokedexVersionSprites };
