import PokedexVersionModel from 'src/app/core/services/pokedex-version/pokedex-version.model';
import { environment } from 'src/environments/environment';

const { imagesPath } = environment;

export const pokedexVersions: PokedexVersionModel[] = [
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
    releasedYear: 1996,
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
    releasedYear: 1998,
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
    releasedYear: 1999,
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
    releasedYear: 2000,
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
    releasedYear: 2000,
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
    releasedYear: 2001,
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
    releasedYear: 2003,
  },
  {
    id: 8,
    name: 'FireRed & LeafGreen',
    sprites: {
      url: `${imagesPath}/pokemon-firered-and-leafgreen.png`,
      width: 64,
      height: 64,
      animated: false,
    },
    limit: 386,
    releasedYear: 2004,
  },
  {
    id: 9,
    name: 'Emerald',
    sprites: {
      url: `${imagesPath}/pokemon-emerald`,
      width: 64,
      height: 64,
      animated: true,
    },
    limit: 386,
    releasedYear: 2005,
  },
];
