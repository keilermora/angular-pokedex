import { Observable } from 'rxjs';
import PokedexVersionModel from './pokedex-version.model';

interface PokedexVersionRepository {
  pokedexVersions: PokedexVersionModel[];
  getAllPokedexVersions(): Observable<PokedexVersionModel[]>;
  getPokedexVersionById(id: number): Observable<PokedexVersionModel>;
}

export default PokedexVersionRepository;
