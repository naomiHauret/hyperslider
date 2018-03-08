import { h } from "hyperapp"
import keyCodes from "./../../utils/keyCodes"

export default ({ actions, state, id, subtitle }) =>
	state.isEditor === true ? (
		<input
			tabindex="2"
			value={subtitle.text}
			oninput={(e) => actions.editSubTitle({ id: id, text: e.target.value })}
			onfocus={(e) => actions.setIsEditing({ value: true })}
			onblur={(e) => actions.setIsEditing({ value: false })}
			title={state.isEditor === true && "Click me to edit subtitle"}
			onkeydown={(e) => {
				switch (e.keyCode) {
					case keyCodes.enter:
						e.target.nextSibling.focus()
						break

					case keyCodes.escape:
						e.target.blur()
						break

					default:
						break
				}
			}}
		/>
	) : (
		subtitle.text !== null && subtitle.text.trim() !== "" && <h2>{subtitle.text}</h2>
	)
