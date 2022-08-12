import { TestBed, waitForAsync } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { PokemonTypeService } from './pokemon-type.service';

describe('PokemonTypeService', () => {
  const BUG_TYPE_MOCK = { id: 7, name: 'bug' };
  const DARK_TYPE_MOCK = { id: 17, name: 'dark' };

  let apollo: Apollo;
  let controller: ApolloTestingController;
  let service: PokemonTypeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [PokemonTypeService],
    });

    apollo = TestBed.inject(Apollo);
    controller = TestBed.inject(ApolloTestingController);
    service = TestBed.inject(PokemonTypeService);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set pokemon types defined in local storage at first load', () => {
    const POKEMON_TYPES_VALUE_MOCK = '[{"id":7,"name":"bug"}]';

    spyOn(localStorage, 'getItem').and.callFake(() => POKEMON_TYPES_VALUE_MOCK);

    const newServiceInstance = new PokemonTypeService(apollo);
    newServiceInstance.getAllPokemonTypes().subscribe((pokemonTypes) => {
      expect(pokemonTypes.length).toBe(1);
    });
  });

  it('#getAllPokemonTypes should run GetPokemonTypes query', waitForAsync(() => {
    service.getAllPokemonTypes().subscribe((pokemonTypes) => {
      expect(pokemonTypes.length).toBe(0);
    });

    const request = controller.expectOne('GetPokemonTypes');
    request.flush({
      data: {
        pokemon_v2_type: [],
      },
    });
  }));

  it('#getAllPokemonTypes should return one Pokémon type by name', waitForAsync(() => {
    service.getAllPokemonTypes().subscribe(() => {
      const pokemonType = service.getPokemonTypeByName(BUG_TYPE_MOCK.name);
      expect(pokemonType.id).toBe(BUG_TYPE_MOCK.id);
    });

    const request = controller.expectOne('GetPokemonTypes');
    request.flush({
      data: {
        pokemon_v2_type: [BUG_TYPE_MOCK],
      },
    });
  }));

  it("#getAllPokemonTypes should return the first Pokémon type by default if the given name doesn't exist", waitForAsync(() => {
    service.getAllPokemonTypes().subscribe(() => {
      const pokemonType = service.getPokemonTypeByName(DARK_TYPE_MOCK.name);
      expect(pokemonType.id).toBe(BUG_TYPE_MOCK.id);
    });

    const request = controller.expectOne('GetPokemonTypes');
    request.flush({
      data: {
        pokemon_v2_type: [BUG_TYPE_MOCK],
      },
    });
  }));
});
