import NamedPokeAPIResource from '../named-poke-api-resource';

interface PokemonEntity {
  abilities: AbilityEntity[];
  base_experience: number;
  forms: NamedPokeAPIResource[];
  game_indices: GameIndexEntity[];
  height: number;
  held_items: HeldItemEntity[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: MoveEntity[];
  name: string;
  order: number;
  past_types: PastTypeEntity[];
  species: NamedPokeAPIResource;
  sprites: SpritesEntity;
  stats?: StatEntity[];
  types: TypeEntity[];
  weight: number;
  pokemon_v2_pokemontypes?: PokemonV2PokemonTypeEntity[];
}

interface AbilityEntity {
  ability: NamedPokeAPIResource;
  is_hidden: boolean;
  slot: number;
}

interface GameIndexEntity {
  game_index: number;
  version: NamedPokeAPIResource;
}

interface HeldItemEntity {
  item: NamedPokeAPIResource;
  version_details: VersionDetailEntity;
}

interface MoveEntity {
  move: NamedPokeAPIResource;
  version_group_details: VersionGroupDetailEntity[];
}

interface OtherSpritesEntity {
  dream_world: SpritesEntity;
  home: SpritesEntity;
  'official-artwork': SpritesEntity;
}

interface PastTypeEntity {
  generation: NamedPokeAPIResource;
  types: TypeEntity[];
}

interface QueryResultsData {
  pokemon_v2_pokemon: PokemonEntity[];
}

interface SpritesEntity {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: OtherSpritesEntity;
}

interface StatEntity {
  base_stat: number;
  effort: number;
  stat: NamedPokeAPIResource;
}

interface TypeEntity {
  slot: number;
  type: NamedPokeAPIResource;
}

interface VersionDetailEntity {
  rarity: number;
  version: NamedPokeAPIResource;
}

interface VersionGroupDetailEntity {
  level_learned_at: number;
  move_learn_method: NamedPokeAPIResource;
  version_group: NamedPokeAPIResource;
}

interface PokemonV2PokemonTypeEntity {
  pokemon_v2_type: PokemonV2TypeEntity;
}

interface PokemonV2TypeEntity {
  id: number;
  name: string;
}

export default PokemonEntity;
export {
  AbilityEntity,
  GameIndexEntity,
  HeldItemEntity,
  MoveEntity,
  OtherSpritesEntity,
  PastTypeEntity,
  PokemonV2PokemonTypeEntity,
  PokemonV2TypeEntity,
  QueryResultsData,
  SpritesEntity,
  StatEntity,
  TypeEntity,
  VersionDetailEntity,
  VersionGroupDetailEntity,
};
