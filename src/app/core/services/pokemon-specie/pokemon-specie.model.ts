export interface PokemonSpecieModel {
  id: number;
  name: string;
  genus: string;
  weight: number;
  height: number;
  sprite: string;
  stats: Array<{
    name: string;
    value: number;
  }>;
  types: Array<{
    name: string;
  }>;
  flavorTexts: Array<FlavorText>;
}

export interface FlavorText {
  versionNames: Array<string>;
  text: string;
}
