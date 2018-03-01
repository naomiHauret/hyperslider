import { h, app } from "hyperapp"
import logger from "@hyperapp/logger"

import state from "./state"
import actions from "./actions"

import "./assets/css/index.css"
import App from "./views/App"

const view = (state, actions) => <App state={state} actions={actions} />

process.env.NODE_ENV === "production"
	? logger()(app)(state, actions, view, document.body)
	: app(state, actions, view, document.body)
