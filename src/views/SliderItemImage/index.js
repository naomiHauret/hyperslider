import { h } from "hyperapp"
import keyCodes from "./../../utils/keyCodes"

export default ({ state, actions, image, id }) =>
	state.isEditor === true ? (
		<div>
			<div>
				<input
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
					onfocus={(e) => actions.setIsEditing({ value: true })}
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
				<img src={image} />
			</div>
		</div>
	) : (
		<div>
			<img src={image} />
		</div>
	)
