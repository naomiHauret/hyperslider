import { h } from "hyperapp"

import Slider from "./../Slider"
import ToggleMode from "./../ToggleMode"
import ToggleFullview from "./../ToggleFullview"
export default ({ state, actions }) => (
	<main
		className="w-full"
		onmouseup={(e) => {
			e.preventDefault()
			if (state.isEditor === true && state.isSliderFullview === true) return actions.stopMoving()
		}}
		onmousemove={(e) => {
			e.preventDefault()
			if (state.isEditor === true && state.isSliderFullview === true) return actions.move({ x: e.pageX, y: e.pageY })
		}}
	>
		<div class="fixed pin-t pin-r z-20">
			<ToggleMode state={state} actions={actions} />
			{state.isEditor === true && (
				<div className="">
					<ToggleFullview state={state} actions={actions} />
				</div>
			)}
		</div>

		<Slider state={state} actions={actions} />
		{state.isEditor === false && (
			<div>
				<div>
					{state.items.map((el) => el.id === state.currentItem.id && el.position + 1)}/{state.items.length}
				</div>
				<progress className="w-full" value={state.currentItem.position} max={state.items.length - 1}>
					{state.currentItem.position === 0 ? 1 : state.currentItem.position}
				</progress>
			</div>
		)}
		{state.isEditor === true &&
			state.isSliderFullview === false && (
				<h1>
					To change the order, drag and drop the card in <span> this </span> zone
				</h1>
			)}
	</main>
)
