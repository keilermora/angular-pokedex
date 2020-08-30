import { PokedexVersion } from './pokedex-version';

export class Pokedex {
  version: PokedexVersion;

  constructor(version: PokedexVersion) {
    this.version = version;
  }
}
