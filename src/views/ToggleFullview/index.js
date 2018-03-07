import { h } from "hyperapp"

export default ({ state, actions }) => (
	<label>
		<input
			type="checkbox"
			onclick={(e) => actions.setSliderFullview({ value: e.target.checked })}
			checked={state.isSliderFullview === true}
		/>
		Fullview ?
	</label>
)
