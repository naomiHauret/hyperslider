import { h } from "hyperapp"
import compareValues from "./../../utils"
import SliderItem from "./../SliderItem"

export default ({ state, actions }) => (
	<div className="flex justify-center items-center flex-wrap">
		{state.items.sort(compareValues("position")).map((el) => <SliderItem item={el} state={state} actions={actions} />)}
	</div>
)
