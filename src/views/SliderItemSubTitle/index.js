import { h } from "hyperapp"

export default ({ actions, state, id, subtitle }) =>
	state.isEditor === true && state.isSliderFullview === false ? (
		<input
			value={subtitle.text}
			oninput={(e) => actions.editSubTitle({ id: id, text: e.target.value })}
			title={state.isEditor === true && "Click me to edit title"}
		/>
	) : (
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
