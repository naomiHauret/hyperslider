import dndActions from "./dragAndDrop"
import editorActions from "./editor"
import sliderActions from "./slider"
import moveActions from "./moveContent"

export default {
	...dndActions,
	...editorActions,
	...sliderActions,
	...moveActions,
}
