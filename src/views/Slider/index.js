import { h } from "hyperapp"
import cc from "classcat"
import cxs from "cxs"

import compareValues from "./../../utils/compareValues"
import SliderItem from "./../SliderItem"

export default ({ state, actions }) => (
	<div className="h-full">
		<div className="h-full flex">
			{(state.isSliderFullview === true || state.isEditor === false) && (
				<button
					className={`
						fixed
						pin-l
						z-20
						cursor-pointer
						${cxs({
							top: "50%",
							transform: "translateY(-50%) rotate(90deg)",
						})}`}
					onclick={(e) =>
						actions.goToPreviousSlide({
							position: state.currentItem.position,
						})
					}
				>
					Previous
				</button>
			)}
			{(state.isSliderFullview === true || state.isEditor === false) && (
				<button
					className={`
						fixed
						pin-r
						z-20
						cursor-pointer
						${cxs({
							top: "50%",
							transform: "translateY(-50%) rotate(-90deg)",
						})}`}
					onclick={(e) =>
						actions.goToNextSlide({
							position: state.currentItem.position,
						})
					}
				>
					Next
				</button>
			)}
			<div
				className={cc({
					flex: true,
					"flex-1": true,
					transition: true,
					"flex-wrap": state.isEditor === true && state.isSliderFullview === false,
					"justify-center": state.isEditor === true && state.isSliderFullview === false,
					"items-center": state.isEditor === true && state.isSliderFullview === false,
				})}
			>
				{state.items.sort(compareValues("position")).map((el) => <SliderItem item={el} state={state} actions={actions} />)}
			</div>
		</div>
	</div>
)
