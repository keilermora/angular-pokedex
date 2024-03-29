export const environment = {
  production: false,

  // API
  pokeApi: 'https://pokeapi.co/api/v2',
  pokeApiGraphQL: 'https://beta.pokeapi.co/graphql/v1beta',

  // Reference pages
  homeAngular: 'https://angular.io/',
  homePokeApi: 'https://pokeapi.co/',

  // Social media
  keilerLinkedin: 'https://www.linkedin.com/in/keilermora/',
  pokedexGithub: 'https://github.com/keilermora/angular-pokedex',

  // Images folder url
  imagesPath: '/assets/images',

  // Google Analytics measurement Id
  gaMeasurementId: '',

  // Local storage keys
  defaultLanguageKey: 'default-language-v1',
  pokemonsKey: 'pokemon-v6',
  pokemonTypesKey: 'pokemon-types-v3',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error'; // Included with Angular CLI.
