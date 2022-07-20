import { PokemonSpecieModel } from 'src/app/core/services/pokemon-specie/pokemon-specie.model';

export const missingNo: PokemonSpecieModel = {
  id: 0,
  name: 'MissingNo.',
  genus: 'Pokémon ???',
  sprite: './assets/images/missingno.png',
  height: 10,
  weight: 15983,
  types: [
    {
      name: 'bird',
    },
    {
      name: 'normal',
    },
  ],
  stats: [
    {
      name: 'hp',
      value: 33,
    },
    {
      name: 'attack',
      value: 136,
    },
    {
      name: 'defense',
      value: 0,
    },
    {
      name: 'special-attack',
      value: 6,
    },
    {
      name: 'special-defense',
      value: 6,
    },
    {
      name: 'speed',
      value: 29,
    },
  ],
  flavorTexts: [
    {
      versionNames: ['green'],
      text: 'けつばん',
    },
    {
      versionNames: ['red'],
      text: '???',
    },
    {
      versionNames: ['blue'],
      text: 'コメント さくせいちゅう',
    },
    {
      versionNames: ['yellow'],
      text: '...',
    },
  ],
};
