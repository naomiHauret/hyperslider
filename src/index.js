import { h, app } from "hyperapp"
import state from "./state"
import actions from "./actions"
import "./assets/css/index.css"
import App from "./views/App"

const view = (state, actions) => <App state={state} actions={actions} />

app(state, actions, view, document.body)
