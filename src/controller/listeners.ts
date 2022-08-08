import { race, startDrive, stopDrive, stopRace } from "../model/carsDrivers";
import { changeCar, makeArrOfCars, makeCar, selectCar, updateCarStorage } from "../model/carsGenerator";
import { renderGarage } from "../view/view";
import { deleteCar, deleteWinner } from "./api";

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
export const carUpdater = () => {
  document.addEventListener('click', async (event) => {
    const target = event.target as HTMLButtonElement
    const div = document.querySelector('.cars');
    if (target?.classList.contains("create-car")) {
      makeCar()
    }
    if (target?.classList.contains("remove-car-button")) {
      const id = +target.id.split("remove-car-")[1];
      await deleteCar(id);
      await deleteWinner(id)
      await updateCarStorage()
      if (div) div.innerHTML = renderGarage()
    }
    if (target?.classList.contains("list-car")) {
      await makeArrOfCars();
      await updateCarStorage()
      if (div) div.innerHTML = renderGarage()
    }
    if (target?.classList.contains("update-car-button")) {
      const id = +target.id.split("update-car-")[1];
      selectCar(id);
    }
    if (target?.classList.contains("update-car")) {
      console.log('hi')
      await changeCar()
      await updateCarStorage()
      if (div) div.innerHTML = renderGarage()
    }
  })
}
