export default {
	move: ({ x, y }) => (state) => ({ x: x, y: y })
	,
	stopMoving: () => ({ movingElement: false }),
}
