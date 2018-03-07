import { h } from "hyperapp"
import cc from "classcat"
import cxs from "cxs"

import SliderItemTitle from "./../SliderItemTitle"
import SliderItemSubtitle from "./../SliderItemSubtitle"
import SliderItemParagraph from "./../SliderItemParagraph"
import SliderItemImage from "./../SliderItemImage"

export default ({ item, actions, state }) => {
	return (
		<div
			key={item.id}
			active={item.isActive}
			title={state.isEditor === true && state.isSliderFullview === false && "Drag me to change my position"}
			className={cc({
				transition: true,
				"w-48": state.isEditor === true && state.isSliderFullview === false,
				"h-64": state.isEditor === true && state.isSliderFullview === false,
				"cursor-move": state.isEditor === true && state.isSliderFullview === false && item.isDragging === false,
				"cursor-grab": state.isEditor === true && state.isSliderFullview === false && item.isDragging === true,
				hidden: state.isSliderFullview === true && item.id !== state.currentItem.id,
				"h-full": state.isEditor === false || (state.isSliderFullview === true && item.id === state.currentItem.id),
				"w-full": state.isEditor === false || (state.isSliderFullview === true && item.id === state.currentItem.id),
				"bg-green": item.id === state.currentItem.id,
				"justify-center": state.isEditor === true && state.isSliderFullview === false,
				"items-center": state.isEditor === true && state.isSliderFullview === false,
				"items-center": state.isEditor === true && state.isSliderFullview === false,
				"scale-down": state.isEditor === true && state.isSliderFullview === false,
				"scale-full": state.isEditor === false || (state.isSliderFullview === true && item.id === state.currentItem.id),
			})}
			onclick={(e) =>
				actions.setCurrentSlide({
					id: item.id,
					position: item.position,
				})
			}
			ondbclick={(e) => {
				e.preventDefault()
				return actions.setSliderFullview({ value: true })
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
			draggable={state.isEditor === true && state.isSliderFullview === false ? true : false}
		>
			<SliderItemTitle actions={actions} state={state} title={item.title} id={item.id} />
			<SliderItemSubtitle actions={actions} state={state} subtitle={item.subtitle} id={item.id} />
			<SliderItemParagraph actions={actions} state={state} paragraph={item.paragraph} id={item.id} />
			<SliderItemImage actions={actions} state={state} image={item.image} id={item.id} />
		</div>
	)
}
