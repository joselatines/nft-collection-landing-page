import styled from 'styled-components';

import { TeamCard } from './components/TeamCard';
import team1 from './assets/team1.png';
import { variables } from '../../../shared/GlobalStyles';
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
			name: 'Founder, CEO and desdsdsdsigner',
			content:
				'Founder, CEO and designer of physical products, NFTs, website, etc. Former Apple employee, winner of the "2018 Apple Innovation of the Year" award. Enthusiastic about blockchain, good design, and continuous improvement of the human experience',
			img: team1,
		},
		{
			name: 'Founder, CEO and dsdsdesigner',
			content:
				'Founder, CEO and designer of physical products, NFTs, website, etc. Former Apple employee, winner of the "2018 Apple Innovation of the Year" award. Enthusiastic about blockchain, good design, and continuous improvement of the human experience',
			img: team1,
		},
		{
			name: 'Founder, CEO sdsds designer',
			content:
				'Founder, CEO and designer of physical products, NFTs, website, etc. Former Apple employee, winner of the "2018 Apple Innovation of the Year" award. Enthusiastic about blockchain, good design, and continuous improvement of the human experience',
			img: team1,
		},
		{
			name: 'Founder, CEO sssand designer',
			content:
				'Founder, CEO and designer of physical products, NFTs, website, etc. Former Apple employee, winner of the "2018 Apple Innovation of the Year" award. Enthusiastic about blockchain, good design, and continuous improvement of the human experience',
			img: team1,
		},
		{
			name: 'Founder, aaaaa and designer',
			content:
				'Founder, CEO and designer of physical products, NFTs, website, etc. Former Apple employee, winner of the "2018 Apple Innovation of the Year" award. Enthusiastic about blockchain, good design, and continuous improvement of the human experience',
			img: team1,
		},
	];

	return (
		<Container id='team' className='section'>
			<div className='titles'>
				<h4 className='title'>Team</h4>
				<span className='subtitle'>Look who's behind, literally.</span>
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
