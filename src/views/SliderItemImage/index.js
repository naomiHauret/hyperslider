import { h } from "hyperapp"
import cc from "classcat"
import cxs from "cxs"

import keyCodes from "./../../utils/keyCodes"

export default ({ state, actions, image, id }) => {
	const previewerWrapperStyle = cc({
		absolute: true,
		"w-full h-full": state.isSliderFullview === true || state.isEditor === false,
		"w-24 h-24 rounded shadow-lg": state.isSliderFullview === false && state.isEditor === true,
		"pin-t pin-l": state.isSliderFullview === true && state.isEditor === true,
	})

	return state.isEditor === true ? (
		<div
			className={`
				${previewerWrapperStyle}
				${state.isSliderFullview === false ? cxs({ bottom: "-10%", right: "-15%", transform: "rotate(-5deg)" }) : ""}`}
		>
			<div
				className={cc({
					"relative h-full w-full z-10": true,
					"bg-grey-lightest": state.isSliderFullview === false && state.isEditor === true,
					"bg-grey-light": state.isSliderFullview === true && state.isEditor === true,
				})}
			>
				<input
					className={cc({
						"absolute pin-t pin-l h-full w-full z-10 cursor-pointer block opacity-0": true,
						shiver: state.isSliderFullview === false,
					})}
					tabindex="2"
					title="click to add your image"
					type="file"
					oninput={(e) => {
						e.preventDefault()
						let reader = new FileReader()
						let image = ""
						reader.onloadend = () => {
							image = reader.result
							actions.editImage({ id, image })
						}
						reader.readAsDataURL(e.target.files[0])
					}}
					onfocus={(e) =>
						actions.setIsEditing({
							value: true,
						})
					}
					onblur={(e) => actions.setIsEditing({ value: false })}
					onkeydown={(e) => {
						switch (e.keyCode) {
							case keyCodes.escape:
								e.target.blur()
								break
							default:
								break
						}
					}}
				/>
				{image !== null && <img className="h-full w-full object-cover rounded transition" src={image} />}
			</div>
		</div>
	) : (
		<div className="absolute h-full w-full pin-t pin-l">
			{image !== null && <img className="block h-full w-full object-cover" src={image} />}
		</div>
	)
}
