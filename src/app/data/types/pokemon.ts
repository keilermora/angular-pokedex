import { PokemonSprites } from './pokemon-sprites';

export interface Pokemon {
  id: number;
  name: string;
  height?: number;
  weight?: number;
  sprites?: PokemonSprites;
  stats?: any[];
  types?: any[];
}
