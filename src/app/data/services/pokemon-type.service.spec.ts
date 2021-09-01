import { TestBed } from '@angular/core/testing';

import { PokemonTypeService } from './pokemon-type.service';

describe('PokemonTypeService', () => {
  let service: PokemonTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
