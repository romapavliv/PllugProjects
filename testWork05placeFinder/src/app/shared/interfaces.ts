export interface DataLocation {
  query: string;
  radius: number;
  lat: number;
  lng: number;
}

export interface DataPlace {
  name: string;
  lng: number;
  lat: number;
  address?: string;
  city?: string;
}

export interface Checkbox {
  id: number;
  name: string;
  value: number | string;
  isSelected: boolean;
}
