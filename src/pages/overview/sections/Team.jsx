import styled from 'styled-components';
import { motion } from 'framer-motion';

import { TeamCard } from './components/TeamCard';
import team1 from './assets/team1.png';
import { TitleSection, variables } from '../../../shared/GlobalStyles';
import { Button } from '../../../shared/Button';

export const Team = () => {
	const teamMembers = [
		{
			name: 'Founder, CEO and designer',
			content:
				'Founder, CEO and designer of physical products, NFTs, website, etc. Former Apple employee, winner of the "2018 Apple Innovation of the Year" award. Enthusiastic about blockchain, good design, and continuous improvement of the human experience',
			img: team1,
		},
		{
			name: 'Founder, CEO and developer',
			content:
				'Founder, CEO and designer of physical products, NFTs, website, etc. Former Apple employee, winner of the "2018 Apple Innovation of the Year" award. Enthusiastic about blockchain, good design, and continuous improvement of the human experience',
			img: team1,
		},
		{
			name: 'Founder, CEO and developer',
			content:
				'Founder, CEO and designer of physical products, NFTs, website, etc. Former Apple employee, winner of the "2018 Apple Innovation of the Year" award. Enthusiastic about blockchain, good design, and continuous improvement of the human experience',
			img: team1,
		},
		{
			name: 'Founder, CEO and designer',
			content:
				'Founder, CEO and designer of physical products, NFTs, website, etc. Former Apple employee, winner of the "2018 Apple Innovation of the Year" award. Enthusiastic about blockchain, good design, and continuous improvement of the human experience',
			img: team1,
		},
		{
			name: 'Founder, CEO and designer',
			content:
				'Founder, CEO and designer of physical products, NFTs, website, etc. Former Apple employee, winner of the "2018 Apple Innovation of the Year" award. Enthusiastic about blockchain, good design, and continuous improvement of the human experience',
			img: team1,
		},
		{
			name: 'Founder, CEO and designer',
			content:
				'Founder, CEO and designer of physical products, NFTs, website, etc. Former Apple employee, winner of the "2018 Apple Innovation of the Year" award. Enthusiastic about blockchain, good design, and continuous improvement of the human experience',
			img: team1,
		},
	];

	return (
		<Container id='team' className='section'>
			<div className='titles'>
				<TitleSection content='Team' />
				<motion.h3
					className='subtitle'
					initial={{ x: 50, opacity: 0 }}
					whileInView={{
						x: 0,
						opacity: 1,
						transition: {
							duration: variables.transitions.duration,
							ease: variables.transitions.ease,
						},
					}}
					viewport={{ once: true }}
				>
					Look who's behind, literally.
				</motion.h3>
			</div>
			<div className='innerContainer'>
				<div className='teamContainer'>
					{teamMembers.map(({ name, content, img }) => (
						<TeamCard key={name} name={name} content={content} img={img} />
					))}
				</div>
				<Button content='Ask us anything' />
			</div>
		</Container>
	);
};

const Container = styled.section`
	overflow: hidden;
	.teamContainer {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}
	.titles {
		margin-bottom: 4rem;
		.subtitle {
			font-size: 1rem;
			font-weight: ${variables.font.regular};
		}
	}
	.innerContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 4rem;
	}
`;
