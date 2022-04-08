import { motion } from 'framer-motion';

export const ScrollDown = () => {
	const arrowsVariants = {
		hidden: { y: 0 },
		visible: {
			y: 10,
			transition: { repeat: Infinity, repeatType: 'reverse', duration: 1 },
		},
	};
	return (
		<svg
			width='55'
			height='50'
			viewBox='0 0 55 160'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				x='1'
				y='1'
				width='53'
				height='97'
				rx='26.5'
				stroke='white'
				strokeWidth='2'
			/>
			<motion.circle
		
				animate={{ y: 50 }}
				transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 }}
				cx='28'
				cy='25'
				r='8'
				fill='white'
			/>
			<motion.path
				variants={arrowsVariants}
				initial='hidden'
				animate='visible'
				d='M10 126.538L28 144.538L46 126.538'
				stroke='white'
				strokeWidth='2'
			/>
			<motion.path
				variants={arrowsVariants}
				initial='hidden'
				animate='visible'
				d='M10 112L28 130L46 112'
				stroke='white'
				strokeWidth='2'
			/>
		</svg>
	);
};
