import styled from 'styled-components';
import { variables } from './GlobalStyles';

export const Footer = () => {
	return (
		<Container>
			<img
				src='https://i.ibb.co/cvsMgL3/divitium-white.png'
				alt='divitium-white'
			/>
			<Copyright>
				<Title>Copyright © 2022 Divitium </Title>
				<Additional>Terms & Conditions</Additional>
				<Additional>Discord</Additional>
			</Copyright>
		</Container>
	);
};

const Container = styled.footer`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;
	padding: 2rem 0;
	position: relative;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	img {
		width: 1rem;
	}
`;

const Copyright = styled.footer`
	display: flex;

	align-items: center;
	font-size: clamp(0.6rem, 1.5vw, .8rem);
	@media only screen and (max-width: 300px) {
		flex-wrap: wrap;
	}
`;

const Title = styled.span`
	padding: 0 0.5rem;
	font-weight: 300;
	color: ${variables.colors.gray};
	display: ruby;
	@media only screen and (max-width: 350px) {
		display: unset;
	}
`;

const Additional = styled(Title)`
	border-left: 1px solid ${variables.colors.gray};
	color: ${variables.colors.font_default};
`;
