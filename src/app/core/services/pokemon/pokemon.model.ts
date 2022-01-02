interface PokemonModel {
  id: number;
  name: string;
  sprite: string;
  height: number;
  weight: number;
  stats?: PokemonStatModel[];
  types?: PokemonTypeModel[];
}

interface PokemonStatModel {
  name: string;
  value: number;
}

interface PokemonTypeModel {
  id: number;
  name: string;
}

export default PokemonModel;
export { PokemonStatModel, PokemonTypeModel };
