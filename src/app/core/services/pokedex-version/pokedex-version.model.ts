interface PokedexVersionModel {
  id: number;
  limit: number;
  name: string;
  sprites: PokedexVersionSpritesModel;
  releasedYear: number;
}

interface PokedexVersionSpritesModel {
  animated: boolean;
  height: number;
  url: string;
  width: number;
}

export default PokedexVersionModel;
export { PokedexVersionSpritesModel };
