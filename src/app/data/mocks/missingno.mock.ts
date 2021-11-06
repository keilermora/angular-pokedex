import PokemonSpecieModel from '@app/domain/pokemon-specie/pokemon-specie.model';
import Pokemon from '@app/domain/pokemon/pokemon.model';

const missingNo: Pokemon = {
  id: 0,
  name: 'MissingNo.',
  sprite: './assets/images/missingno.png',
  height: 10,
  weight: 15983,
  types: [
    {
      id: 0,
      name: 'bird',
    },
    {
      id: 1,
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
};

const missingNoSpecie: PokemonSpecieModel = {
  genus: 'Pokémon ???',
  flavorTextEntries: [
    {
      version: {
        name: 'green',
      },
      flavorText: 'けつばん',
    },
    {
      version: {
        name: 'red',
      },
      flavorText: '???',
    },
    {
      version: {
        name: 'blue',
      },
      flavorText: 'コメント さくせいちゅう',
    },
    {
      version: {
        name: 'yellow',
      },
      flavorText: '...',
    },
  ],
};

export default missingNo;
export { missingNoSpecie };
