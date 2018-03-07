import { h, app } from "hyperapp"
import logger from "@hyperapp/logger"

import state from "./state"
import actions from "./actions"

import App from "./views/App"
import "./assets/css/index.css"

const view = (state, actions) => <App state={state} actions={actions} />

process.env.NODE_ENV === "production"
    ? app(state, actions, view, document.body)
    : logger()(app)(state, actions, view, document.body)
