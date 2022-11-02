import PokemonTypeModel from '../pokemon-type/pokemon-type.model';

interface PokemonModel {
  id: number;
  name: string;
  sprite: string;
  height: number;
  weight: number;
  types: PokemonTypeModel[];
}

export default PokemonModel;
