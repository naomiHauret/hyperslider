import { h } from "hyperapp"

export default ({ state, actions }) => (
    <label>
		<input type="checkbox" onclick={(e) => actions.setSliderFullview()} checked={state.isSliderFullview === true} />
		Fullview ?
	</label>
)
