import styled from 'styled-components';
import { variables } from '../../shared/GlobalStyles';

export const OverviewDescription = () => {
	return (
		<div className='section'>
			<h2 className='title'>Magic all around</h2>
			<Grid>
				<Element className='a'>
					<Title>World’s first NFT Collection with a Multi-Value Model.</Title>
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
				<Element className='b'>
					<Title>
						<B>DC01</B> <br />
						<B style={{ fontWeight: variables.font.regular }}>NFT Collection</B>
					</Title>
					<Content>DC01 stands for Divitium Chair 01</Content>
				</Element>
				<Element className='c'>
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
				<Element className='d' style={{ textAlign: 'center' }}>
					<Title>
						<B>1111</B> <br />
						<B style={{ fontWeight: variables.font.regular }}>Unique NFTs</B>
					</Title>
				</Element>
				<Element className='e'>
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
				<Element className='f'>
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
				<Element className='g'>
					<div>
						<B>111</B>
						<Title>Backup Whitelist spots</Title>
					</div>
					<Content>
						If the 333s get sold out in the whitelist, these 111s will have 2
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
				<Element className='h'>
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

const Grid = styled.div`
	margin: 2rem 0;

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
const Element = styled.article`
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
