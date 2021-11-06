import { Observable } from 'rxjs';
import PokemonSpecieModel from './pokemon-specie.model';

interface PokemonSpecieRepository {
  getPokemonSpecieByPokemonId(pokemonId: number): Observable<PokemonSpecieModel>;
}

export default PokemonSpecieRepository;
