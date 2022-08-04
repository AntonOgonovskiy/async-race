export interface ICar {
  id: number;
  name: string;
  color: string;
  isEngineStarted: boolean
}
export interface IStorage {
  garagePage: number;
  winnersPage: number;
  cars: ICar[];
  winner: {
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
