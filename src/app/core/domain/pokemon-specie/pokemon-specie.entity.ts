import NamedPokeAPIResource from '@app/domain/named-poke-api-resource';

interface PokemonSpecieEntity {
  base_happiness: number;
  capture_rate: number;
  color: NamedPokeAPIResource;
  egg_groups: NamedPokeAPIResource[];
  evolution_chain: NamedPokeAPIResource;
  flavor_text_entries: FlavorTextEntryEntity[];
  form_descriptions: FormDescriptionEntity[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: GeneraEntity[];
  generation: NamedPokeAPIResource;
  grow_rate: NamedPokeAPIResource;
  habitat: NamedPokeAPIResource;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: NameEntity[];
  order: number;
  pal_park_encounters: PalParkEncounterEntity[];
  pokedex_numbers: PokedexNumberEntity[];
  shape: NamedPokeAPIResource;
  varieties: VarietyEntity[];
}

interface FlavorTextEntryEntity {
  flavor_text: string;
  language: NamedPokeAPIResource;
  version: NamedPokeAPIResource;
}

interface FormDescriptionEntity {
  description: string;
  language: NamedPokeAPIResource;
}

interface GeneraEntity {
  genus: string;
  language: NamedPokeAPIResource;
}

interface NameEntity {
  language: NamedPokeAPIResource;
  name: string;
}

interface PalParkEncounterEntity {
  area: NamedPokeAPIResource;
  base_score: number;
  rate: number;
}

interface PokedexNumberEntity {
  entry_number: number;
  pokedex: NamedPokeAPIResource;
}

interface VarietyEntity {
  is_default: boolean;
  pokemon: NamedPokeAPIResource;
}

export default PokemonSpecieEntity;
export {
  FlavorTextEntryEntity,
  FormDescriptionEntity,
  GeneraEntity,
  NameEntity,
  PalParkEncounterEntity,
  PokedexNumberEntity,
  VarietyEntity,
};
