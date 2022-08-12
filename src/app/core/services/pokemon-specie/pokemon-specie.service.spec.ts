import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { PokemonSpecieService } from './pokemon-specie.service';

describe('PokemonSpecieService', () => {
  const BULBASAUR_SPECIE_MOCK = {
    id: 1,
    name: 'bulbasaur',
    pokemon_v2_pokemonspeciesnames: [{ genus: 'Seed Pokémon' }],
    pokemon_v2_pokemonspeciesflavortexts: [
      {
        pokemon_v2_version: { name: 'red' },
        flavor_text: '',
      },
      {
        pokemon_v2_version: { name: 'blue' },
        flavor_text: '',
      },
    ],
    pokemon_v2_pokemons: [
      {
        weight: 69,
        height: 7,
        pokemon_v2_pokemonsprites: [
          {
            sprites: '{"front_default": ""}',
          },
        ],
        pokemon_v2_pokemontypes: [
          {
            pokemon_v2_type: { name: 'grass' },
          },
        ],
        pokemon_v2_pokemonstats: [
          {
            pokemon_v2_stat: { name: 'hp' },
            base_stat: 45,
          },
        ],
      },
    ],
  };

  let controller: ApolloTestingController;
  let service: PokemonSpecieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [PokemonSpecieService],
    });

    controller = TestBed.inject(ApolloTestingController);
    service = TestBed.inject(PokemonSpecieService);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getPokemonSpecieByPokemonId should run GetPokemonSpecie query', (done) => {
    service.getPokemonSpecieByPokemonId(1).subscribe((pokemonSpecie) => {
      expect(pokemonSpecie.id).toBe(BULBASAUR_SPECIE_MOCK.id);
      done();
    });

    const request = controller.expectOne('GetPokemonSpecie');
    request.flush({
      data: {
        pokemon_v2_pokemonspecies: [BULBASAUR_SPECIE_MOCK],
      },
    });
  });
});
