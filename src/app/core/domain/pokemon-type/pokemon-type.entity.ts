interface PokemonTypeEntity {
  pokemon_v2_type: PokemonV2TypeEntity[];
}

interface PokemonV2TypeEntity {
  id: number;
  name: string;
}

export default PokemonTypeEntity;
export { PokemonV2TypeEntity };
