import { h } from "hyperapp"

export default ({ actions, state, id, subtitle }) =>
	state.isEditor === true ? (
		<input
			value={subtitle.text}
			oninput={(e) => actions.editSubTitle({ id: id, text: e.target.value })}
			title={state.isEditor === true && "Click me to edit subtitle"}
		/>
	) : (
		subtitle.text !== null &&
		subtitle.text.trim() !== "" && (
			<h2
				onmousedown={(e) =>
					state.isEditor === true &&
					state.isSliderFullview === true &&
					actions.moveSubTitle({
						x: e.pageX,
						y: e.pageY,
						offsetX: e.offsetX,
						offsetY: e.offsetY,
						width: e.target.offsetWidth,
						id: id,
					})
				}
			>
				{subtitle.text}
			</h2>
		)
	)
