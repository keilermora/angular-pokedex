import { environment } from '@env';
import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

export const getPokemonSpecieQuery = (id: number): DocumentNode => {
  return gql`
    query {
      pokemon_v2_pokemonspecies(where: {id: {_eq: ${id}}}) {
        id
        name
        pokemon_v2_pokemonspeciesnames(where: {language_id: {_eq: ${environment.languageId}}}) {
          genus
        }
        pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: ${environment.languageId}}}) {
          pokemon_v2_version {
            name
          }
          flavor_text
        }
        pokemon_v2_pokemons {
          weight
          height
          pokemon_v2_pokemonsprites {
            sprites
          }
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
          pokemon_v2_pokemonstats {
            pokemon_v2_stat {
              name
            }
            base_stat
          }
        }
      }
    }
  `;
};
