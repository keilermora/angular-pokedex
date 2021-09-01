import { environment } from '@env';
import { PokedexVersion } from '@data/types/pokedex';

const imagesPath = environment.imagesPath;

export const pokedexVersions: PokedexVersion[] = [
  {
    id: 1,
    name: 'Green',
    sprites: {
      url: `${imagesPath}/pokemon-green.png`,
      width: 56,
      height: 56,
      animated: false,
    },
    limit: 151,
  },
  {
    id: 2,
    name: 'Red & Blue',
    sprites: {
      url: `${imagesPath}/pokemon-red-and-blue.png`,
      width: 56,
      height: 56,
      animated: false,
    },
    limit: 151,
  },
  {
    id: 3,
    name: 'Yellow',
    sprites: {
      url: `${imagesPath}/pokemon-yellow.png`,
      width: 56,
      height: 56,
      animated: false,
    },
    limit: 151,
  },
  {
    id: 4,
    name: 'Gold',
    sprites: {
      url: `${imagesPath}/pokemon-gold.png`,
      width: 56,
      height: 56,
      animated: false,
    },
    limit: 251,
  },
  {
    id: 5,
    name: 'Silver',
    sprites: {
      url: `${imagesPath}/pokemon-silver.png`,
      width: 56,
      height: 56,
      animated: false,
    },
    limit: 251,
  },
  {
    id: 6,
    name: 'Crystal',
    sprites: {
      url: `${imagesPath}/pokemon-crystal`,
      width: 56,
      height: 56,
      animated: true,
    },
    limit: 251,
  },
  {
    id: 7,
    name: 'Ruby & Sapphire',
    sprites: {
      url: `${imagesPath}/pokemon-ruby-and-sapphire.png`,
      width: 64,
      height: 64,
      animated: false,
    },
    limit: 386,
  },
  {
    id: 8,
    name: 'Emerald',
    sprites: {
      url: `${imagesPath}/pokemon-emerald`,
      width: 64,
      height: 64,
      animated: true,
    },
    limit: 386,
  },
  {
    id: 9,
    name: 'FireRed & LeafGreen',
    sprites: {
      url: `${imagesPath}/pokemon-firered-and-leafgreen.png`,
      width: 64,
      height: 64,
      animated: false,
    },
    limit: 386,
  },
];
