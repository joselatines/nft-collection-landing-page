import styled from 'styled-components';
import { motion } from 'framer-motion';

import { variables } from '../../../shared/GlobalStyles';
import img from './assets/header-min.jpg';
import { ScrollDown } from './components/ScrollDown';

export const Header = () => {
	const line1 = 'NFT NFT Collection';

	const containerVar = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.09,
			},
		},
	};

	const letterVar = {
		hidden: { opacity: 0, y: 50 },
		show: {
			opacity: 1,
			y: 0,
		},
	};

	const titleVar = {
		hidden: { opacity: 0, y: 50 },
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: variables.transitions.duration },
		},
	};

	return (
		<Container
			variants={containerVar}
			initial='hidden'
			animate='show'
			id='overview'
			className='section'
		>
			<Subtitle variants={containerVar}>
				{line1.split('').map((char, i) => {
					return (
						<motion.span key={(char, '-', i)} variants={letterVar}>
							{char}
						</motion.span>
					);
				})}
			</Subtitle>
			<Title variants={titleVar} className='title'>
				ROCKIN' THE SOLANA NETWORK
			</Title>
			<div className='scroll'>
				<ScrollDown />
			</div>
		</Container>
	);
};

const Container = styled(motion.header)`
	background-color: ${variables.colors.bg_default};
	background-image: url(${img});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	position: relative;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
	text-align: center;

	.scroll {
		position: absolute;
		bottom: 15px;
	}
`;

const Subtitle = styled(motion.h1)`
	font-weight: 400;
	font-size: 1.2rem;
	font-size: clamp(0.8rem, 6vw, 2rem);
`;
const Title = styled(motion.span)`
	font-weight: 900;
`;
