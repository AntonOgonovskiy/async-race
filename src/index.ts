import { renderPage } from "./view/view";
import "./styles/style.css"
import * as listeners from "./controller/listeners"
import { checkPageButtons } from "./model/pageBtns";
import { disableUpdateInput } from "./model/carsGenerator";

renderPage()
checkPageButtons()
disableUpdateInput()
listeners.engine()
listeners.racing()
listeners.carUpdater()
listeners.switchPage()
listeners.pageBtnsCheker()
