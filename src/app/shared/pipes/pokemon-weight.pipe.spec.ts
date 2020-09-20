import { PokemonWeightPipe } from './pokemon-weight.pipe';

describe('PokemonWeightPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonWeightPipe();
    expect(pipe).toBeTruthy();
  });
});
