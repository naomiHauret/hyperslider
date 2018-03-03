import { h } from "hyperapp"

export default ({ actions, state, id, subtitle }) =>
	state.isEditor === true ? (
		<input
			value={subtitle.text}
			oninput={(e) => actions.editSubTitle({ id: id, text: e.target.value })}
			title={state.isEditor === true && "Click me to edit title"}
		/>
	) : (
		<h2>{subtitle.text}</h2>
	)
