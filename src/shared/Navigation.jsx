import { useState } from 'react';
import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

import { StyledLink, variables } from './GlobalStyles';
import logo from './assets/img/logo-white.png';
import { useEffect } from 'react';
import { useWindowWidth } from '../hooks/useWindowWidth';

export const Navigation = () => {
	const location = useLocation();
	const [showNav, setShowNav] = useState(false);
	const [hideNav, setHideNav] = useState(location.pathname === '/');

	const links = [
		{ name: 'Overview', link: '#overview' },
		{ name: 'Roadmap', link: '/overview#roadmap' },
		{ name: 'Team', link: '/overview#team' },
		{ name: 'Whitelist', link: '/whitelist' },
		{ name: 'Login', link: '/login' },
		{
			name: 'Whitepaper',
			externalLink: 'https://fonts.google.com/specimen/Roboto',
		},
		{
			name: 'Opensea',
			externalLink: 'https://fonts.google.com/specimen/Roboto',
		},
	];

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
				height: showNav ? 'fit-content' : '60px',
			}}
			style={{
				// If window is less tha 300px
				backgroundColor:
					useWindowWidth(variables.mediaQueries.tablet_number) &&
					(showNav ? variables.colors.bg_default : 'transparent'),
			}}
			initial={{ height: '60px' }}
		>
			<Hamburger
				onClick={() => setShowNav(prevState => !prevState)}
				className='Hamburger'
			>
				<Bar show={showNav} />
				<Bar show={showNav} />
			</Hamburger>
			<Logo className='Logo'>
				<StyledLink to='/'>
					<img src={logo} alt='divitium-logo' />
				</StyledLink>
			</Logo>
			<Ul className='Ul'>
				{links.map(({ name, link, externalLink }) => (
					<Li key={name}>
						{externalLink ? (
							<a href={externalLink} target='_blank'>
								{name}
							</a>
						) : (
							<HashLink smooth to={link}>
								{name}
							</HashLink>
						)}
					</Li>
				))}

				<Li>
					<StyledLink to='https://fonts.google.com/specimen/Roboto'>
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
	z-index: 100;
	transform: translateX(-50%);
	width: 90%;
	@media only screen and (max-width: ${variables.mediaQueries.tablet}) {
		align-items: flex-start;
		overflow: hidden;
		.Hamburger {
			display: block;
			position: absolute;
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
	a {
		font-weight: 300;
		opacity: 0.8;
		color: ${variables.colors.font_default};
	}
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
	width: 20px;
	height: 2px;
	margin: 5px auto;
	-webkit-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
	background-color: ${variables.colors.font_default};
	// Effect
	${props =>
		props.show &&
		css`
			&:nth-child(1) {
				transform: translateY(7px) rotate(45deg);
			}
			&:nth-child(2) {
				transform: rotate(-45deg);
			}
		`}
`;

const Mint = styled.div``;
