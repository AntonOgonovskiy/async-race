import { getCars, getWinners } from "../controller/api";
import { storage } from "./storage";

export async function updateCarStorage() {
  const carList = await getCars(storage.garagePage);
  storage.cars = carList.cars;
  storage.carsCount = carList.count;
}
export async function updateWinnerStorage() {
  const winnersList = await getWinners({ page: storage.winnersPage, limit: 10, sort: storage.sort, order: storage.sortOrder })
  storage.winners = winnersList.winners;
  storage.winnersCount = winnersList.count;
}
