import styled from 'styled-components';
import { Benefit } from './benefitsComponents/Benefit';
import { variables } from '../shared/GlobalStyles';

export const Benefits = () => {
	const benefits = [
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
			title: 'Level 2',
			lis: [
				'Highest quality NFT art',
				'Very limited pieces',
				'High ROI based on the type and rarity',
				'Lowest risk due to its connection with an disruption in the physical world',
				' State-of-the-art innovation in both, digital and physical world.',
			],
		},
	];

	return (
		<Container className='section'>
			{benefits.map(({ title, lis }) => (
				<div className='div'>
					<span className='title'>More gain? Okay.</span>
					<div className='benefitsContainer'>
						<Benefit key={title} title={title} lis={lis} />
					</div>
				</div>
			))}
		</Container>
	);
};

const Container = styled.section`
	display: grid;
	gap: 5rem;
	.div {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: flex-start;
		justify-content: space-between;
		gap: 2rem;
		@media only screen and (max-width: ${variables.mediaQueries.tablet}) {
			grid-template-columns: 1fr;
		}
	}
	.benefitsContainer {
		display: grid;
		gap: 2rem;
	}
`;
