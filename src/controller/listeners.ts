import { checkPageButtons } from "../model/pageBtns";
import { race, startDrive, stopDrive, stopRace } from "../model/carsDrivers";
import { changeCar, clearInput, disableUpdateInput, enableUpdateInput, fillInput, makeArrOfCars, makeCar, selectCar, updateCarStorage } from "../model/carsGenerator";
import { storage } from "../model/storage";
import { renderGarage } from "../view/view";
import { checkWinner, deleteCar, deleteWinner } from "./api";

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
  document.addEventListener('click', async (event) => {
    const target = event.target as HTMLButtonElement
    if (target?.classList.contains("race-btn")) {
      const prevPage = document.getElementById('prev-btn') as HTMLButtonElement;
      const nextPage = document.getElementById('next-btn') as HTMLButtonElement;
      const winners = document.getElementById('winner-page-btn') as HTMLButtonElement
      nextPage.disabled = true;
      prevPage.disabled = true;
      winners.disabled = true;
      const winner = await race(startDrive);
      await checkWinner(winner)
      const stopBtns = document.getElementById('stop') as HTMLButtonElement;
      stopBtns.disabled = false;
    }
    if (target?.classList.contains("stop-race-btn")) {
      stopRace();
      checkPageButtons();
    }
  })
}
export const carUpdater = () => {
  document.addEventListener('click', async (event) => {
    const target = event.target as HTMLButtonElement
    const div = document.querySelector('.cars');
    if (target?.classList.contains("create-car")) {
      await makeCar();
      await updateCarStorage();
      fillInput();
      if (div) div.innerHTML = renderGarage();
      checkPageButtons();
    }
    if (target?.classList.contains("remove-car-button")) {
      const id = +target.id.split("remove-car-")[1];
      await deleteCar(id);
      await deleteWinner(id);
      await updateCarStorage();
      if (div) div.innerHTML = renderGarage();
      if (storage.garagePage - (storage.carsCount / 7) === 1) {
        storage.garagePage--;
        await updateCarStorage();
        if (div) div.innerHTML = renderGarage();
      }
      checkPageButtons();
    }
    if (target?.classList.contains("list-car")) {
      await makeArrOfCars();
      await updateCarStorage();
      if (div) div.innerHTML = renderGarage();
    }
    if (target?.classList.contains("update-car-button")) {
      const id = +target.id.split("update-car-")[1];
      selectCar(id);
      enableUpdateInput()
    }
    if (target?.classList.contains("update-car")) {
      await changeCar();
      await updateCarStorage();
      if (div) div.innerHTML = renderGarage();
      clearInput()
      disableUpdateInput()
    }
  })
}
export const switchPage = () => {
  document.addEventListener('click', async (event) => {
    const target = event.target as HTMLButtonElement;
    const div = document.querySelector('.cars');
    if (target?.classList.contains("prev-btn")) {
      switch (storage.view) {
        case 'garage': {
          storage.garagePage--;
          await updateCarStorage();
          if (div) div.innerHTML = renderGarage();
          break;
        }
      }
    }
    if (target?.classList.contains("next-btn")) {
      switch (storage.view) {
        case 'garage': {
          storage.garagePage++;
          await updateCarStorage();
          if (div) div.innerHTML = renderGarage();
          break;
        }
      }
    }
  })
}
export const pageBtnsCheker = () => {
  document.addEventListener('click', async (event) => {
    const target = event.target as HTMLButtonElement;
    if (target?.classList.contains("prev-btn")) {
      checkPageButtons()
    }
    if (target?.classList.contains("next-btn")) {
      checkPageButtons()
    }
    if (target?.classList.contains("winner-page-button")) {
      checkPageButtons()
    }
    if (target?.classList.contains("garage-page-button")) {
      checkPageButtons()
    }
  })
}
export const selectView = () => {
  document.addEventListener('click', async (event) => {
    const target = event.target as HTMLButtonElement;
    const garage = document.getElementById("view-garage") as HTMLElement;
    const winner = document.getElementById("view-winners") as HTMLElement;
    if (target?.classList.contains("garage-page-button")) {
      storage.view = "garage";
      winner.style.display = "none";
      garage.style.display = "block";
      checkPageButtons()
    }
    if (target?.classList.contains("winner-page-button")) {
      storage.view = "winners";
      winner.style.display = "block";
      garage.style.display = "none";
      checkPageButtons()
    }
  })
}
