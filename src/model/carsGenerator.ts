import { createCar, getCar, getCars, updateCar } from "../controller/api";
import { generateCars, getRandomColor, getRandomName } from "./carsCreator";

let changingCarId: number | null = null;

export async function makeCar() {
  const inputName = document.getElementById('create-name') as HTMLInputElement;
  const inputColor = document.getElementById('create-color') as HTMLInputElement;
  const name = inputName?.value
  const color = inputColor?.value
  await createCar({ name: name, color: color })
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

export function fillInput() {
  const inputName = document.getElementById('create-name') as HTMLInputElement;
  const inputColor = document.getElementById('create-color') as HTMLInputElement;
  inputName.value = getRandomName();
  inputColor.value = getRandomColor();
}
export function clearInput() {
  const inputName = document.getElementById('update-name') as HTMLInputElement;
  const inputColor = document.getElementById('update-color') as HTMLInputElement;
  inputName.value = '';
  inputColor.value = '#ffffff'
}
export function disableUpdateInput() {
  const inputName = document.getElementById('update-name') as HTMLInputElement;
  const inputColor = document.getElementById('update-color') as HTMLInputElement;
  const updateBtn = document.getElementById('update-btn') as HTMLButtonElement;
  inputName.disabled = true;
  inputColor.disabled = true;
  updateBtn.disabled = true;
}

export function enableUpdateInput() {
  const inputName = document.getElementById('update-name') as HTMLInputElement;
  const inputColor = document.getElementById('update-color') as HTMLInputElement;
  const updateBtn = document.getElementById('update-btn') as HTMLButtonElement;
  inputName.disabled = false;
  inputColor.disabled = false;
  updateBtn.disabled = false;
}

