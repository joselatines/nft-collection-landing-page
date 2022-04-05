import styled from 'styled-components';
import { NFTOverview } from './components/NFTOverview';
import epic from './assets/epic.png';
import radical from './assets/radical.png';
import legendary from './assets/legendary.png';
import supreme from './assets/supreme.jpg';

export const NFTSOverview = () => {
	const nfts = [
		{
			img: radical,
			title: 'Hi, beauty.',
			type: 'Divitium Solidum',
			rarity: 'Radical',
			supply: '500 pcs',
			roi: '2x',
			left: false,
			description:
				'This DC01 NFT offers a 200% return on investment.When the physical product that bears the same serial number as this piece is sold, the holder will receive 2 times the original minting price they paid on Private or Public Sale.',
		},
		{
			img: epic,
			title: 'Let it flow.',
			type: 'Divitium Liquidum',
			rarity: 'Epic',
			supply: '50 pcs',
			roi: '5x',
			left: true,
			description:
				'This DC01 NFT offers a 500% return on investment. When the physical product that bears the same serial number as this piece is sold, the holder will receive 5 times the original minting price they paid on Private or Public Sale..',
		},
		{
			img: legendary,
			title: 'Oh my gold!',
			type: ' Divitium Aurum',
			rarity: 'Legendary',
			supply: '191 pcs',
			roi: '8x',
			left: false,
			description:
				'This DC01 NFT offers a 800% return on investment. When the physical product that bears the same serial number as this piece is sold, the holder will receive 8 times the original minting price they paid on Private or Public Sale.',
		},
		{
			img: supreme,
			title: 'Light it up.',
			type: ' Divitium Flamium',
			rarity: 'Supreme',
			supply: '20 pcs',
			roi: '10x',
			left: true,
			description:
				'This DC01 NFT offers a 1000% return on investment. When the physical product that bears the same serial number as this piece is sold, the holder will receive 10 times the original minting price they paid on Private or Public Sale',
		},
	];

	return (
		<Container className='section'>
			<div className='titles'>
				<span className='title'>Real Product</span> <br />
				<span className='title'>Real Impact</span>
			</div>
			{nfts.map(
				({ img, title, type, rarity, supply, roi, description, left }) => (
					<NFTOverview
						key={title}
						img={img}
						title={title}
						type={type}
						rarity={rarity}
						supply={supply}
						roi={roi}
						description={description}
						left={left}
					/>
				)
			)}
		</Container>
	);
};

const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 5rem;
	.titles {
		text-align: center;
		margin-bottom: 1rem;
	}
`;
