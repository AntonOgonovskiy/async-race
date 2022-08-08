import { renderPage } from "./view/view";
import "./styles/style.css"
import * as listeners from "./controller/listeners"

renderPage()
listeners.engine()
listeners.racing()
listeners.carUpdater()
