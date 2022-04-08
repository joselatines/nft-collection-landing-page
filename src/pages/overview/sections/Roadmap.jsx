import styled from 'styled-components';
import { variables } from '../../../shared/GlobalStyles';
import { RoadmapComponent } from './components/roadmap/RoadmapComponent';
import img from './assets/roadmap.png';

export const Roadmap = () => {
	return (
		<Container id='roadmap' className='section'>
			<div className='titles'>
				<span className='title'>Roadmap</span>
				<span className='subtitle'>Divitium way</span>
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
