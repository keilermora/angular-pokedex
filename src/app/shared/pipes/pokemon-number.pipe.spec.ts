import { PokemonNumberPipe } from './pokemon-number.pipe';

describe('PokemonNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
