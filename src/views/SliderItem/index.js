import { h } from "hyperapp"
import cc from "classcat"
import cxs from "cxs"

import keyCodes from "./../../utils/keyCodes"

import SliderItemTitle from "./../SliderItemTitle"
import SliderItemSubtitle from "./../SliderItemSubtitle"
import SliderItemParagraph from "./../SliderItemParagraph"
import SliderItemImage from "./../SliderItemImage"

export default ({ item, actions, state }) => {
	let clickCount = 0
	let singleClickTimer

	return (
		<div
			tabindex={state.isEditor === true && state.isSliderFullview === false && "2"}
			key={item.id}
			active={item.isActive}
			title={
				state.isEditor === true &&
				(state.isSliderFullview === false && "Drag me to change my position") &&
				(state.isSliderFullview === false && "Drag me to change my position")
			}
			className={cc({
				"transition relative": true,
				"w-64 h-128 bg-grey-lighter hover:bg-grey-light": state.isEditor === true && state.isSliderFullview === false,
				"cursor-move": state.isEditor === true && state.isSliderFullview === false && item.isDragging === false,
				"cursor-grab": state.isEditor === true && state.isSliderFullview === false && item.isDragging === true,
				hidden: (state.isSliderFullview === true || state.isEditor === false) && item.id !== state.currentItem.id,
				"h-full w-full scale-full":
					state.isEditor === false || (state.isSliderFullview === true && item.id === state.currentItem.id),
				"justify-center items-center p-4 rounded scale-down focus:scale-full mr-12":
					state.isEditor === true && state.isSliderFullview === false,
				"scale-full": state.isEditor === true && state.isSliderFullview === false && item.id === state.currentItem.id,
				"is-dragged": item.isDragging === true,
				"is-slipzone": item.isSlipZone === true,
			})}
			onclick={(e) => {
				clickCount++
				e.target.focus()
				if (clickCount === 1) {
					singleClickTimer = setTimeout(() => {
						clickCount = 0
						return actions.setCurrentSlide({ id: item.id, position: item.position })
					}, 300)
				} else {
					clearTimeout(singleClickTimer)
					clickCount = 0
					return actions.setSliderFullview({ value: !state.isSliderFullview })
				}
			}}
			ondragstart={(e) => {
				if (state.isEditor === true) {
					e.dataTransfer.setData("application/node type", this)
					return actions.isDragged({ id: item.id, position: item.position, isUserDragging: true })
				}
			}}
			ondragenter={(e) => {
				e.preventDefault()
				if (state.isEditor === true) {
					return actions.enterSlipZone({ id: item.id, position: item.position })
				}
			}}
			ondragleave={(e) => {
				if (state.isEditor === true) return actions.leaveSlipZone({ id: item.id })
			}}
			ondragover={(e) => e.preventDefault()}
			ondragend={(e) => {
				if (state.isEditor === true) return actions.isDragged({ id: item.id, isUserDragging: false })
			}}
			ondrop={(e) => {
				if (state.isEditor === true) return actions.isDropped({ id: item.id, position: item.position })
			}}
			onfocus={(e) => actions.setCurrentSlide({ id: item.id, position: item.position })}
			onkeydown={(e) => {
				switch (e.keyCode) {
					case keyCodes.enter:
						state.isEditing === false && actions.setSliderFullview({ value: true })
						break

					case keyCodes.escape:
						e.target.blur()
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
						e.target.focus()
						return actions.setEditorMode({ value: !state.isEditor })
						break

					case keyCodes.alt && keyCodes.number2:
						e.target.focus()
						return actions.setSliderFullview({ value: !state.isSliderFullview })
						break

					default:
						break
				}
			}}
			draggable={state.isEditor === true && state.isSliderFullview === false}
		>
			<div
				className={cc({
					"flex flex-col h-full": true,
					"justify-center items-center": state.isSliderFullview === true || state.isEditor === false,
				})}
			>
				<SliderItemTitle actions={actions} state={state} title={item.title} id={item.id} />
				<SliderItemSubtitle actions={actions} state={state} subtitle={item.subtitle} id={item.id} />
				<SliderItemParagraph actions={actions} state={state} paragraph={item.paragraph} id={item.id} />
				<SliderItemImage actions={actions} state={state} image={item.image} id={item.id} />
			</div>
		</div>
	)
}
