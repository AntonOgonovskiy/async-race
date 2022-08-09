import { storage } from "./storage";

export function checkPageButtons() {
  const garagePage = document.getElementById('garage-page-btn') as HTMLButtonElement;
  const winnerPage = document.getElementById('winner-page-btn') as HTMLButtonElement;
  const prevPage = document.getElementById('prev-btn') as HTMLButtonElement;
  const nextPage = document.getElementById('next-btn') as HTMLButtonElement;
  const garagePages = Math.ceil(storage.carsCount / 7)
  const winnersPages = Math.ceil(storage.winnersCount / 10)
  switch (storage.view) {
    case 'garage': {
      garagePage.disabled = true;
      winnerPage.disabled = false;
      if (garagePages === 1) {
        nextPage.disabled = true;
        prevPage.disabled = true;
      } else if (storage.garagePage === 1) {
        prevPage.disabled = true;
        nextPage.disabled = false;
      } else if (storage.garagePage === garagePages) {
        prevPage.disabled = false;
        nextPage.disabled = true;
      } else if (storage.garagePage > 1 && storage.garagePage < garagePages) {
        prevPage.disabled = false;
        nextPage.disabled = false;
      }
      break
    }
    case 'winners': {
      garagePage.disabled = false;
      winnerPage.disabled = true;
      if (winnersPages === 1) {
        nextPage.disabled = true;
        prevPage.disabled = true;
      } else if (storage.winnersPage === 1) {
        prevPage.disabled = true;
        nextPage.disabled = false;
      } else if (storage.winnersPage === winnersPages) {
        prevPage.disabled = false;
        nextPage.disabled = true;
      } else if (storage.winnersPage > 1 && storage.winnersPage < winnersPages) {
        prevPage.disabled = false;
        nextPage.disabled = false;
      }
      break
    }
  }


}
export function disableBtnsWhileRace() {
  const prevPage = document.getElementById('prev-btn') as HTMLButtonElement;
  const nextPage = document.getElementById('next-btn') as HTMLButtonElement;
  const winners = document.getElementById('winner-page-btn') as HTMLButtonElement
  nextPage.disabled = true;
  prevPage.disabled = true;
  winners.disabled = true;
}
