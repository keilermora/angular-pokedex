export class PokedexVersion {
  id: number;
  name: string;
  spritesUrl: string;
  limit: number;

  constructor(id: number, name: string, spritesUrl: string, limit: number) {
    this.id = id;
    this.name = name;
    this.spritesUrl = spritesUrl;
    this.limit = limit;
  }
}
