import { race, startDrive, stopDrive, stopRace } from "../../model/drivers";

export const engine = () => {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLButtonElement
    if (target?.classList.contains("start-engine-btn")) {
      const id = +target.id.split("start-engine-car-")[1];
      startDrive(id);
    }
    if (target?.classList.contains("stop-engine-btn")) {
      const id = +target.id.split("stop-engine-car-")[1];
      stopDrive(id);
    }
  })
}
export const racing = () => {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLButtonElement
    if (target?.classList.contains("race-btn")) {
      race(startDrive);
    }
    if (target?.classList.contains("stop-race-btn")) {
      stopRace();
    }
  })
}

