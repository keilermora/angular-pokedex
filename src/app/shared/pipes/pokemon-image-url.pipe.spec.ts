import { PokemonImageUrlPipe } from './pokemon-image-url.pipe';

describe('PokemonImageUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonImageUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
