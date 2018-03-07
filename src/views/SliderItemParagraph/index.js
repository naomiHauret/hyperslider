import { h } from "hyperapp"

export default ({ actions, state, id, paragraph }) =>
	state.isEditor === true ? (
		<textarea
			value={paragraph.text}
			oninput={(e) => actions.editParagraph({ id: id, text: e.target.value })}
			title={state.isEditor === true && "Click me to edit paragraph"}
		/>
	) : (
		paragraph.text !== null &&
		paragraph.text.trim() !== "" && (
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
	)
