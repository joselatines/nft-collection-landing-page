import styled from 'styled-components';
import { motion } from 'framer-motion';
import { variables, TitleSection } from '../../../shared/GlobalStyles';
import { RoadmapComponent } from './components/roadmap/RoadmapComponent';

import img from './assets/roadmap.png';

export const Roadmap = () => {
	return (
		<Container id='roadmap' className='section'>
			<div className='titles'>
				<TitleSection content='Roadmap' />
				<motion.span
					initial={{ y: 50, opacity: 0 }}
					whileInView={{
						y: 0,
						opacity: 1,
						transition: {
							duration: variables.transitions.duration,
							ease: variables.transitions.ease,
						},
					}}
					viewport={{ once: true }}
					className='subtitle'
				>
					Divitium way
				</motion.span>
			</div>
			<RoadmapComponent />
		</Container>
	);
};

const Container = styled.section`

	.titles {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 3rem;
		.subtitle {
			font-weight: ${variables.font.regular};
		}
	}
`;
