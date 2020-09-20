import { PokemonStatPipe } from './pokemon-stat.pipe';

describe('PokemonStatPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonStatPipe();
    expect(pipe).toBeTruthy();
  });
});
