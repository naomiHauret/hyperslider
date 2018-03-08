import { h } from "hyperapp"
import keyCodes from "./../../utils/keyCodes"

export default ({ state, actions }) => (
	<label
		tabindex="-1"
		className="text-grey-darker"
		onkeydown={(e) => {
			switch (e.keyCode) {
				case keyCodes.enter:
					e.target.click()
					break

				case keyCodes.escape:
					e.target.blur()
					break

				default:
					e.stopPropagation()
					break
			}
		}}
	>
		<input
			type="checkbox"
			onclick={(e) => actions.setSliderFullview({ value: e.target.checked })}
			checked={state.isSliderFullview === true}
			tabindex="-1"
		/>
		Fullview ?
	</label>
)
