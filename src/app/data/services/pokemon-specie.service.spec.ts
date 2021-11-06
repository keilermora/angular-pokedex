import { TestBed } from '@angular/core/testing';

import { PokemonSpecieService } from './pokemon-specie.service';

describe('PokemonSpecieService', () => {
  let service: PokemonSpecieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonSpecieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
