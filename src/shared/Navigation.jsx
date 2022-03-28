import { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { StyledLink, variables } from './GlobalStyles';
import { css } from 'styled-components';

export const Navigation = () => {
	const location = useLocation();
	const [showNav, setShowNav] = useState(false);

	return (
		<Container hide={location.pathname === '/'}>
			<Hamburger onClick={() => setShowNav((prevState) => !prevState)}>
				<Bar show={showNav} />
				<Bar show={showNav} />
				<Bar show={showNav} />
			</Hamburger>
			<Logo>
				<StyledLink to='/'>
					<img
						src='https://i.ibb.co/cvsMgL3/divitium-white.png'
						alt='divitium-logo'
					/>
				</StyledLink>
			</Logo>
			<Ul>
				<Li>
					<StyledLink to='overview'>Overview</StyledLink>
				</Li>
				<Li>
					<StyledLink to='overview'>Overview</StyledLink>
				</Li>
				<Li>
					<StyledLink to='overview'>Overview</StyledLink>
				</Li>
				<Li>
					<StyledLink to='overview'>Overview</StyledLink>
				</Li>
				<Li>
					<StyledLink to='overview'>Overview</StyledLink>
				</Li>
				<Li>
					<StyledLink to='overview'>Overview</StyledLink>
				</Li>
				<Li>
					<StyledLink to='overview'>
						<Mint>Soon</Mint>
					</StyledLink>
				</Li>
			</Ul>
		</Container>
	);
};

const Container = styled.nav`
	display: ${(props) => (props.hide ? 'none' : 'flex')};
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
	font-size: 14px;
	border-radius: 20px;
	background-color: red;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
`;
const Logo = styled.div`
	width: 2rem;
	@media only screen and (max-width: ${variables.mediaQueries.tablet}) {
		position: absolute; // This may no work properly
		left: 50%;
		transform: translateX(-50%);
	}
`;
const Mint = styled.div``;
const Ul = styled.div`
	list-style-type: none;
	display: flex;
	gap: 1.5rem;
	@media only screen and (max-width: ${variables.mediaQueries.tablet}) {
		background-color: blue;
		flex-direction: column;
	}
`;
const Li = styled.div``;

const Hamburger = styled.div`
	cursor: pointer;
	display: none;
	@media only screen and (max-width: ${variables.mediaQueries.tablet}) {
		display: block;
	}
	${(props) =>
		props.show &&
		css`
			&:nth-child(2) {
				opacity: 0;
			}
			&:nth-child(1) {
				transform: translateY(8px) rotate(45deg);
			}
			&:nth-child(3) {
				transform: translateY(-8px) rotate(-45deg);
			}
		`}
`;
const Bar = styled.span`
	display: block;
	width: 25px;
	height: 3px;
	margin: 5px auto;
	-webkit-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
	background-color: ${variables.colors.bg_default};
	${(props) =>
		props.show &&
		css`
			&:nth-child(2) {
				opacity: 0;
			}
			&:nth-child(1) {
				transform: translateY(8px) rotate(45deg);
			}
			&:nth-child(3) {
				transform: translateY(-8px) rotate(-45deg);
			}
		`}
`;
