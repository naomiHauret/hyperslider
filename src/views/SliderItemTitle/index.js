import { h } from "hyperapp"
import keyCodes from "./../../utils/keyCodes"
import cc from "classcat"

export default ({ actions, state, id, title }) =>
	state.isEditor === true ? (
		<input
			className={cc({
				"font-sans transition relative pin-none z-20 bg-transparent": true,
				"text-base border-t-0 border-l-0 border-r-0 border-b-2 border-grey border-dashed focus:border-solid p-2":
					state.isSliderFullview === false,
				"text-5xl font-serif text-white text-center border-t-0 border-l-0 border-r-0 border-b-2 border-white": state.isSliderFullview === true,
			})}
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
		title.text !== null && title.text.trim() !== "" && <h1 className="relative pin-none z-20 text-5xl font-serif text-white text-center">{title.text}</h1>
	)
