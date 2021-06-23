import { PokedexVersionPlatform } from '@data/types/pokedex';

const gameBoy: PokedexVersionPlatform = {
  id: 1,
  name: 'Game Boy',
  code: 'gb',
  classTheme: 'gb-theme',
  pokemonCardMaxHeight: 130,
};

const gameBoyColor: PokedexVersionPlatform = {
  id: 2,
  name: 'Game Boy Color',
  code: 'gbc',
  classTheme: 'gbc-theme',
  pokemonCardMaxHeight: 130,
};

const gameBoyAdvanced: PokedexVersionPlatform = {
  id: 3,
  name: 'Game Boy Advanced',
  code: 'gba',
  classTheme: 'gba-theme',
  pokemonCardMaxHeight: 138,
};

const pokedexVersionPlatforms: PokedexVersionPlatform[] = [
  gameBoy,
  gameBoyColor,
  gameBoyAdvanced,
];

export default pokedexVersionPlatforms;
export { gameBoy, gameBoyColor, gameBoyAdvanced };
