export class PokedexVersion {
  id: number;
  name: string;
  spritesUrl: string;
  animated: boolean;
  limit: number;

  constructor(id: number, name: string, spritesUrl: string, animated: boolean, limit: number) {
    this.id = id;
    this.name = name;
    this.spritesUrl = spritesUrl;
    this.animated = animated;
    this.limit = limit;
  }
}
