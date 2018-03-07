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
			<p>
				{paragraph.text}
			</p>
		)
	)
