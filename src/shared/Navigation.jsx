import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { StyledLink, variables } from './GlobalStyles';

export const Navigation = () => {
	const location = useLocation();
	console.log(location);
	return (
		<Container hide={location.pathname === '/'}>
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
			</Ul>
			<Mint>Soon</Mint>
			<Hamburger>
				<Bar />
				<Bar />
				<Bar />
			</Hamburger>
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
	@media only screen and (max-width: ${variables.mediaQueries.tablet}) {
	}
`;
const Logo = styled.div`
	width: 2rem;
`;
const Mint = styled.div``;
const Ul = styled.div`
	list-style-type: none;
	display: flex;
	gap: 1.5rem;
`;
const Li = styled.div``;

const Hamburger = styled.div`
	cursor: pointer;
`;
const Bar = styled.span`
	display: block;
	width: 25px;
	height: 3px;
	margin: 5px auto;
	-webkit-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
	background-color: #101010;
`;
