import { h } from "hyperapp"

export default ({ state, actions }) => (
	<div role="radiogroup">
		<label>
			<input type="radio" onclick={(e) => actions.setEditorMode({ value: false })} checked={state.isEditor === false} />
			View
		</label>

		<label>
			<input type="radio" checked={state.isEditor === true} onclick={(e) => actions.setEditorMode({ value: true })} />
			Edit
		</label>
	</div>
)
