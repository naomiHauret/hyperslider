import { h } from "hyperapp"

export default ({ state, actions, image, id }) =>
	state.isEditor === true && (
		<div>
			<div>
				<input
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
				/>
				<img src={image} />
			</div>
		</div>
	)
