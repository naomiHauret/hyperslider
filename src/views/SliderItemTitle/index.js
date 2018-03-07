import { h } from "hyperapp"

export default ({ actions, state, id, title }) =>
	state.isEditor === true ? <input
			value={title.text}
			oninput={(e) => actions.editMainTitle({ id: id, text: e.target.value })}
			title={state.isEditor === true && "Click me to edit title"}
		/>
	: title.text !== null && title.text.trim() !== "" && <h1
			onmousedown={(e) =>
				state.isEditor === true &&
				state.isSliderFullview === true &&
				actions.moveMainTitle({
					x: e.pageX,
					y: e.pageY,
					offsetX: e.offsetX,
					offsetY: e.offsetY,
					width: e.target.offsetWidth,
					id: id,
				})
			}
		>
			{title.text}
		</h1>


	