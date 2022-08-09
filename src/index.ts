import { renderPage } from "./view/view";
import "./styles/style.css"
import * as listeners from "./controller/listeners"
import { checkPageButtons } from "./model/pageBtns";
import { disableUpdateInput } from "./model/carsGenerator";

renderPage()
checkPageButtons()
disableUpdateInput()
listeners.selectView()
listeners.engine()
listeners.racing()
listeners.carUpdater()
listeners.switchPage()
listeners.pageBtnsCheker()
listeners.selectSortAndOrder()
alert("Hello. I hope I've done everithing. But I can be wrong. If you have any comments, please write me in discord: @AntonOgonovskiy#2467. Good luck!")
