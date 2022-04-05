import styled from 'styled-components';
import { variables } from '../../../shared/GlobalStyles';

export const NFTOverview = ({
	img,
	title,
	type,
	rarity,
	supply,
	roi,
	description,
	left,
}) => {
	return (
		<Container style={{ flexDirection: left && 'row-reverse' }}>
			<Content>
				<div className='title'>{title}</div>
				<p>{description}</p>
			</Content>
			<Img>
				<img src={img} alt={type} />
			</Img>
		</Container>
	);
};

const Content = styled.div`
	width: 50%;
	p {
		color: ${variables.colors.gray};
		font-weight: ${variables.font.regular};
		margin: 1rem 0;
	}
`;
const Img = styled.div`
	overflow: hidden;
	width: 50%;
	height: 70%;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5rem;
	@media only screen and (max-width: ${variables.mediaQueries.tablet}) {
		// Make responsive and images over text
		display: grid;
		grid-template-columns: auto;
		grid-template-rows: auto auto;
		grid-template-areas:
			'content'
			'img';
		align-self: center;
		gap: 1rem;
		${Img}, ${Content} {
			width: 100%;
			height: 100%;
		}
		${Img} {
			grid-area: img;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		${Content} {
			grid-area: content;
			width: 100%;
		}
	}
`;
