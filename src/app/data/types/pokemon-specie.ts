import { PokemonFlavorTextEntry } from './pokemon-flavor-text-entry'
import { PokemonGenera } from './pokemon-genera'

export class PokemonSpecie {
  flavor_text_entries: PokemonFlavorTextEntry[] = [];
  genera: PokemonGenera | null = null;
}
