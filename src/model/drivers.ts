import { getDrive, startEngine } from "../controller/api/api";

export async function startDrive(id: number) {
  console.log(id)
  const startBtn = document.getElementById(`start-engine-car-${id}`) as HTMLButtonElement;
  const stopBtn = document.getElementById(`stop-engine-car-${id}`) as HTMLButtonElement;
  const car = document.getElementById(`car-${id}`) as HTMLElement;
  const { velocity, distance } = await startEngine(id);
  console.log(velocity, distance)
  startBtn.disabled = true;
  stopBtn.disabled = false;
  const time = Math.floor(distance / velocity);
  car.style.animationDuration = `${time}ms`;
  car.style.animationName = 'car-animation';
  const { request } = await getDrive(id)
  return { request, id, time }
}
