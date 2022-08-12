import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { first } from 'rxjs';
import PokemonSortByEnum from 'src/app/data/enums/pokemon-sort-by.enum';
import PokemonModel from '../pokemon/pokemon.model';
import { FilterService } from './filter.service';

describe('FilterService', () => {
  const BULBASAUR_MOCK: PokemonModel = {
    id: 1,
    name: 'bulbasaur',
    height: 7,
    weight: 69,
    types: [{ id: 12, name: 'grass' }],
    sprite: '',
  };

  const CHARMANDER_MOCK: PokemonModel = {
    id: 4,
    name: 'charmander',
    height: 6,
    weight: 85,
    types: [{ id: 10, name: 'fire' }],
    sprite: '',
  };

  const SQUIRTLE_MOCK: PokemonModel = {
    id: 7,
    name: 'squirtle',
    height: 5,
    weight: 90,
    types: [{ id: 11, name: 'water' }],
    sprite: '',
  };

  const PIKACHU_MOCK: PokemonModel = {
    id: 25,
    name: 'pikachu',
    height: 4,
    weight: 60,
    types: [{ id: 13, name: 'electric' }],
    sprite: '',
  };

  const EEVEE_MOCK: PokemonModel = {
    id: 133,
    name: 'eevee',
    height: 3,
    weight: 65,
    types: [{ id: 13, name: 'electric' }],
    sprite: '',
  };

  const MEW_MOCK: PokemonModel = {
    id: 151,
    name: 'mew',
    height: 4,
    weight: 40,
    types: [{ id: 13, name: 'electric' }],
    sprite: '',
  };

  const POKEMONS_MOCK: PokemonModel[] = [
    BULBASAUR_MOCK,
    CHARMANDER_MOCK,
    SQUIRTLE_MOCK,
    PIKACHU_MOCK,
    EEVEE_MOCK,
    MEW_MOCK,
  ];

  let service: FilterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [FilterService],
    });

    service = TestBed.inject(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#filterPokemons should return filtered Pokémons by name', () => {
    const pokemonName = 'ch';

    service.setPokemonName(pokemonName);

    const pokemonsFiltered = service.filterPokemons(POKEMONS_MOCK);
    const isEveryPokemonNameExpected = pokemonsFiltered.every(
      (pokemon) => pokemon.name.indexOf(pokemonName) !== -1
    );

    expect(isEveryPokemonNameExpected).toBeTruthy();
  });

  it('#filterPokemons should return filtered Pokémons by pokemonTypeId', () => {
    const pokemonTypeId = 10;

    service.setPokemonTypeId(pokemonTypeId.toString());

    const pokemonsFiltered = service.filterPokemons(POKEMONS_MOCK);
    const isEveryPokemonTypeExpected = pokemonsFiltered.every((pokemon) =>
      pokemon.types.some((type) => type.id === pokemonTypeId)
    );

    expect(isEveryPokemonTypeExpected).toBeTruthy();
  });

  it('#setPokedexVersionId should set Pokédex version id', () => {
    const pokemonId = 1;
    service.setPokedexVersionId(pokemonId);
    service
      .getFilter()
      .pipe(first())
      .subscribe((filter) => {
        expect(filter.pokedexVersionId).toBe(pokemonId);
      });
  });

  it('#setPokemonName should set Pokémon name', () => {
    const pokemonName = EEVEE_MOCK.name;
    service.setPokemonName(pokemonName);
    service
      .getFilter()
      .pipe(first())
      .subscribe((filter) => {
        expect(filter.pokemonName).toBe(pokemonName);
      });
  });

  it('#setPokemonName should allow to set an empty Pokémon name', () => {
    const pokemonName = '';
    service.setPokemonName(pokemonName);
    service
      .getFilter()
      .pipe(first())
      .subscribe((filter) => {
        expect(filter.pokemonName).toBe(pokemonName);
      });
  });

  it('#setPokemonTypeId should set Pokémon type id', () => {
    const pokemonTypeId = 1;
    service.setPokemonTypeId(pokemonTypeId.toString());
    service
      .getFilter()
      .pipe(first())
      .subscribe((filter) => {
        expect(filter.pokemonTypeId).toBe(pokemonTypeId);
      });
  });

  it('#setPokemonSortBy should set Pokémon sort by', () => {
    const pokemonSortBy = PokemonSortByEnum.NAME_ASC;
    service.setPokemonSortBy(pokemonSortBy);
    service
      .getFilter()
      .pipe(first())
      .subscribe((filter) => {
        expect(filter.pokemonSortBy).toBe(pokemonSortBy);
      });
  });

  it('#sortPokemons should return Pokémons sorted by name asc', () => {
    const pokemonSortBy = PokemonSortByEnum.NAME_ASC;
    const expectedFirstPokemon = BULBASAUR_MOCK;
    const expectedLastPokemon = SQUIRTLE_MOCK;

    service.setPokemonSortBy(pokemonSortBy);

    const sortedPokemons = service.sortPokemons(POKEMONS_MOCK);
    const firstPokemon = sortedPokemons[0];
    const lastPokemon = sortedPokemons[sortedPokemons.length - 1];

    expect(firstPokemon.id).toBe(expectedFirstPokemon.id);
    expect(lastPokemon.id).toBe(expectedLastPokemon.id);
  });

  it('#sortPokemons should return Pokémons sorted by weight asc', () => {
    const pokemonSortBy = PokemonSortByEnum.WEIGHT_ASC;
    const expectedFirstPokemon = MEW_MOCK;
    const expectedLastPokemon = SQUIRTLE_MOCK;

    service.setPokemonSortBy(pokemonSortBy);

    const sortedPokemons = service.sortPokemons(POKEMONS_MOCK);
    const firstPokemon = sortedPokemons[0];
    const lastPokemon = sortedPokemons[sortedPokemons.length - 1];

    expect(firstPokemon.id).toBe(expectedFirstPokemon.id);
    expect(lastPokemon.id).toBe(expectedLastPokemon.id);
  });

  it('#sortPokemons should return Pokémons sorted by height asc', () => {
    const pokemonSortBy = PokemonSortByEnum.HEIGHT_ASC;
    const expectedFirstPokemon = EEVEE_MOCK;
    const expectedLastPokemon = BULBASAUR_MOCK;

    service.setPokemonSortBy(pokemonSortBy);

    const sortedPokemons = service.sortPokemons(POKEMONS_MOCK);
    const firstPokemon = sortedPokemons[0];
    const lastPokemon = sortedPokemons[sortedPokemons.length - 1];

    expect(firstPokemon.id).toBe(expectedFirstPokemon.id);
    expect(lastPokemon.id).toBe(expectedLastPokemon.id);
  });

  it('#sortPokemons should return Pokémons sorted by number dsc', () => {
    // Disorder Pokémon list on purpose
    let pokemonSortBy = PokemonSortByEnum.NAME_ASC;
    service.setPokemonSortBy(pokemonSortBy);
    let sortedPokemons = service.sortPokemons(POKEMONS_MOCK);

    // Now, start test with unordered Pokémon list
    pokemonSortBy = PokemonSortByEnum.NUMBER_DSC;
    const expectedFirstPokemon = MEW_MOCK;
    const expectedLastPokemon = BULBASAUR_MOCK;

    service.setPokemonSortBy(pokemonSortBy);

    sortedPokemons = service.sortPokemons(sortedPokemons);
    const firstPokemon = sortedPokemons[0];
    const lastPokemon = sortedPokemons[sortedPokemons.length - 1];

    expect(firstPokemon.id).toBe(expectedFirstPokemon.id);
    expect(lastPokemon.id).toBe(expectedLastPokemon.id);
  });

  it('#sortPokemons should return Pokémons sorted by name dsc', () => {
    const pokemonSortBy = PokemonSortByEnum.NAME_DSC;
    const expectedFirstPokemon = SQUIRTLE_MOCK;
    const expectedLastPokemon = BULBASAUR_MOCK;

    service.setPokemonSortBy(pokemonSortBy);

    const sortedPokemons = service.sortPokemons(POKEMONS_MOCK);
    const firstPokemon = sortedPokemons[0];
    const lastPokemon = sortedPokemons[sortedPokemons.length - 1];

    expect(firstPokemon.id).toBe(expectedFirstPokemon.id);
    expect(lastPokemon.id).toBe(expectedLastPokemon.id);
  });

  it('#sortPokemons should return Pokémons sorted by weight dsc', () => {
    const pokemonSortBy = PokemonSortByEnum.WEIGHT_DSC;
    const expectedFirstPokemon = SQUIRTLE_MOCK;
    const expectedLastPokemon = MEW_MOCK;

    service.setPokemonSortBy(pokemonSortBy);

    const sortedPokemons = service.sortPokemons(POKEMONS_MOCK);
    const firstPokemon = sortedPokemons[0];
    const lastPokemon = sortedPokemons[sortedPokemons.length - 1];

    expect(firstPokemon.id).toBe(expectedFirstPokemon.id);
    expect(lastPokemon.id).toBe(expectedLastPokemon.id);
  });

  it('#sortPokemons should return Pokémons sorted by height dsc', () => {
    const pokemonSortBy = PokemonSortByEnum.HEIGHT_DSC;
    const expectedFirstPokemon = BULBASAUR_MOCK;
    const expectedLastPokemon = EEVEE_MOCK;

    service.setPokemonSortBy(pokemonSortBy);

    const sortedPokemons = service.sortPokemons(POKEMONS_MOCK);
    const firstPokemon = sortedPokemons[0];
    const lastPokemon = sortedPokemons[sortedPokemons.length - 1];

    expect(firstPokemon.id).toBe(expectedFirstPokemon.id);
    expect(lastPokemon.id).toBe(expectedLastPokemon.id);
  });
});
