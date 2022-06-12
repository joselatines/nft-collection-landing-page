import styled from 'styled-components';
import { variables } from '../../../../../shared/GlobalStyles';
import logo from '../../../../../shared/assets/img/logo-white.png';

export const Stage = ({ stage, title, items, link }) => {
	return (
		<Container>
			<LogoContainer>
				<Logo>
					<img src={logo} alt='NFT logo' />
				</Logo>
			</LogoContainer>
			<Content>
				<span>{stage}</span>
				<span className='subtitle'>{title}</span>
				<ul>
					{items.map(el => (
						<li key={el}>{el}</li>
					))}
				</ul>
				<a href={link} target='_blank' rel='noopener noreferrer'>
					Learn more
				</a>
			</Content>
		</Container>
	);
};

const Logo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
	border-radius: 50%;
	border: solid 1px ${variables.colors.font_default};
	width: 3rem;
	height: 3rem;
	position: relative;
	top: 20px;
	&::after {
		content: '.';
		height: 1px;
		width: 3rem;
		display: block;
		position: absolute;
		border-top: 2px solid ${variables.colors.gray};
		color: transparent;
		left: 60px;
	}
	img {
		width: 1.3rem;
	}
`;

const Container = styled.div`
	display: flex;
	gap: 5rem;
	/* 	width: 50%; //center to the middle
	transform: translateX(85%); */

	@media only screen and (max-width: ${variables.mediaQueries.mobile_xl}) {
		transform: translateX(0%);
		width: 100%;
		gap: 3rem;
		${Logo} {
			&:after {
				width: 1rem;
				transform: translateY(-12px);
			}
		}
	}
	@media only screen and (max-width: ${variables.mediaQueries.mobile}) {
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		text-align: center;
		${Logo} {
			&:after {
				display: none;
			}
		}
	}
`;

const LogoContainer = styled.div``;
const Content = styled.div`
	display: flex;
	flex-direction: column;
	color: ${variables.colors.gray};
	.subtitle {
		font-weight: ${variables.font.regular};
		color: ${variables.colors.font_default};
		margin: 5px 0;
	}
	ul {
		margin-bottom: 1rem;
	}
`;
