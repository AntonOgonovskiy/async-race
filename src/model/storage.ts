import { IStorage } from "../interfaces/interfaces";
import { getCars, getWinners } from "../controller/api";

const { cars: cars, count: carsCount } = await getCars(1)
const { winners: winners, count: winnersCount } = await getWinners({ page: 1, limit: 10, sort: "time", order: "asc" })

export const storage: IStorage = {
  garagePage: 1,
  winnersPage: 1,
  cars,
  winners,
  carsCount,
  winnersCount,
  view: "garage",
  sort: "time",
  sortOrder: "asc",
};
