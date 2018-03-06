import { h } from "hyperapp"
import compareValues from "./../../utils/compareValues"
import SliderItem from "./../SliderItem"

export default ({ state, actions }) => (
	<div>
		<div className="flex">
			{state.isEditor !== true && (
				<button
					onclick={(e) =>
						actions.goToPreviousSlide({
							position: state.currentItem.position,
						})
					}
				>
					Previous
				</button>
			)}
			<div className="flex justify-center items-center flex-wrap">
				{state.items.sort(compareValues("position")).map((el) => <SliderItem item={el} state={state} actions={actions} />)}
			</div>
			{state.isEditor !== true && (
				<button
					onclick={(e) =>
						actions.goToNextSlide({
							position: state.currentItem.position,
						})
					}
				>
					Next
				</button>
			)}
		</div>
		<div>
			{state.items.map((el) => el.id === state.currentItem.id && el.position + 1)}/{state.items.length}
		</div>
		<progress value={state.currentItem.position} max={state.items.length - 1}>
			{state.currentItem.position === 0 ? 1 : state.currentItem.position}
		</progress>
	</div>
)
