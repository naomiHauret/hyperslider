export default {
	isDragged: ({ id, isUserDragging, position }) => (state) => ({
		items: state.items.map((el) => (id === el.id ? { ...el, isDragging: !el.isDragging } : el)),
		draggedItem: {
			id: isUserDragging === true ? id : null,
			position: isUserDragging === true ? position : null,
		},
	}),

	enterSlipZone: ({ id, position }) => (state) => ({
		items: state.items.map((el) => (id === el.id && id !== state.draggedItem.id ? { ...el, isSlipZone: true } : el)),
		slipAfterItem: {
			id: id,
			position: position,
		},
	}),

	leaveSlipZone: ({ id }) => (state) => ({
		items: state.items.map((el) => (id === el.id ? { ...el, isSlipZone: false } : el)),
	}),

	isDropped: ({ id, position }) => (state) => ({
		items: state.items.map((el) => {
			if (el.position === state.slipAfterItem.position && position > state.draggedItem.position) {
				console.log(`Element before is ${el.title} position is ${position--}`)
				return { ...el, isSlipZone: false, position: position-- }
			}
			if (
				el.position > state.draggedItem.position &&
				el.position < state.slipAfterItem.position &&
				el.id !== state.draggedItem.id
			) {
				console.log(`Move ->  Element is ${el.title}, position is ${el.position}  move to position ${el.position--}`)
				return { ...el, isSlipZone: false, position: el.position-- }
			}
			if (
				el.position < state.draggedItem.position &&
				el.position > state.slipAfterItem.position &&
				el.id !== state.draggedItem.id
			) {
				console.log(`Move <-  Element is ${el.title}, position is ${el.position}  move to position ${el.position++}`)
				return { ...el, isSlipZone: false, position: el.position++ }
			}
			if (state.draggedItem.id === el.id) {
				if (state.draggedItem.position > state.slipAfterItem.position) {
					console.log(`<-: Dragged element ${el.title} to position ${position++}`)
					return { ...el, isSlipZone: false, position: position++ }
				} else {
					console.log(`->: Dragged element ${el.title} to position ${position}`)
					return { ...el, isSlipZone: false, position: position }
				}
			}
			return { ...el, isSlipZone: false }
		}),
	}),
}
