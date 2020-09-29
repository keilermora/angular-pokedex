import { Pokemon } from '@data/types/pokemon';

export const missingNo: Pokemon = {
  id: 0,
  name: 'MissingNo.',
  sprites: {
    other: {
      'official-artwork': {
        front_default: '/assets/images/missingno.png'
      }
    }
  },
  height: 10,
  weight: 15983,
  types: [
    {
      type: {
        name: 'bird'
      }
    },
    {
      type: {
        name: 'normal'
      }
    }
  ],
  stats: [
    {
      base_stat: 33,
      stat: {
        name: 'hp'
      }
    },
    {
      base_stat: 136,
      stat: {
        name: 'attack'
      }
    },
    {
      base_stat: 0,
      stat: {
        name: 'defense'
      }
    },
    {
      base_stat: 6,
      stat: {
        name: 'special-attack'
      }
    },
    {
      base_stat: 6,
      stat: {
        name: 'special-defense'
      }
    },
    {
      base_stat: 29,
      stat: {
        name: 'speed'
      }
    }
  ]
};
