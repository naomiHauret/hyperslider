import { h } from "hyperapp"
import cc from "classcat"
import cxs from "cxs"

import compareValues from "./../../utils/compareValues"
import keyCodes from "./../../utils/keyCodes"

import SliderItem from "./../SliderItem"

export default ({ state, actions }) => (
	<div className="h-full">
		<div className="h-full flex">
			{(state.isSliderFullview === true || state.isEditor === false) && (
				<button
					tabindex="-1"
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
					onkeydown={(e) => {
						switch (e.keyCode) {
							case keyCodes.escape:
								e.target.blur()
								break

							case keyCodes.enter:
								e.target.click()
								break

							default:
								break
						}
					}}
				>
					Previous
				</button>
			)}
			{(state.isSliderFullview === true || state.isEditor === false) && (
				<button
					tabindex="-1"
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
					onkeydown={(e) => {
						switch (e.keyCode) {
							case keyCodes.escape:
								e.target.blur()
								break

							case keyCodes.enter:
								e.target.click()
								break
						}
					}}
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
				tabindex="2"
				autofocus={state.isEditing === false}
				oncreate={(e) => e.firstChild.focus()}
				onkeydown={(e) => {
					switch (e.keyCode) {
						case keyCodes.enter:
							state.isEditing === false &&
								state.isEditor === true &&
								state.isSliderFullview === false &&
								actions.setSliderFullview({ value: true })
							break

						case keyCodes.escape:
							state.isEditor === true &&
								state.isSliderFullview === true &&
								state.isEditing === false &&
								actions.setSliderFullview({ value: false })
							break

						case keyCodes.previous:
							if (state.isEditing === false) {
								if (state.isSliderFullview === false)
									state.currentItem.position - 1 >= 0
										? e.target.previousSibling.focus()
										: e.target.parentNode.lastElementChild.focus()
								return actions.goToPreviousSlide({ position: state.currentItem.position })
							}
							break

						case keyCodes.next:
							if (state.isEditing === false) {
								if (state.isSliderFullview === false)
									state.currentItem.position + 1 < state.items.length
										? e.target.nextSibling.focus()
										: e.target.parentNode.firstChild.focus()
								return actions.goToNextSlide({ position: state.currentItem.position })
							}
							break

						case keyCodes.alt && keyCodes.number1:
							actions.setEditorMode({ value: !state.isEditor })
							break

						case keyCodes.alt && keyCodes.number2:
							actions.setSliderFullview({ value: !state.isSliderFullview })
							break

						default:
							break
					}
				}}
			>
				{state.items.sort(compareValues("position")).map((el) => <SliderItem item={el} state={state} actions={actions} />)}
			</div>
		</div>
	</div>
)
