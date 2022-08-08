import { createCar, getCar, getCars, updateCar } from "../controller/api/api";
import { generateCars } from "./carsCreator";
import { storage } from "./storage";

let changingCarId: number | null = null;

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
  changingCarId = id;
  inputName.value = car.name;
  inputColor.value = car.color;
}
export async function changeCar() {
  const inputName = document.getElementById('update-name') as HTMLInputElement;
  const inputColor = document.getElementById('update-color') as HTMLInputElement;
  const car = { name: inputName.value, color: inputColor.value }
  if (changingCarId) await updateCar(changingCarId, car);
  changingCarId = null;
}

