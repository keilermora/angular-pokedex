interface PokemonModel {
  id: number;
  name: string;
  sprite: string;
  height: number;
  weight: number;
  types: PokemonTypeModel[];
}

interface PokemonTypeModel {
  id: number;
  name: string;
}

export default PokemonModel;
export { PokemonTypeModel };
