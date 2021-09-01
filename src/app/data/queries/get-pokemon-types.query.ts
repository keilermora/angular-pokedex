import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

const getPokemonTypesQuery: DocumentNode = gql`
  {
    pokemon_v2_type(order_by: { name: asc }) {
      id
      name
    }
  }
`;

export default getPokemonTypesQuery;
