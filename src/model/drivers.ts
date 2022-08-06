import { getDrive, startEngine, stopEngine } from "../controller/api/api";
import { storage } from "./storage";

export async function startDrive(id: number) {
  const startBtn = document.getElementById(`start-engine-car-${id}`) as HTMLButtonElement;
  const stopBtn = document.getElementById(`stop-engine-car-${id}`) as HTMLButtonElement;
  startBtn.disabled = true;
  stopBtn.disabled = false;
  const car = document.getElementById(`car-${id}`) as HTMLElement;
  const { velocity, distance } = await startEngine(id);
  const time = Math.floor(distance / velocity);
  car.style.animationPlayState = "running";
  car.style.animationDuration = `${time}ms`;
  car.style.animationName = 'car-animation';
  const { request } = await getDrive(id)
  if (!request) {
    car.style.animationPlayState = "paused"
  }
  return { request, id, time }
}

export async function stopDrive(id: number) {
  await stopEngine(id);
  const car = document.getElementById(`car-${id}`) as HTMLElement;
  car.style.animationPlayState = "paused";
  const secCar = car.cloneNode(true);
  car?.parentNode?.replaceChild(secCar, car);
  const startBtn = document.getElementById(`start-engine-car-${id}`) as HTMLButtonElement;
  const stopBtn = document.getElementById(`stop-engine-car-${id}`) as HTMLButtonElement;
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

export async function race() {
  storage.cars.map((item) => startDrive(item.id))
}

export async function stopRace() {
  storage.cars.map((item) => stopDrive(item.id))
}
