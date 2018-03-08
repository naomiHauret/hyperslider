import { h } from "hyperapp"
import keyCodes from "./../../utils/keyCodes"
import cc from "classcat"

export default ({ actions, state, id, subtitle }) =>
	state.isEditor === true ? (
		<input
			className={cc({
				"transition relative pin-none z-20 bg-transparent": true,
				"text-base my-4 border-t-0 border-l-0 border-r-0 border-b-2 border-grey border-dashed focus:border-solid p-2":
					state.isSliderFullview === false,
				"text-3xl font-serif text-white text-center border-t-0 border-l-0 mt-4 mb-8 border-r-0 border-b-2 border-white w-sm":
					state.isSliderFullview === true,
			})}
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
		subtitle.text !== null &&
		subtitle.text.trim() !== "" && (
			<h2 className="relative pin-none z-20 text-3xl font-serif text-center text-white mt-4 mb-8 border-r-0  w-sm">
				{subtitle.text}
			</h2>
		)
	)
