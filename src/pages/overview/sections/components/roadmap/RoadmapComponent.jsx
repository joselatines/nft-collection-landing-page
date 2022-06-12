import styled from 'styled-components';
import { motion } from 'framer-motion';

import { variables } from '../../../../../shared/GlobalStyles';
import { Stage } from './Stage';
import { Button } from '../../../../../shared/Button';

export const RoadmapComponent = () => {
	const stages = [
		{
			stage: 'Stage 1 (Current)',
			title: 'THE FOUNDATION',
			items: [
				'State-Of-The-Art Legal Structure',
				'Brand Development',
				'Web Site',
				'Launch Community set up',
				'Minting Events',
			],
			link: '#',
		},
		{
			stage: 'Stage 2 (Current)',
			title: 'THE FOUNDATION',
			items: [
				'State-Of-The-Art Legal Structure',
				'Brand Development',
				'Web Site',
				'Launch Community set up',
				'Minting Events',
			],
			link: '#',
		},
		{
			stage: 'Stage 4 (Current)',
			title: 'THE FOUNDATION',
			items: [
				'State-Of-The-Art Legal Structure',
				'Brand Development',
				'Web Site',
				'Community set up',
				'Minting Events',
			],
			link: '#',
		},
		{
			stage: 'Stage 5 (Current)',
			title: 'THE FOUNDATION',
			items: [
				'State-Of-The-Art Legal Structure',
				'Brand Development',
				'Web Site',
				'Launch Community set up',
				'Minting Events',
			],
			link: '#',
		},
	];

	const stageVar = {
		hidden: { x: -300 },
		show: {
			x: 0,
			transition: { duration: 1 },
		},
	};

	return (
		<Container>
			{stages.map(({ stage, title, items, link }) => (
				<motion.div
					key={stage}
					variants={stageVar}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					<Stage stage={stage} title={title} items={items} link={link} />
				</motion.div>
			))}
			<Button content='Join us our Discord' />
		</Container>
	);
};

const Container = styled.div`
	background-color: ${variables.colors.bg_default};

	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5rem;

	overflow: hidden;
`;
