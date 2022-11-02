interface PokemonTypeModel {
  id: number;
  name: string;
  color?: PokemonTypeColor;
}

interface PokemonTypeColor {
  light: string;
  dark: string;
}

export default PokemonTypeModel;
