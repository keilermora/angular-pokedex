import { Observable } from 'rxjs';
import PokemonTypeModel from './pokemon-type.model';

interface PokemonTypeRepository {
  pokemonTypes: PokemonTypeModel[];
  pokemonTypes$: Observable<PokemonTypeModel[]>;
  fetchingPokemonTypes: boolean;
  getPokemonTypeByName(name: string): Observable<PokemonTypeModel>;
  getAllPokemonTypes(): Observable<PokemonTypeModel[]>;
}

export default PokemonTypeRepository;
