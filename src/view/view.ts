import { ICar } from "../interfaces/interfaces";
import { createCarImage } from "../model/cars/cars";
import { storage } from "../storage";

export function renderCar({ id, name, color, isEngineStarted }: ICar) {
  ` <div class="car-buttons">
  <button class="button car-button" id="update-car-${id}">Update</button>
  <button class="button car-button" id="remove-car-${id}>Remove</button>
  <p class=" car-name">${name}</p>
</div>
<div class="car-wrapper">
  <div class="car">
    <div class="start-buttons">
      <button class="small-button engine" id="start-engine-car-${id}" ${isEngineStarted ? 'disabled' : ''}>Go</button>
      <button class="small-button engine" id="stop-engine-car-${id}" ${!isEngineStarted ? 'disabled' : ''}>Stop</button>
    </div>
    <div class="car" id="car-${id}">
      ${createCarImage(color)}
    </div>
  </div>
  <div class="flag-${id}">&#127988;</div>
</div>`
}

export function renderGarage() {
  `<h1>Garage (${storage.carsCount})</h1>
  <h2>Page №${storage.garagePage}</h2>
  <ul>
    ${storage.cars.map((car) => `
    <li>${renderCar(car)}</li>
    `).join('')}
  </ul>`
}

export function renderWinners() {
  `<h1>Winners (${storage.winnersCount})</h1>
  <h2>Page №${storage.winnersPage}</h2>
  <table>
    <thead>
      <th>Number</th>
      <th>Car</th>
      <th>Name</th>
      <th>Wins</th>
      <th>Time</th>
    </thead>
    <tbody>
      ${storage.winner.map((winner, i) => `
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
