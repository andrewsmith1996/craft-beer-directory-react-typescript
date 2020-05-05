import { FilterState } from "./Filters.interface";

export interface FilterActions {
  onHopFilterChange: (hopName: string) => void;
}

export interface FilterUpdate {
  onFilterUpdate: (filters: FilterState) => void;
}