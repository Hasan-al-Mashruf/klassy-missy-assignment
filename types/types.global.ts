export interface IRegiment {
  uuid: string;
  name: string;
  date: string;
  status: string;
  creator: string;
}

export interface Option {
  value: string;
  label: string;
}

export interface IUser {
  uuid: number | string;
  name: string;
  gender: string;
  concern: string;
  dob: Date;
  isautheticated: boolean;
}

export interface IColumn {
  title: string;
  id: string;
  items: IRegiment[] | [];
}
