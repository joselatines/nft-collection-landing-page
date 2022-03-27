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
				<Title>Copyright ä 2022 Divitium </Title>
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
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	img {
		width: 2rem;
	}
`;

const Copyright = styled.footer`
	display: flex;
	justify-content: center;
`;

const Title = styled.span`
	padding: 0 0.5rem;
	font-weight: 300;
	font-size: 0.8rem;
	color: ${variables.colors.gray};
`;

const Additional = styled(Title)`
	border-left: 1px solid ${variables.colors.gray};
	color: ${variables.colors.font_default};
`;
