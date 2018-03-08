import { h } from "hyperapp"
import keyCodes from "./../../utils/keyCodes"

export default ({ state, actions }) => (
	<div role="radiogroup">
		<label
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
			tabindex="-1"
		>
			<input
				tabindex="-1"
				type="radio"
				checked={state.isEditor === false}
				onclick={(e) => actions.setEditorMode({ value: false })}
			/>
			View
		</label>

		<label
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
			tabindex="-1"
		>
			<input
				type="radio"
				checked={state.isEditor === true}
				onclick={(e) => actions.setEditorMode({ value: true })}
				tabindex="-1"
			/>
			Edit
		</label>
	</div>
)
