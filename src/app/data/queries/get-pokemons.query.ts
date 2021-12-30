import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

const getPokemonsQuery = (limit: number): DocumentNode => {
  return gql`
    query {
      pokemon_v2_pokemon(limit: ${limit}) {
        id
        name
        weight
        height
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            id
          }
        }
      }
    }
  `;
};

export default getPokemonsQuery;
