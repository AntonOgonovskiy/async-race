import { startDrive } from "../../model/drivers";

export const go = () => {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLButtonElement
    if (target?.classList.contains("start-engine-btn")) {
      const id = +target.id.split("start-engine-car-")[1];
      startDrive(id);
    }
  })
}

