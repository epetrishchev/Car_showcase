import { MouseEventHandler } from "react"

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisaled?: boolean;
}
export interface SearchManufacturerProps {
  selected: string;
  setSelected: (selected: string) => void;
}

export interface SearchBarProps {
  setManuFacturer: (manufacturer: string) => void;
  setModel: (model: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export type CarState = CarProps[] & { message?: string };


export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMpg: number;
}
export interface FilterProps {
  manufacturer?: string;
  model?: string;
  year?: number;
  fuel?: string;
  limit?: number;
}
export interface HomeProps {
  searchParams: FilterProps;
}

export interface OptionProps{
  title: string;
  value: string;
}
export interface CustomFilterProps<T> {
  options: OptionProps[];
  setFilter: (selected: T) => void;
}

export interface ShowMoweProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (limit: number) => void;
}