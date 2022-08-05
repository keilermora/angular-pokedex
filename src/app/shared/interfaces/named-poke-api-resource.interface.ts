interface NamedPokeAPIResourceInterface {
  name: string;
  url?: string;
}

interface NamedPokeAPIResourceListInterface {
  count: number;
  next?: string;
  previous?: string;
  results: NamedPokeAPIResourceInterface[];
}

export default NamedPokeAPIResourceInterface;
export { NamedPokeAPIResourceListInterface };
