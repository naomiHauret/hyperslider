import { h } from "hyperapp"
import Slider from "./../Slider"
import ToggleMode from "./../ToggleMode"

export default ({ state, actions }) => (
	<main
		onmouseup={e => {
				e.preventDefault()
				if(state.isEditor === true && state.isSliderFullview === true) return actions.stopMoving()
			}
		}
		onmousemove={e => {
			e.preventDefault()
			if(state.isEditor === true && state.isSliderFullview === true) return actions.move({ x: e.pageX, y: e.pageY })}
		}
	>
		<Slider state={state} actions={actions} />
		<h1>
			To change the order, drag and drop the card in <span> this </span> zone
		</h1>
		<ToggleMode state={state} actions={actions} />
	</main>
)
