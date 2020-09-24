import { PokedexVersion } from './pokedex-version';

export class Pokedex {
  version: PokedexVersion | null;
  pokemonName: string;

  constructor(version: PokedexVersion | null, pokemonName: string) {
    this.version = version;
    this.pokemonName = pokemonName;
  }
}
