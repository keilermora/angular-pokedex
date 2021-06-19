import { PokedexVersion } from '@data/types/pokedex-version';
import { environment } from '@env';

const imagesPath = environment.imagesPath;

export const pokedexVersions: PokedexVersion[] = [
  {
    id: 1,
    name: 'Green',
    spritesUrl: `${imagesPath}/pokemon-green.png`,
    animated: false,
    limit: 151,
  },
  {
    id: 2,
    name: 'Red & Blue',
    spritesUrl: `${imagesPath}/pokemon-red-and-blue.png`,
    animated: false,
    limit: 151,
  },
  {
    id: 3,
    name: 'Yellow',
    spritesUrl: `${imagesPath}/pokemon-yellow.png`,
    animated: false,
    limit: 151,
  },
  {
    id: 4,
    name: 'Gold',
    spritesUrl: `${imagesPath}/pokemon-gold.png`,
    animated: false,
    limit: 251,
  },
  {
    id: 5,
    name: 'Silver',
    spritesUrl: `${imagesPath}/pokemon-silver.png`,
    animated: false,
    limit: 251,
  },
  {
    id: 6,
    name: 'Crystal',
    spritesUrl: `${imagesPath}/pokemon-crystal`,
    animated: true,
    limit: 251,
  },
];
