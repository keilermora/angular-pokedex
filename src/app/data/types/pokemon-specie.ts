import NamedPokeAPIResource from './named-poke-api-resource';

interface PokemonSpecie {
  flavor_text_entries: PokemonFlavorTextEntry[];
  genera: PokemonGenera[];
}

interface PokemonFlavorTextEntry {
  flavor_text: string;
  language: NamedPokeAPIResource;
  version: NamedPokeAPIResource;
}

interface PokemonGenera {
  genus: string;
  language: NamedPokeAPIResource;
}

export default PokemonSpecie;
export { PokemonFlavorTextEntry, PokemonGenera };
