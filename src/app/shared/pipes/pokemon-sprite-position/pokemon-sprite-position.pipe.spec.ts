import PokedexVersionModel from 'src/app/core/services/pokedex-version/pokedex-version.model';
import { pokedexVersions } from 'src/app/data/mocks/pokedex-versions.mock';
import { PokemonSpritePositionPipe } from './pokemon-sprite-position.pipe';

describe('PokemonSpritePositionPipe', () => {
  const pipe = new PokemonSpritePositionPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms sprite position based on pokemonNumber and pokedexVersion', () => {
    const pokemonNumber = 1;
    const pokedexVersion: PokedexVersionModel = pokedexVersions[0];

    const expectedResult = {
      backgroundImage: 'url(/assets/images/pokemon-green.png)',
      backgroundPosition: '-0px -0px',
      height: '56px',
      width: '56px',
    };

    const result = pipe.transform(pokemonNumber, pokedexVersion);

    expect(result.backgroundImage).toBe(expectedResult.backgroundImage);
    expect(result.backgroundPosition).toBe(expectedResult.backgroundPosition);
    expect(result.height).toBe(expectedResult.height);
    expect(result.width).toBe(expectedResult.width);
  });
});
