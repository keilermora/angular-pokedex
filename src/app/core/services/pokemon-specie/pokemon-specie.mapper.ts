import Mapper from '../../base/mapper';
import { PokemonSpecieEntity, PokemonV2Pokemonspeciesflavortexts } from './pokemon-specie.entity';
import { FlavorText, PokemonSpecieModel } from './pokemon-specie.model';

const PokemonSpecieMapper: Mapper<PokemonSpecieEntity, PokemonSpecieModel> = {
  mapFrom: (pokemonSpecieEntity: PokemonSpecieEntity): PokemonSpecieModel => {
    const {
      id,
      name,
      pokemon_v2_pokemonspeciesflavortexts,
      pokemon_v2_pokemonspeciesnames,
      pokemon_v2_pokemons,
    } = pokemonSpecieEntity;

    // Remove duplicated entries between versions
    let flavorTexts: FlavorText[] = [];
    pokemon_v2_pokemonspeciesflavortexts.forEach(
      (flavorTextEntity: PokemonV2Pokemonspeciesflavortexts) => {
        const elementFound = flavorTexts.find(
          (flavorTextEntry) =>
            flavorTextEntry.text === flavorTextEntity.flavor_text.replace(/\f/g, ' ')
        );
        if (elementFound) {
          elementFound.versionNames.push(flavorTextEntity.pokemon_v2_version.name);
        } else {
          flavorTexts.push({
            text: flavorTextEntity.flavor_text.replace(/\f/g, ' '),
            versionNames: [flavorTextEntity.pokemon_v2_version.name],
          });
        }
      }
    );

    return {
      id: id,
      name: name,
      genus: pokemon_v2_pokemonspeciesnames[0].genus,
      weight: pokemon_v2_pokemons[0].weight,
      height: pokemon_v2_pokemons[0].height,
      sprite: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id
        .toString()
        .padStart(3, '0')}.png`,
      flavorTexts: flavorTexts,
      types: pokemon_v2_pokemons[0].pokemon_v2_pokemontypes.map(({ pokemon_v2_type }) => ({
        name: pokemon_v2_type.name,
      })),
      stats: pokemon_v2_pokemons[0].pokemon_v2_pokemonstats.map(
        ({ base_stat, pokemon_v2_stat }) => ({
          name: pokemon_v2_stat.name,
          value: base_stat,
        })
      ),
    };
  },
};

export default PokemonSpecieMapper;
