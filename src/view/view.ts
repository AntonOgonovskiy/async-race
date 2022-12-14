import { ICar } from "../interfaces/interfaces";
import { createCarImage, getRandomColor, getRandomName } from "../model/carsCreator";
import { storage } from "../model/storage";

export function renderCar({ id, name, color }: ICar) {
  return `
    <div class="car-buttons">
      <button class="button update-car-button" id="update-car-${id}">Update</button>
      <button class="button remove-car-button" id="remove-car-${id}">Remove</button>
      <p class="car-name"> ${name} </p>
    </div>
    <div class="car-wrapper">
      <div class="car">
        <div class="start-buttons">
          <button class="small-button start-engine-btn" id="start-engine-car-${id}">Go</button>
          <button class="small-button stop-engine-btn" disabled id="stop-engine-car-${id}"}>Stop</button>
        </div>
        <div class="car-road">
          <div class="rider"id="car-${id}">
            ${createCarImage(color)}
          </div>
        </div>
      </div>
      <div class="flag flag-${id}">&#127988;</div>
    </div>`
}

export function renderGarage() {
  return `<h1>Garage (${storage.carsCount})</h1>
  <h2>Page №${storage.garagePage}</h2>
  <ul>
    ${storage.cars.map((car) => `
    <li>${renderCar(car)}</li>
    `).join('')}
  </ul>`
}

export function renderWinners() {
  return `<h1>Winners (${storage.winnersCount})</h1>
  <h2>Page №${storage.winnersPage}</h2>
  <table>
    <thead>
      <th id="sort-id" class = "table-button table-id">ID</th>
      <th>Car</th>
      <th>Name</th>
      <th id="sort-wins" class = "table-button table-win">Wins</th>
      <th id="sort-time" class = "table-button table-time">Time</th>
    </thead>
    <tbody>
      ${storage.winners.map((winner) => `
      <tr>
        <td>${winner.id}</td>
        <td>${createCarImage(winner.car.color)}</td>
        <td>${winner.car.name}</td>
        <td>${winner.wins}</td>
        <td>${winner.time}</td>
      </tr>`).join('')}
    </tbody>
  </table>
  `
}

export async function renderPage() {
  const page: string = `
  <div class="page-button">
    <button class="button garage-page-button" id="garage-page-btn">Garage</button>
    <button class="button winner-page-button" id="winner-page-btn">Winners</button>
  </div>
  <div class="garage" id="view-garage">
    <div class="car-creator">
      <form class="form" id="create">
        <input class="input" type="text" name="name" id="create-name" autocomplete="off" value='${getRandomName()}'>
        <input type="color" name="color" id="create-color" value="${getRandomColor()}">
        <button class="button create-car" type="button" id="create-btn">Create</button>
      </form>
      <form class="form" id="update">
        <input class="input" type="text" name="name" id="update-name">
        <input type="color" name="color" id="update-color" value="#ffffff">
        <button class="button update-car" type="button" id="update-btn">Update</button>
      </form>
    </div>
    <div class="race-control-buttons">
      <button  class="button race-btn" id="race">Race</button>
      <button class="button stop-race-btn" disabled id="stop">Reset</button>
      <button class="button list-car" id="add-car-btn">Add cars</button>
    </div>
    <div class="cars">
      ${renderGarage()}
    </div>
  </div>
  <div class="winners" id="view-winners">
  ${renderWinners()}
  </div>
  <div class="pagination">
    <button class="button prev-btn" id="prev-btn">prev</button>
    <button class="button next-btn" id="next-btn">next</button>
  </div>
  <p class="modal-window"></p>
  `
  const html: HTMLElement = document.createElement('div');
  html.classList.add('main-block')
  html.innerHTML = page;
  document.body.appendChild(html);
}
