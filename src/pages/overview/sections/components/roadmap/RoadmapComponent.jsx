import styled from 'styled-components';

import { variables } from '../../../../../shared/GlobalStyles';
import { Stage } from './Stage';
import img from '../../assets/roadmap.png';
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
			link: 'dsdsdsds.com',
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
			link: 'dsdsdsds.com',
		},
		{
			stage: 'Stage 4 (Current)',
			title: 'THE FOUNDATION',
			items: [
				'State-Of-The-Art Legal Structure',
				'Brand Development',
				'Web Site',
				'Launchghfh Community set up',
				'Minting Events',
			],
			link: 'dsdsdsds.com',
		},
		{
			stage: 'Stage 5 (Current)',
			title: 'THE FOUNDATION',
			items: [
				'State-Of-The-Art Legal Structure',
				'Brand Development',
				'Web Site',
				'Launch gfhfghCommunity set up',
				'Minting Events',
			],
			link: 'dsdsdsds.com',
		},
	];

	return (
		<Container>
			{stages.map(({ stage, title, items, link }) => (
				<Stage
					key={stage}
					stage={stage}
					title={title}
					items={items}
					link={link}
				/>
			))}
			<a href='http://' target='_blank' rel='noopener noreferrer'></a>
			<Button
				content='Join us our Discord >'
				link={'https://github.com/joselatines'}
			/>
		</Container>
	);
};

const Container = styled.div`
	background-color: ${variables.colors.bg_default};
	background-image: url(${img});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5rem;
`;
