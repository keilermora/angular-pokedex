import { environment } from '@env';
import Mapper from '@app/base/mapper';
import PokemonSpecieModel, {
  FlavorTextEntryModel,
  VersionModel,
} from '@app/domain/pokemon-specie/pokemon-specie.model';
import PokemonSpecieEntity, { FlavorTextEntryEntity, GeneraEntity } from './pokemon-specie.entity';

const PokemonSpecieMapper: Mapper<PokemonSpecieEntity, PokemonSpecieModel> = {
  mapFrom: (pokemonSpecieEntity: PokemonSpecieEntity): PokemonSpecieModel => {
    // Find genus
    const generaEntity: GeneraEntity | undefined = pokemonSpecieEntity.genera.find(
      (genera: GeneraEntity) => genera.language.name === environment.language
    );

    // Filter flavor text entries by language
    let flavorTextEntriesEntity: FlavorTextEntryEntity[] =
      pokemonSpecieEntity.flavor_text_entries.filter(
        (flavorTextEntry: FlavorTextEntryEntity) =>
          flavorTextEntry.language.name === environment.language
      );

    // Remove duplicated entries
    flavorTextEntriesEntity = flavorTextEntriesEntity.reduce(
      (acc: FlavorTextEntryEntity[], cur: FlavorTextEntryEntity) => {
        const elementFound: FlavorTextEntryEntity | undefined = acc.find(
          (flavorTextEntry: FlavorTextEntryEntity) =>
            flavorTextEntry.version.name === cur.version.name
        );
        return elementFound ? acc : acc.concat([cur]);
      },
      []
    );

    // Remove duplicated entries between versions
    flavorTextEntriesEntity = flavorTextEntriesEntity.reduce(
      (acc: FlavorTextEntryEntity[], cur: FlavorTextEntryEntity) => {
        const elementFound: FlavorTextEntryEntity | undefined = acc.find(
          (flavorTextEntry: FlavorTextEntryEntity) =>
            flavorTextEntry.flavor_text === cur.flavor_text
        );
        if (elementFound) {
          elementFound.flavor_text = '';
        }
        return acc.concat([cur]);
      },
      []
    );

    let flavorTextEntriesModel: FlavorTextEntryModel[] = flavorTextEntriesEntity.map(
      (flavorTextEntryEntity: FlavorTextEntryEntity): FlavorTextEntryModel => {
        const version: VersionModel = {
          name: flavorTextEntryEntity.version.name || '',
        };

        return {
          flavorText: flavorTextEntryEntity.flavor_text.replace(/\f/g, ' '),
          version: version,
        };
      }
    );

    return {
      genus: generaEntity?.genus || '',
      flavorTextEntries: flavorTextEntriesModel,
    };
  },
};

export default PokemonSpecieMapper;
