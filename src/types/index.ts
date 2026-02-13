// Rick and Morty API response types
// See: https://rickandmortyapi.com/documentation

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: LocationReference;
  location: LocationReference;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type CharacterStatus = "Alive" | "Dead" | "unknown";
export type CharacterGender = "Female" | "Male" | "Genderless" | "unknown";

export interface LocationReference {
  name: string;
  url: string;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface ApiResponse<T> {
  info: PaginationInfo;
  results: T[];
}

export interface PaginationInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharacterFilters {
  name?: string;
  status?: CharacterStatus | "";
  gender?: CharacterGender | "";
  species?: string;
  page?: number;
}

export interface DateRange {
  from?: string; // ISO date string (e.g. "2017-11-04")
  to?: string; // ISO date string (e.g. "2017-11-10")
}
