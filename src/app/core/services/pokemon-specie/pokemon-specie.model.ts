interface PokemonSpecieModel {
  genus: string;
  flavorTextEntries: FlavorTextEntryModel[];
}

interface FlavorTextEntryModel {
  flavorText: string;
  version: VersionModel;
}

interface VersionModel {
  name: string;
}

export default PokemonSpecieModel;
export { FlavorTextEntryModel, VersionModel };
