import { h } from "hyperapp"
import SliderItemTitle from "./../SliderItemTitle"
import SliderItemSubtitle from "./../SliderItemSubtitle"
import SliderItemParagraph from "./../SliderItemParagraph"
import SliderItemImage from "./../SliderItemImage"

export default ({ item, actions, state }) => (
	<div
		style={"position: relative;"}
		title={state.isEditor === true && "Drag me to change my position"}
		key={item.id}
		active={item.isActive}
		className={`
	  swappable
	  ${item.id === state.currentItem.id ? "bg-green" : ""}
      ${item.isDragging === true ? "is-dragged" : ""}
      ${item.isSlipZone === true ? "is-slipzone" : ""}`}
		onclick={(e) =>
			actions.setCurrentSlide({
				id: item.id,
				position: item.position,
			})
		}
		ondragstart={(e) => {
			if (state.isEditor === true) {
				e.dataTransfer.setData("application/node type", this)
				return actions.isDragged({
					id: item.id,
					position: item.position,
					isUserDragging: true,
				})
			}
		}}
		ondragenter={(e) => {
			e.preventDefault()
			if (state.isEditor === true) {
				return actions.enterSlipZone({
					id: item.id,
					position: item.position,
				})
			}
		}}
		ondragleave={(e) => {
			if (state.isEditor === true)
				return actions.leaveSlipZone({
					id: item.id,
				})
		}}
		ondragover={(e) => e.preventDefault()}
		ondragend={(e) => {
			if (state.isEditor === true) actions.isDragged({ id: item.id, isUserDragging: false })
		}}
		ondrop={(e) => {
			if (state.isEditor === true) actions.isDropped({ id: item.id, position: item.position })
		}}
		draggable={state.isEditor === true}
	>
		{item.title && item.title.text && <SliderItemTitle actions={actions} state={state} title={item.title} id={item.id} />}
		{item.subtitle &&
			item.subtitle.text !== null && (
				<SliderItemSubtitle actions={actions} state={state} subtitle={item.subtitle} id={item.id} />
			)}
		{item.paragraph &&
			item.paragraph.text !== null && (
				<SliderItemParagraph actions={actions} state={state} paragraph={item.paragraph} id={item.id} />
			)}
		{state.isEditor && <SliderItemImage actions={actions} state={state} image={item.image} id={item.id} />}
	</div>
)
