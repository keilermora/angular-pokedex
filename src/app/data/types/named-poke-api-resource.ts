interface NamedPokeAPIResource {
  name: string;
  url?: string;
}

interface NamedPokeAPIResourceList {
  count: number;
  next?: string;
  previous?: string;
  results: NamedPokeAPIResource[];
}

export default NamedPokeAPIResource;
export { NamedPokeAPIResourceList };
