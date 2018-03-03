export default {
	setCurrentSlide: ({ id, position }) => (state) => ({
		currentItem: {
			id,
			position,
		},
	}),

	goToPreviousSlide: ({ position }) => (state) => {
		const lastPosition = position
		const element = state.items[lastPosition - 1]
		return {
			currentItem: {
				position: element === undefined ? state.items.length - 1 : lastPosition - 1,
				id: element === undefined ? state.items[state.items.length - 1].id : state.items[lastPosition - 1].id,
			},
		}
	},

	goToNextSlide: ({ position }) => (state) => {
		const lastPosition = position
		const element = state.items[lastPosition + 1]

		return {
			currentItem: {
				position: element === undefined ? 0 : lastPosition + 1,
				id: element === undefined ? 0 : state.items[lastPosition + 1].id,
			},
		}
	},
}
