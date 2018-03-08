// utility for dynamic sorting
export default function(key) {
	return function(a, b) {
		if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0

		const varA = a[key]
		const varB = b[key]

		let comparison = 0
		varA > varB ? (comparison = 1) : (comparison = -1)

		return comparison
	}
}
