export interface PokemonSpecieEntity {
  id: number;
  name: string;
  pokemon_v2_pokemonspeciesnames: Array<{
    genus: string;
  }>;
  pokemon_v2_pokemonspeciesflavortexts: Array<PokemonV2Pokemonspeciesflavortexts>;
  pokemon_v2_pokemons: Array<{
    weight: number;
    height: number;
    pokemon_v2_pokemontypes: Array<{
      pokemon_v2_type: {
        name: string;
      };
    }>;
    pokemon_v2_pokemonstats: Array<{
      base_stat: number;
      pokemon_v2_stat: {
        name: string;
      };
    }>;
  }>;
}

export interface PokemonV2Pokemonspeciesflavortexts {
  flavor_text: string;
  pokemon_v2_version: {
    name: string;
  };
}
