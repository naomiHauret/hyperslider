import { h } from "hyperapp"

export default ({ actions, state, id, title }) =>
	state.isEditor === true ? (
		<input
			value={title.text}
			oninput={(e) => actions.editMainTitle({ id: id, text: e.target.value })}
			title={state.isEditor === true && "Click me to edit title"}
		/>
	) : (
		<h1>{title.text}</h1>
	)
