module.exports = {
	theme: {
		extend: {
			colors: {
				"bug": "var(--bug)",
				"dark": "var(--dark)",
				"dragon": "var(--dragon)",
				"electric": "var(--electric)",
				"fairy": "var(--fairy)",
				"fighting": "var(--fighting)",
				"fire": "var(--fire)",
				"flying": "var(--flying)",
				"ghost": "var(--ghost)",
				"grass": "var(--grass)",
				"ground": "var(--ground)",
				"ice": "var(--ice)",
				"normal": "var(--normal)",
				"poison": "var(--poison)",
				"psychic": "var(--psychic)",
				"rock": "var(--rock)",
				"steel": "var(--steel)",
				"water": "var(--water)",
			},
		},
	},
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
}