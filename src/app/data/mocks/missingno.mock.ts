import Pokemon from '@data/types/pokemon';
import {
  PokemonFlavorTextEntry,
  PokemonGenera,
} from '@data/types/pokemon-specie';

const missingNo: Pokemon = {
  id: 0,
  name: 'MissingNo.',
  sprites: {
    other: {
      'official-artwork': {
        front_default: './assets/images/missingno.png',
      },
    },
  },
  height: 10,
  weight: 15983,
  types: [
    {
      type: {
        name: 'bird',
      },
    },
    {
      type: {
        name: 'normal',
      },
    },
  ],
  stats: [
    {
      base_stat: 33,
      stat: {
        name: 'hp',
      },
    },
    {
      base_stat: 136,
      stat: {
        name: 'attack',
      },
    },
    {
      base_stat: 0,
      stat: {
        name: 'defense',
      },
    },
    {
      base_stat: 6,
      stat: {
        name: 'special-attack',
      },
    },
    {
      base_stat: 6,
      stat: {
        name: 'special-defense',
      },
    },
    {
      base_stat: 29,
      stat: {
        name: 'speed',
      },
    },
  ],
};

const missingNoGenera: PokemonGenera = {
  genus: 'Pokémon ???',
  language: {
    name: 'es',
  },
};

const missingNoFlavorTextEntries: PokemonFlavorTextEntry[] = [
  {
    language: {
      name: 'es',
    },
    version: {
      name: 'green',
    },
    flavor_text: 'けつばん',
  },
  {
    language: {
      name: 'es',
    },
    version: {
      name: 'red',
    },
    flavor_text: '???',
  },
  {
    language: {
      name: 'es',
    },
    version: {
      name: 'blue',
    },
    flavor_text: 'コメント さくせいちゅう',
  },
  {
    language: {
      name: 'es',
    },
    version: {
      name: 'yellow',
    },
    flavor_text: '...',
  },
];

export default missingNo;
export { missingNoGenera, missingNoFlavorTextEntries };
