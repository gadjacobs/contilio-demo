export interface IAttributes {
  name: string;
  value: number;
  unit: string;
}

export interface IData {
  title: string;
  attributes: IAttributes[];
}