import { h } from "hyperapp"
import keyCodes from "./../../utils/keyCodes"

export default ({ actions, state, id, paragraph }) =>
	state.isEditor === true ? (
		<textarea
			className="relative pin-none z-20"
			tabindex="2"
			value={paragraph.text}
			oninput={(e) => actions.editParagraph({ id: id, text: e.target.value })}
			onfocus={(e) => actions.setIsEditing({ value: true })}
			onblur={(e) => actions.setIsEditing({ value: false })}
			title={state.isEditor === true && "Click me to edit paragraph"}
			onkeydown={(e) => {
				switch (e.keyCode) {
					case keyCodes.escape:
						e.target.blur()
					default:
						break
				}
			}}
		/>
	) : (
		paragraph.text !== null && paragraph.text.trim() !== "" && <p className="relative pin-none z-20">{paragraph.text}</p>
	)
