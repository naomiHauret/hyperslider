import { h } from "hyperapp"

export default ({ item, actions, state }) => (
	<div
		key={item.id}
		active={item.isActive}
    className={`
      swappable
      ${item.isDragging === true ?
          "is-dragged"
      : ""}
      ${item.isSlipZone === true ?
        "is-slipzone"
      : "" }`}
		ondragstart={(e) =>
			actions.isDragged({
				id: item.id,
				position: item.position,
				isUserDragging: true,
			})
		}
		ondragenter={(e) => {
			e.preventDefault()
			actions.enterSlipZone({
				id: item.id,
				position: item.position,
			})
		}}
		ondragleave={(e) => {
			actions.leaveSlipZone({
				id: item.id,
			})
		}}
		ondragover={(e) => e.preventDefault()}
		ondragend={(e) => {
			actions.isDragged({
				id: item.id,
				isUserDragging: false,
			})
		}}
		ondrop={(e) => {
			actions.isDropped({
				id: item.id,
				position: item.position,
			})
		}}
		draggable={true}
	>
		<input
			type="text"
			value={item.title}
			readonly={state.isEditor === false}
			oninput={(e) => {
				actions.editMainTitle({ id: item.id, text: e.target.value })
			}}
		/>
		position :{item.position}
	</div>
)
