import { getDrive, startEngine, stopEngine } from "../controller/api";
import { ICar, IRace, ISuccess } from "../interfaces/interfaces";
import { storage } from "./storage";

export async function startDrive(id: number) {
  const raceBtn = document.getElementById('race') as HTMLButtonElement;
  const startBtn = document.getElementById(`start-engine-car-${id}`) as HTMLButtonElement;
  const stopBtn = document.getElementById(`stop-engine-car-${id}`) as HTMLButtonElement;
  startBtn.disabled = true;
  raceBtn.disabled === true ? stopBtn.disabled = true : stopBtn.disabled = false;
  const car = document.getElementById(`car-${id}`) as HTMLElement;
  const { velocity, distance } = await startEngine(id);
  const time = Math.floor(distance / velocity);
  car.style.animationPlayState = "running";
  car.style.animationDuration = `${time}ms`;
  car.style.animationName = 'car-animation';
  const request = await getDrive(id);
  const success = request.success
  if (!success) {
    car.style.animationPlayState = "paused"
  }
  return { success, id, time }
}

export async function stopDrive(id: number) {
  try {
    await stopEngine(id);
    const car = document.getElementById(`car-${id}`) as HTMLElement;
    car.style.animationPlayState = "paused";
    const secCar = car.cloneNode(true);
    car?.parentNode?.replaceChild(secCar, car);
    const startBtn = document.getElementById(`start-engine-car-${id}`) as HTMLButtonElement;
    const stopBtn = document.getElementById(`stop-engine-car-${id}`) as HTMLButtonElement;
    startBtn.disabled = false;
    stopBtn.disabled = true;
  } catch {
    console.log('This is Error. You are too fast change page, animation did not yet stopped')
  }
}

export async function race(callback: (id: number) => Promise<ISuccess>) {
  const raceBtn = document.getElementById('race') as HTMLButtonElement;
  const winnerModal = document.querySelector('.modal-window') as HTMLElement;
  raceBtn.disabled = true;
  const promises = storage.cars.map((item) => callback(item.id));
  const winner = await raceWinner(
    promises,
    storage.cars.map((car) => car.id)
  );
  const message = `Winner is ${winner.name} with time ${winner.time}s`;
  winnerModal.innerText = message;
  setTimeout(() => winnerModal.innerText = '', 5000)
  return winner;
}

export async function stopRace() {
  const raceBtn = document.getElementById('race') as HTMLButtonElement;
  raceBtn.disabled = false;
  const stopBtn = document.getElementById('stop') as HTMLButtonElement;
  stopBtn.disabled = true;
  storage.cars.map((item) => stopDrive(item.id))
}

export async function raceWinner(promises: Promise<ISuccess>[], indexes: number[]): (Promise<IRace>) {
  const { success, id, time } = await Promise.race(promises);
  if (!success) {
    const indexFailed = indexes.findIndex((i) => i === id);
    const restOfPromises = [...promises.slice(0, indexFailed), ...promises.slice(indexFailed + 1, promises.length)];
    const restOfIndexes = [...indexes.slice(0, indexFailed), ...indexes.slice(indexFailed + 1, indexes.length)];
    return raceWinner(restOfPromises, restOfIndexes);
  }
  return { ...storage.cars.find((car) => car.id === id), time: +(time / 1000).toFixed(2) };
}
