import styled from 'styled-components';
import { variables } from '../../../shared/GlobalStyles';
import img from './assets/header.png';

export const Header = () => {
	return (
		<Container id='overview' className='section'>
			<Subtitle>DC01 NFT Collection</Subtitle>
			<Title>Not the kind of collection you know</Title>
		</Container>
	);
};

const Container = styled.header`
	background-color: ${variables.colors.bg_default};
	background-image: url(${img});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
	text-align: center;
`;

const Subtitle = styled.h1`
	font-weight: 400;
	font-size: 1.2rem;
	font-size: clamp(0.8rem, 6vw, 2rem);
`;
const Title = styled.span`
	font-weight: 900;
	font-size: clamp(1rem, 8vw, 3.5rem);
`;
