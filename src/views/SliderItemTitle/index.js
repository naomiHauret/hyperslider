import { h } from "hyperapp"
import keyCodes from "./../../utils/keyCodes"

export default ({ actions, state, id, title }) =>
	state.isEditor === true ? (
		<input
			tabindex="2"
			value={title.text}
			oninput={(e) => actions.editMainTitle({ id: id, text: e.target.value })}
			onfocus={(e) => actions.setIsEditing({ value: true })}
			onblur={(e) => actions.setIsEditing({ value: false })}
			title={state.isEditor === true && "Click me to edit title"}
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
		title.text !== null && title.text.trim() !== "" && <h1>{title.text}</h1>
	)
