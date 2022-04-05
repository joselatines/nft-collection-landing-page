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
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;
	padding: 1rem;
	font-size: 0.6rem;
	img {
		width: 1rem;
	}
`;

const Copyright = styled.footer`
	display: flex;

	align-items: center;
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
