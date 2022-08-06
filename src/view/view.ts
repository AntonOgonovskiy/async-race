import { ICar } from "../interfaces/interfaces";
import { createCarImage } from "../model/cars";
import { storage } from "../model/storage";

export function renderCar({ id, name, color }: ICar) {
  return `
    <div class="car-buttons">
      <button class="button car-button" id="update-car-${id}">Update</button>
      <button class="button car-button" id="remove-car-${id}">Remove</button>
      <p class="car-name"> ${name} </p>
    </div>
    <div class="car-wrapper">
      <div class="car">
        <div class="start-buttons">
          <button class="small-button engine" id="start-engine-car-${id}">Go</button>
          <button class="small-button engine" id="stop-engine-car-${id}"}>Stop</button>
        </div>
        <div class="car-img" id="car-${id}">
          ${createCarImage(color)}
        </div>
      </div>
      <div class="flag flag-${id}">&#127988;</div>
    </div>`
}

function renderGarage() {
  return `<h1>Garage (${storage.carsCount})</h1>
  <h2>Page №${storage.garagePage}</h2>
  <ul>
    ${storage.cars.map((car) => `
    <li>${renderCar(car)}</li>
    `).join('')}
  </ul>`
}

function renderWinners() {
  return `<h1>Winners (${storage.winnersCount})</h1>
  <h2>Page №${storage.winnersPage}</h2>
  <table>
    <thead>
      <th>Number</th>
      <th>Car</th>
      <th>Name</th>
      <th id="sort-wins" class = "table-button table-win" ${storage.sort === 'wins' ? storage.sortOrder : ''}>Wins</th>
      <th id="sort-time" class = "table-button table-time" ${storage.sort === 'wins' ? storage.sortOrder : ''}>Time</th>
    </thead>
    <tbody>
      ${storage.winners.map((winner, i) => `
      <tr>
        <td>${i + 1}</td>
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
  <div class="garage">
    <div class="car-creator">
      <form class="form" id="create">
        <input class="input" type="text" name="name" id="create-name" autocomplete="off">
        <input type="color" name="color" id="create-color" value="#ffffff">
        <button class="button" id="create-btn">Create</button>
      </form>
      <form class="form" id="update">
        <input class="input" type="text" name="name" id="update-name">
        <input type="color" name="color" id="update-color" value="#ffffff">
        <button class="button" id="update-btn">Update</button>
      </form>
    </div>
    <div class="race-control-buttons">
      <button class="button" id="race">Race</button>
      <button class="button" id="stop">Stop</button>
      <button class="button" id="add-car-btn">Add cars</button>
    </div>
    <div class="cars">
      ${renderGarage()}
    </div>
  </div>
  <div class="winners">
    
  </div>
  <div class="pagination">
    <button class="button" disabled id="prev-btn">prev</button>
    <button class="button" disabled id="next-btn">next</button>
  </div> `
  const html: HTMLElement = document.createElement('div');
  html.innerHTML = page;
  document.body.appendChild(html);
}
