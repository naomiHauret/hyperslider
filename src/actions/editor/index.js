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

	editImage: ({ id, image }) => (state) => {
		return { items: state.items.map((el) => (id === el.id ? { ...el, image } : el)) }
	},
}
