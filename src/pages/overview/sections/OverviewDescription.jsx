import styled from 'styled-components';
import { motion } from 'framer-motion';

import { variables } from '../../../shared/GlobalStyles';
import { TitleSection } from '../../../shared/GlobalStyles';

export const OverviewDescription = () => {
	// This code can be refactor with a main container to not overwrite "initial='hidden, 	whileInView='show''" but the staggerChildren is not working properly

	const fromRightVar = {
		hidden: { x: -200, opacity: 0 },
		show: {
			x: 0,
			opacity: 1,

			transition: {
				duration: variables.transitions.duration,
				ease: variables.transitions.ease,
				delay: 0.3,
			},
		},
	};

	const fromLeftVar = {
		hidden: { x: 200, opacity: 0 },
		show: {
			x: 0,
			opacity: 1,

			transition: {
				duration: variables.transitions.duration,
				ease: variables.transitions.ease,
				delay: 0.3,
			},
		},
	};

	return (
		<div className='section'>
			<TitleSection content={'Magic all around'} />
			<Grid>
				<Element
					className='a'
					variants={fromRightVar}
					viewport={{ once: true }}
					initial='hidden'
					whileInView='show'
				>
					<Title>A DIFFERENT TAKE ON A “PLAY TO EARN GAME”</Title>
					<Content>
						A Up to 11 different benefits spread over 3 values levels{' '}
						<a
							className='link'
							href='http://'
							target='_blank'
							rel='noopener noreferrer'
						>
							Learn more
						</a>
					</Content>
				</Element>
				<Element
					className='b'
					variants={fromLeftVar}
					viewport={{ once: true }}
					initial='hidden'
					whileInView='show'
				>
					<Title>
						<B>NFT</B> <br />
						<B style={{ fontWeight: variables.font.regular }}>NFT Collection</B>
					</Title>
					<Content>NFT stands for NFT Chair 01</Content>
				</Element>
				<Element
					className='c'
					variants={fromRightVar}
					viewport={{ once: true }}
					initial='hidden'
					whileInView='show'
				>
					<Content>Up to an impressive 1000% Return</Content>
					<Title>
						<B>1000%</B> Return of investment
					</Title>
					<Content>
						See how it's possible {''}
						<a
							className='link'
							href='http://'
							target='_blank'
							rel='noopener noreferrer'
						>
							here
						</a>
					</Content>
				</Element>
				<Element
					className='d'
					variants={fromLeftVar}
					viewport={{ once: true }}
					initial='hidden'
					whileInView='show'
					style={{ textAlign: 'center' }}
				>
					<Title>
						<B>838</B> <br />
						<B style={{ fontWeight: variables.font.regular }}>Unique NFTs</B>
					</Title>
				</Element>
				<Element
					className='e'
					variants={fromRightVar}
					viewport={{ once: true }}
					initial='hidden'
					whileInView='show'
				>
					<TitleNumber>
						<span className='number'>4</span>
						<div>
							<B style={{ fontWeight: variables.font.regular }}>
								Super powerful rarities
							</B>
							<Content>
								Each rarity offers short, medium and long-term benefits
							</Content>
						</div>
					</TitleNumber>
				</Element>
				<Element
					className='f'
					variants={fromLeftVar}
					viewport={{ once: true }}
					initial='hidden'
					whileInView='show'
				>
					<B>333</B>
					<Title>Whitelist spots</Title>
					<Content>
						Learn how to get whitelisted {''}
						<a
							className='link'
							href='http://'
							target='_blank'
							rel='noopener noreferrer'
						>
							here
						</a>
					</Content>
				</Element>
				<Element
					className='g'
					variants={fromRightVar}
					viewport={{ once: true }}
					initial='hidden'
					whileInView='show'
				>
					<div>
						<B>838</B>
						<Title>Backup Whitelist spots</Title>
					</div>
					<Content>
						If the 333s get sold out in the whitelist, these 838s will have 2
						hours early access to mint {''}
						<a
							className='link'
							href='http://'
							target='_blank'
							rel='noopener noreferrer'
						>
							learn how
						</a>
					</Content>
				</Element>
				<Element
					className='h'
					variants={fromLeftVar}
					viewport={{ once: true }}
					initial='hidden'
					whileInView='show'
				>
					<Title>The breakthrough</Title>
					<Content>
						Each NFT is paired 1:1 to a physical product, and that's just the
						beginning
					</Content>
				</Element>
			</Grid>
		</div>
	);
};

const Grid = styled(motion.div)`
	margin: 2rem 0;
	overflow: hidden; // for animation

	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-template-rows: auto;

	/* 	grid-template-columns: 1.2fr 0.5fr 1.3fr; */
	grid-template-areas:
		'a a b'
		'c d d'
		'e e f'
		'g h h';
	.a {
		grid-area: a;
	}
	.b {
		grid-area: b;
	}
	.d {
		grid-area: d;
	}
	.c {
		grid-area: c;
	}
	.e {
		grid-area: e;
	}
	.f {
		grid-area: f;
	}
	.g {
		grid-area: g;
	}
	.h {
		grid-area: h;
	}

	@media only screen and (max-width: ${variables.mediaQueries.tablet}) {
		grid-template-columns: 1fr;
		grid-template-areas:
			'a'
			'b'
			'c'
			'd'
			'e'
			'f'
			'g'
			'h';
	}
`;
const Element = styled(motion.article)`
	border: solid 1px ${variables.colors.dark_gray};
	padding: 3rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	&.a,
	&.c,
	&.e,
	&.g {
		border-top: none;
		border-left: none;
	}
	&.b,
	&.d,
	&.f,
	&.h {
		border-top: none;
		border-right: none;
	}
`;
const Content = styled.p`
	font-weight: 400;
	font-size: clamp(0.8rem, 1vw, 3rem);
	margin: 0.5rem 0;
	color: ${variables.colors.gray};
`;
const Title = styled.span`
	font-size: clamp(1.3rem, 3vw, 8rem);
	font-weight: ${variables.font.regular};
`;

const TitleNumber = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 1rem;
	.number {
		font-size: clamp(2rem, 4.5vw, 10rem);
		font-weight: ${variables.font.bold};
	}
`;

const B = styled(Title)`
	font-size: clamp(1.3rem, 4vw, 10rem);
	font-weight: ${variables.font.medium};
`;
