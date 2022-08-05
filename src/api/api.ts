import { ICar, ICarCreate, IWinner, IWinners } from "../interfaces/interfaces";
import { storage } from "../model/storage";

const server = 'http://127.0.0.1:3000'
const garage = `${server}/garage`;
const engine = `${server}/engine`;
const winners = `${server}/winners`;

export async function getCars(page: number, limit = 7): Promise<{ cars: ICar[], count: number }> {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  return {
    cars: await response.json(),
    count: Number(response.headers.get("X-Total-Count"))
  }
}

export async function getCar(id: number) {
  const response = await fetch(`${garage}/:${id}`);
  return response.json();
}

export async function deleteCar(id: number) {
  const response = await fetch(`${garage}/:${id}`, {
    method: 'DELETE',
  })
  return response.json()
}

export async function createCar(body: ICarCreate) {
  const response = await fetch(`${garage}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  return response.json()
}

export async function updateCar(id: number, body: ICarCreate) {
  const response = await fetch(`${garage}/:${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  return response.json()
}

export async function getWinners({ page, limit = 10, sort, order }: IWinners) {
  const response = await fetch(`${winners}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
  return {
    winners: await response.json(),
    count: Number(response.headers.get("X-Total-Count"))
  }
}

export async function getWinner(id: number) {
  const response = await fetch(`${winners}/:${id}`);
  return response.json()
}

export async function createWinner(body: IWinner) {
  const response = await fetch(`${winners}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}

export async function deleteWinner(id: number) {
  const response = await fetch(`${winners}/:${id}`, {
    method: 'DELETE',
  })
  return response.json()
}

export async function updateWinner(id: number, body: IWinner) {
  const response = await fetch(`${winners}/:${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  return response.json()
}
