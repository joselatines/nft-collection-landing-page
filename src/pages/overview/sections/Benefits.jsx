import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Benefit } from './components/Benefit';
import { variables } from '../../../shared/GlobalStyles';

export const Benefits = () => {
	const benefits = [
		{
			title:
				"Meet our astonishing scale of benefiddddddts, we'll beginning with Level 1",
			lis: [
				'Highest quality NFT art',
				'Very limited pieces',
				'High ROI based on the type and rarity',
				'Lowest risk due to its connection with an disruption in the physical world',
				' State-of-the-art innovation in both, digital and physical world.',
			],
		},
		{
			title: 'Level 2',
			lis: [
				'Highest quality NFT art',
				'Very limited pieces',
				'High ROI based on the type and rarity',
				'Lowest risk due to its connection with an disruption in the physical world',
				' State-of-the-art innovation in both, digital and physical world.',
			],
		},
		{
			title:
				"Meet our astonishing scale of benefits, we'll beginning with Level 1",
			lis: [
				'Highest quality NFT art',
				'Very limited pieces',
				'High ROI based on the type and rarity',
				'Lowest risk due to its connection with an disruption in the physical world',
				' State-of-the-art innovation in both, digital and physical world.',
			],
		},
		{
			title: 'Level 3',
			lis: [
				'Highest quality NFT art',
				'Very limited pieces',
				'High ROI based on the type and rarity',
				'Lowest risk due to its connection with an disruption in the physical world',
				' State-of-the-art innovation in both, digital and physical world.',
			],
		},
	];

	const containerVar = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 1,
			},
		},
	};
	const itemVar = {
		hidden: { opacity: 0, y: -50 },
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 2, ease: 'easeInOut' },
		},
	};

	return (
		<Container
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
			variants={containerVar}
			className='section'
		>
			<span className='title'>
				Gain, No Pain.
			</span>
			<motion.div className='benefitsContainer'>
				{benefits.map(({ title, lis }) => (
					<motion.div variants={itemVar} key={title}>
						<Benefit title={title} lis={lis} />
					</motion.div>
				))}
			</motion.div>
		</Container>
	);
};

const Container = styled(motion.div)`
	display: grid;
	gap: 5rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
	overflow: hidden;
	@media only screen and (max-width: ${variables.mediaQueries.tablet}) {
		grid-template-columns: 1fr;
	}
	.benefitsContainer {
		display: grid;
		gap: 3rem;
	}
`;
