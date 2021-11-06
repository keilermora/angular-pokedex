import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import PokemonSpecieEntity from '@app/domain/pokemon-specie/pokemon-specie.entity';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class PokemonSpecieService {
  constructor(private http: HttpClient) {}

  getPokemonSpecieByPokemonId(pokemonId: number): Observable<PokemonSpecieEntity> {
    return this.http.get<PokemonSpecieEntity>(
      `${environment.pokeApi}/pokemon-species/${pokemonId}`
    );
  }
}
