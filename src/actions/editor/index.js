export default {
	setEditorMode: ({ value }) => (state) => ({
		isEditor: value,
	}),

	setSliderFullview: ({ value }) => (state) => ({
		isSliderFullview: value,
	}),

	editMainTitle: ({ id, text }) => (state) => ({
		items: state.items.map((el) => (id === el.id ? { ...el, title: { text: text } } : el)),
		isEditor: true,
	}),

	editSubTitle: ({ id, text }) => (state) => ({
		items: state.items.map((el) => (id === el.id ? { ...el, subtitle: { text: text } } : el)),
		isEditor: true,
	}),

	editParagraph: ({ id, text }) => (state) => ({
		items: state.items.map((el) => (id === el.id ? { ...el, paragraph: { text: text } } : el)),
		isEditor: true,
	}),

	editImage: ({ id, image }) => (state) => ({
		items: state.items.map((el) => (id === el.id ? { ...el, image } : el)),
	}),
}
