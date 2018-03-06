import { h } from "hyperapp"

export default ({ actions, state, id, title }) =>
	state.isEditor === true && state.isSliderFullview === false ? (
		<input
			value={title.text}
			oninput={(e) => actions.editMainTitle({ id: id, text: e.target.value })}
			title={state.isEditor === true && "Click me to edit title"}
		/>
	) : (
		<h1
			style={{
				position: "absolute",
				top: title.top,
				left: title.left,
			}}
			onmousedown={(e) => {
				e.preventDefault()
				if (state.isEditor === true && state.isSliderFullview === true)
					return actions.moveMainTitle({
						x: e.pageX,
						y: e.pageY,
						offsetX: e.offsetX,
						offsetY: e.offsetY,
						width: e.target.offsetWidth,
						id: id,
					})
			}}
		>
			{title.text}
		</h1>
	)
