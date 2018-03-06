export default {
	setEditorMode: ({ value }) => (state) => ({
		isEditor: value,
	}),

	editMainTitle: ({ id, text }) => (state) => ({
		items: state.items.map((el) => (id === el.id ? { ...el, title: { text: text } } : el)),
	}),

	editSubTitle: ({ id, text }) => (state) => ({
		items: state.items.map((el) => (id === el.id ? { ...el, subtitle: { text: text } } : el)),
	}),

	editParagraph: ({ id, text }) => (state) => ({
		items: state.items.map((el) => (id === el.id ? { ...el, paragraph: { text: text } } : el)),
	}),

	editImage: ({ id, image }) => (state) => ({
		items: state.items.map((el) => (id === el.id ? { ...el, image } : el)),
	}),

	moveMainTitle: ({ x, y, offsetX, offsetY, width, id }) => (state) => ({
		x: x,
		y: y,
		offsetX: offsetX,
		offsetY: offsetY,
		items: state.items.map(
			(el) =>
				id === el.id
					? {
							...el,
							title: {
								...el.title,
								width,
								left:
									state.isEditor === true && state.isSliderFullview === true
										? state.x - state.offsetX < 0 ? 0 : state.x - state.offsetX + "px"
										: "0",
								top:
									state.isEditor === true && state.isSliderFullview === true
										? state.y - state.offsetY < 0 ? 0 : state.y - state.offsetY + "px"
										: "0",
							},
					  }
					: el,
		),
	}),

	moveSubTitle: ({ x, y, offsetX, offsetY, width, id }) => (state) => ({
		items: state.items.map(
			(el) =>
				id === el.id
					? {
							...el,
							subtitle: {
								...el.subtitle,
								x,
								y,
								offsetX,
								offsetY,
								width,
							},
					  }
					: el,
		),
	}),

	moveParagraph: ({ x, y, offsetX, offsetY, width, id }) => (state) => ({
		items: state.items.map(
			(el) =>
				id === el.id
					? {
							...el,
							paragraph: {
								...el.paragraph,
								x,
								y,
								offsetX,
								offsetY,
								width,
							},
					  }
					: el,
		),
	}),
}
