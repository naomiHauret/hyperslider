import { h } from "hyperapp"

export default ({ actions, state, id, paragraph }) =>
	state.isEditor === true  && state.isSliderFullview === false ? (
		<textarea
			oninput={(e) => actions.editParagraph({ id: id, text: e.target.value })}
			title={state.isEditor === true && "Click me to edit title"}
		>
			{paragraph.text}
		</textarea>
	) : (
		<p
			onmousedown={(e) =>
				state.isEditor === true &&
				state.isSliderFullview === true &&
				actions.moveParagraph({
					x: e.pageX,
					y: e.pageY,
					offsetX: e.offsetX,
					offsetY: e.offsetY,
					width: e.target.offsetWidth,
					id: id,
				})
			}
		>
			{paragraph.text}
		</p>
	)
