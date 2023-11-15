export const listLengauges = ['HTML', 'CSS', 'LESS/SASS', 'VanillaJS', 'TypeScript']

export const listFrameworksLibsOthers = [
	'React.js',
	'Next.js',
	'JQuery',
	'Redux',
	'Node.js',
	'RestAPIs',
	'Express.js',
	'Git',
	'Jest',
	'React Testing Library',
	'Styled Components',
	'Tailwind CSS',
	'Chakra UI',
	'Material UI',
	'Ant Design',
	'Bootstrap',
	'Storybook',
	'Figma',
	'Vercel'
]

/**
 * Set settings Framer-Motion
 */
export const settingsFramerMotion = {
	// parent
	container: {
		hidden: {
			x: '-100%',
			opacity: 0
		},
		show: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 0.5,
				duration: 0.5,
				delayChildren: 1,
				staggerChildren: 0.2
			}
		}
	},

	// childrens
	item: {
		hidden: {
			y: 0,
			opacity: 0
		},
		show: {
			y: '-100%',
			opacity: 1
		}
	}
}
