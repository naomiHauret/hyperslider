export default {
	editMainTitle: ({ id, text }) => (state) => ({
		items: state.items.map((el) => (id === el.id ? { ...el, title: { text: text } } : el)),
		isEditor: true,
		isEditing: true,
	}),

	editSubTitle: ({ id, text }) => (state) => ({
		items: state.items.map((el) => (id === el.id ? { ...el, subtitle: { text: text } } : el)),
		isEditor: true,
		isEditing: true,
	}),

	editParagraph: ({ id, text }) => (state) => ({
		items: state.items.map((el) => (id === el.id ? { ...el, paragraph: { text: text } } : el)),
		isEditor: true,
		isEditing: true,
	}),

	editImage: ({ id, image }) => (state) => ({
		items: state.items.map((el) => (id === el.id ? { ...el, image } : el)),
	}),
}
