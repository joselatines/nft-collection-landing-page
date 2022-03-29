import styled from 'styled-components';
import { variables } from '../../../shared/GlobalStyles';

export const OverviewDescription = () => {
	return (
		<Container className='section'>
			<MainTitle className='title'>Real utility actually real</MainTitle>
			<Grid>
				<Element className='a'>
					<Title>World's first NFT Collection width a Multi-Value Model</Title>
					<Content>
						A Up to 11 diferent benefits spread over 3 values levels{' '}
						<a
							className='link'
							href='http://'
							target='_blank'
							rel='noopener noreferrer'
						>
							learn more
						</a>
					</Content>
				</Element>
				<Element className='b'>
					<Title>World's first NFT Collection width a Multi-Value Model</Title>
					<Content>
						b Up to 11 diferent benefits spread over 3 values levels{' '}
						<a
							className='link'
							href='http://'
							target='_blank'
							rel='noopener noreferrer'
						>
							learn more
						</a>
					</Content>
				</Element>
				<Element className='c'>
					<Title>World's first NFT Collection width a Multi-Value Model</Title>
					<Content>
						c Up to 11 diferent benefits spread over 3 values levels{' '}
						<a
							className='link'
							href='http://'
							target='_blank'
							rel='noopener noreferrer'
						>
							learn more
						</a>
					</Content>
				</Element>
				<Element className='d'>
					<Title>World's first NFT Collection width a Multi-Value Model</Title>
					<Content>
						d Up to 11 diferent benefits spread over 3 values levels{' '}
						<a
							className='link'
							href='http://'
							target='_blank'
							rel='noopener noreferrer'
						>
							learn more
						</a>
					</Content>
				</Element>
				<Element className='e'>
					<Title>World's first NFT Collection width a Multi-Value Model</Title>
					<Content>
						e Up to 11 diferent benefits spread over 3 values levels{' '}
						<a
							className='link'
							href='http://'
							target='_blank'
							rel='noopener noreferrer'
						>
							learn more
						</a>
					</Content>
				</Element>
				<Element className='f'>
					<Title>World's first NFT Collection width a Multi-Value Model</Title>
					<Content>
						f Up to 11 diferent benefits spread over 3 values levels{' '}
						<a
							className='link'
							href='http://'
							target='_blank'
							rel='noopener noreferrer'
						>
							learn more
						</a>
					</Content>
				</Element>
				<Element className='g'>
					<Title>World's first NFT Collection width a Multi-Value Model</Title>
					<Content>
						g Up to 11 diferent benefits spread over 3 values levels{' '}
						<a
							className='link'
							href='http://'
							target='_blank'
							rel='noopener noreferrer'
						>
							learn more
						</a>
					</Content>
				</Element>
				<Element className='h'>
					<Title>World's first NFT Collection width a Multi-Value Model</Title>
					<Content>
						h Up to 11 diferent benefits spread over 3 values levels{' '}
						<a
							className='link'
							href='http://'
							target='_blank'
							rel='noopener noreferrer'
						>
							learn more
						</a>
					</Content>
				</Element>
			</Grid>
		</Container>
	);
};

const Container = styled.section``;
const MainTitle = styled.h2`
	text-align: center;
`;
const Grid = styled.div`
	margin: 2rem 0;

	display: grid;
	grid-template-columns: 1.2fr 0.5fr 1.3fr;
	grid-template-rows: 1fr 1fr 1fr 1fr;
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
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
	}
	@media only screen and (max-width: ${variables.mediaQueries.mobile_l}) {
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

const Title = styled.h3`
	font-weight: 600;
	font-size: 1.5rem;
`;
const Content = styled.p`
	font-weight: 400;
	font-size: 1rem;
	color: ${variables.colors.gray};
`;
