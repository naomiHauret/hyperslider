export default {
	setEditorMode: ({ value }) => (state) => ({
		isEditor: value,
	}),

	editMainTitle: ({ id, text }) => (state) => ({
		items: state.items.map((el) => (id === el.id ? { ...el, title: text } : el)),
	}),
}
