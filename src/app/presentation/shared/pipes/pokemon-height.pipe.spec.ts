import { PokemonHeightPipe } from './pokemon-height.pipe';

describe('PokemonHeightPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonHeightPipe();
    expect(pipe).toBeTruthy();
  });
});
