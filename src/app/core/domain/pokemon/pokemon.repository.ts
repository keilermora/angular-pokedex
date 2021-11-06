import { Observable } from 'rxjs';
import PokemonModel from './pokemon.model';

interface PokemonRepository {
  pokemons: PokemonModel[];
  pokemons$: Observable<PokemonModel[]>;
  fetchingPokemons: boolean;
  getPokemonById(id: number): Observable<PokemonModel>;
  getAllPokemonsByLimit(limit: number): Observable<PokemonModel[]>;
}

export default PokemonRepository;
