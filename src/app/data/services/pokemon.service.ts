import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import  { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(limit: number): Observable<any> {
    return this.http.get(environment.pokeApi + '/pokemon/?limit=' + limit);
  }
}
