import { useState } from 'react';
import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { StyledLink, variables } from './GlobalStyles';
import logo from './assets/img/logo.png';
import { useEffect } from 'react';

const Navigation = () => {
	const location = useLocation();
	const [showNav, setShowNav] = useState(false);
	const [hideNav, setHideNav] = useState(location.pathname === '/');

	useEffect(() => {
		// Every time the location changes the hideNav state it's update
		setHideNav(location.pathname === '/');
	}, [location.pathname]);

	return (
		<Container
			// Styled components props only receives strings
			hide={hideNav.toString()}
			show={showNav.toString()}
			transition={{
				duration: 0.5,
			}}
			animate={{
				height: showNav ? '350px' : '60px',
				backgroundColor: showNav ? variables.colors.bg_default : 'transparent',
			}}
			initial={{ height: '60px', backgroundColor: 'transparent' }}
		>
			<Hamburger
				onClick={() => setShowNav(prevState => !prevState)}
				className='Hamburger'
			>
				<Bar show={showNav} />
				<Bar show={showNav} />
				<Bar show={showNav} />
			</Hamburger>
			<Logo className='Logo'>
				<StyledLink to='/'>
					<img src={logo} alt='divitium-logo' />
				</StyledLink>
			</Logo>
			<Ul className='Ul'>
				<Li className='Li-active'>
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

const Container = styled(motion.header)`
	display: ${props => (props.hide === 'true' ? 'none' : 'flex')};
	align-items: center;
	justify-content: space-between;
	padding: 1rem 1.5rem;
	font-size: 14px;
	border-radius: 30px;
	background-color: rgba(190, 190, 190, 0.241);
	position: fixed;
	top: 15px;
	left: 50%;
	transform: translateX(-50%);
	width: 90%;
	@media only screen and (max-width: ${variables.mediaQueries.tablet}) {
		align-items: flex-start;
		/* background-color: ${variables.colors.bg_default}; */
		overflow: hidden;
		.Hamburger {
			@media only screen and (max-width: ${variables.mediaQueries.tablet}) {
				display: block;
				position: absolute;
			}
		}
		.Logo {
			position: absolute; // This may no work properly
			left: 48%;
			transform: translateX(-50%);
			top: 10px;
		}
		.Ul {
			flex-direction: column;
			margin-top: 50px;
			width: 100%;
		}
	}
`;
const Logo = styled.div`
	width: 1.5rem;
`;

const Ul = styled.div`
	list-style-type: none;
	display: flex;
	gap: 1.5rem;
	.Li-active {
		font-weight: 500;
		opacity: 1;
	}
`;
const Li = styled.div`
	font-weight: 300;
	opacity: 0.8;
	&:hover {
		opacity: 1;
	}
`;

const Hamburger = styled.div`
	cursor: pointer;
	display: none;
`;
const Bar = styled.span`
	display: block;
	width: 25px;
	height: 3px;
	margin: 5px auto;
	-webkit-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
	background-color: ${variables.colors.font_default};
	// Effect
	${props =>
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

const Mint = styled.div``;
