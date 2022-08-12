import { PokemonTypePipe } from './pokemon-type.pipe';

describe('PokemonTypePipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonTypePipe();
    expect(pipe).toBeTruthy();
  });
});
