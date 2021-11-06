import { Observable } from 'rxjs';
import FilterModel from './filter.model';

interface FilterRepository {
  filter: FilterModel;
  getFilter(): Observable<FilterModel>;
  setPokedexVersionId(pokedexVersionId: number): void;
  setPokemonName(pokemonName: string): void;
  setPokemonTypeId(pokemonTypeId: string): void;
  setPokemonSortBy(sortBy: string): void;
}

export default FilterRepository;
