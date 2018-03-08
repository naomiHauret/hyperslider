import { h } from "hyperapp"

import keyCodes from "./../../utils/keyCodes"

import Slider from "./../Slider"
import ToggleMode from "./../ToggleMode"
import ToggleFullview from "./../ToggleFullview"

export default ({ state, actions }) => (
	<main
		className="w-full"
		onkeydown={(e) => {
			switch (e.keyCode) {
				case keyCodes.previous:
					if (state.isEditing === false) {
						if (state.isSliderFullview === false)
							state.currentItem.position - 1 >= 0
								? e.target.previousSibling.focus()
								: e.target.parentNode.lastElementChild.focus()
						return actions.goToPreviousSlide({ position: state.currentItem.position })
					}
					break

				case keyCodes.next:
					if (state.isEditing === false) {
						if (state.isSliderFullview === false)
							state.currentItem.position + 1 < state.items.length
								? e.target.nextSibling.focus()
								: e.target.parentNode.firstChild.focus()
						return actions.goToNextSlide({ position: state.currentItem.position })
					}
					break

				case keyCodes.alt && keyCodes.number1:
					actions.setEditorMode({ value: !state.isEditor })
					break

				case keyCodes.alt && keyCodes.number2:
					actions.setSliderFullview({ value: !state.isSliderFullview })
					break

				default:
					break
			}
		}}
	>
		<div className="fixed pin-t pin-r z-20">
			<ToggleMode state={state} actions={actions} />
			{state.isEditor === true && (
				<div className="">
					<ToggleFullview state={state} actions={actions} />
				</div>
			)}
		</div>

		<Slider
			state={state}
			actions={actions}
			onupdate={(element) => {
				return element.childNodes.forEach((child, index) => index === state.currentItem.position && child.focus())
			}}
		/>
		{(state.isEditor === false || state.isSliderFullview === true) && (
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
