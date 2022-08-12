import { TestBed } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  const BULBASAUR_MOCK = {
    id: 1,
    name: 'bulbasaur',
    weight: 69,
    height: 7,
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: { id: 12 },
      },
      {
        pokemon_v2_type: { id: 4 },
      },
    ],
  };

  let apollo: Apollo;
  let controller: ApolloTestingController;
  let service: PokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [PokemonService],
    });

    apollo = TestBed.inject(Apollo);
    controller = TestBed.inject(ApolloTestingController);
    service = TestBed.inject(PokemonService);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set pokemon types defined in local storage at first load', () => {
    const POKEMONS_VALUE_MOCK =
      '[{"id":1,"name":"bulbasaur","height":7,"weight":69,"types":[{"id":12},{"id":4}]}]';

    spyOn(localStorage, 'getItem').and.callFake(() => POKEMONS_VALUE_MOCK);

    const newServiceInstance = new PokemonService(apollo);
    newServiceInstance.getAllPokemonsByLimit(1).subscribe((pokemonTypes) => {
      expect(pokemonTypes.length).toBe(1);
    });
  });

  it('#getAllPokemonsByLimit should run GetPokemons query', (done) => {
    service.getAllPokemonsByLimit(2).subscribe((pokemons) => {
      expect(pokemons.length).toBe(1);
      done();
    });

    const request = controller.expectOne('GetPokemons');
    request.flush({
      data: {
        pokemon_v2_pokemon: [BULBASAUR_MOCK],
      },
    });
  });
});
