import { createCar, getCar, getCars } from "../controller/api/api";
import { generateCars } from "./carsCreator";
import { storage } from "./storage";

export async function makeCar() {
  const inputName = document.getElementById('create-name') as HTMLInputElement;
  const inputColor = document.getElementById('create-color') as HTMLInputElement;
  const name = inputName?.value
  const color = inputColor?.value
  createCar({ name: name, color: color })
}

export async function updateCarStorage() {
  const carList = await getCars(storage.garagePage);
  storage.cars = carList.cars;
  storage.carsCount = carList.count;
}

export async function makeArrOfCars() {
  const arr = generateCars();
  arr.forEach((car) => createCar(car))
}
export async function selectCar(id: number) {
  const inputName = document.getElementById('update-name') as HTMLInputElement;
  const inputColor = document.getElementById('update-color') as HTMLInputElement;
  const car = await getCar(id);
  inputName.value = car.name;
  inputColor.value = car.color;
}
export async function changeCar(id: number) {
  const inputName = document.getElementById('update-name') as HTMLInputElement;
  const inputColor = document.getElementById('update-color') as HTMLInputElement;
  const car = await getCar(id);
  inputName.value = car.name;
  inputColor.value = car.color;
}

