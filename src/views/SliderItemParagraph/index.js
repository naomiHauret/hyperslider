import { h } from "hyperapp"

export default ({ actions, state, id, paragraph }) =>
	state.isEditor === true ? (
		<textarea
			oninput={(e) => actions.editParagraph({ id: id, text: e.target.value })}
			title={state.isEditor === true && "Click me to edit title"}
		>
			{paragraph.text}
		</textarea>
	) : (
		<p>{paragraph.text}</p>
	)
