export interface ICar {
  getBoundingClientRect: any;
  id: number;
  name: string;
  color: string;
}
export interface IStorage {
  garagePage: number;
  winnersPage: number;
  cars: ICar[];
  winners: {
    id: number;
    wins: number;
    time: number;
    car: ICar;
  }[];
  carsCount: number;
  winnersCount: number;
  view: string;
  sort: string;
  sortOrder: string;
}
export interface ICarCreate {
  name: string,
  color: string
}
export interface IWinner {
  id?: number,
  wins: number,
  time: number
}
export interface IWinners {
  page: number,
  limit?: number,
  sort?: string,
  order?: string
}
export interface IRace {
  name?: string;
  color?: string;
  id?: number;
  time: number;
}
export interface ISuccess {
  success: boolean;
  id: number;
  time: number;
}
