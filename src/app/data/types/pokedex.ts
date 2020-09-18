import { PokedexVersion } from './pokedex-version';

export class Pokedex {
  version: PokedexVersion | null;

  constructor(version: PokedexVersion | null) {
    this.version = version;
  }
}
