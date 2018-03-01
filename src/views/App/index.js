import { h } from "hyperapp"
import Slider from "./../Slider"
import ToggleMode from "./../ToggleMode"

export default ({ state, actions }) => (
	<main>
		<Slider state={state} actions={actions} />
		<h1 class="instruction">
			To change the order, drag and drop the card in <span> this </span> zone
		</h1>
		<ToggleMode state={state} actions={actions} />
	</main>
)
