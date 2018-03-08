import { h } from "hyperapp"
import keyCodes from "./../../utils/keyCodes"
import cc from "classcat"

export default ({ actions, state, id, paragraph }) =>
	state.isEditor === true ? (
		<textarea
			className={cc({
				"relative pin-none z-20 bg-none border-transparent font-sans bg-transparent": true,
				"border-t-0 border-l-0 border-r-0 border-b-2 border-grey border-dashed focus:border-solid p-2 text-base":
					state.isSliderFullview === false,
				"text-center border-t-0 border-l-0 border-r-0 border-b-2 border-white text-white text-xl w-sm":
					state.isSliderFullview === true,
			})}
			tabindex="2"
			value={paragraph.text}
			oninput={(e) => actions.editParagraph({ id: id, text: e.target.value })}
			onfocus={(e) => actions.setIsEditing({ value: true })}
			onblur={(e) => actions.setIsEditing({ value: false })}
			title={state.isEditor === true && "Click me to edit paragraph"}
			rows="10"
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
		paragraph.text !== null &&
		paragraph.text.trim() !== "" && (
			<p className="relative pin-none z-20 font-sans text-center font-base text-white text-xl w-sm">{paragraph.text}</p>
		)
	)
