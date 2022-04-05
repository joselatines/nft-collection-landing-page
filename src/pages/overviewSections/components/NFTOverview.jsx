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
			<Left>
				<div className='subtitle'>{title}</div>
				<ul>
					<li>Type: {type}</li>
					<li>Rarity: {rarity}</li>
					<li>Supply: {supply}</li>
					<li>ROI: {roi}</li>
				</ul>
				<p>{description}</p>
			</Left>
			<Right>
				<img src={img} alt={type} />
			</Right>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5rem;
	@media only screen and (max-width: ${variables.mediaQueries.tablet}) {
		flex-wrap: wrap;
	}
`;
const Left = styled.div`
	width: 50%;
	.subtitle {
		font-size: clamp(1.3rem, 6vw, 10rem);
	}
	ul {
		list-style-type: none;
		margin: 1.5rem 0;
		li {
			margin: 0.5rem 0;
		}
	}
	p {
		color: ${variables.colors.gray};
		font-weight: ${variables.font.regular};
	}
`;
const Right = styled.div`
	overflow: hidden;
	width: 50%;
	height: 70%;
`;
