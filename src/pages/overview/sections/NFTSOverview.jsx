import styled from 'styled-components';
import { NFTOverview } from './components/NFTOverview';
import orange from './assets/orange-min.jpg';
import purple from './assets/purple-min.jpg';
import yellow from './assets/yellow-min.jpg';
import blue from './assets/blue-min.jpg';
import { TitleSection } from '../../../shared/GlobalStyles';

export const NFTSOverview = () => {
	const nfts = [
		{
			img: purple,
			title: 'Hi, beauty.',
			type: 'NFT Purple',
			rarity: 'Radical',
			supply: '500 ETH',
			roi: '2x',
			left: false,
			description:
				"Creadore is developing its own Metaverse and you will have access to it!! More info on this, features, released alongside Creadore's Roadmap. Metaverse itself will have its own Roadmap full of development and features.",
		},
		{
			img: orange,
			title: 'Let it flow.',
			type: 'NFT Orange',
			rarity: 'Epic',
			supply: '50 ETH',
			roi: '5x',
			left: true,
			description:
			"Creadore is developing its own Metaverse and you will have access to it!! More info on this, features, released alongside Creadore's Roadmap. Metaverse itself will have its own Roadmap full of development and features.",
		},
		{
			img: yellow,
			title: 'Oh my gold!',
			type: ' NFT Yellow',
			rarity: 'Legendary',
			supply: '191 ETH',
			roi: '8x',
			left: true,
			description:
			"Creadore is developing its own Metaverse and you will have access to it!! More info on this, features, released alongside Creadore's Roadmap. Metaverse itself will have its own Roadmap full of development and features.",
		},
		{
			img: blue,
			title: 'Light it up.',
			type: ' NFT Blue',
			rarity: 'Supreme',
			supply: '20 ETH',
			roi: '10x',
			left: false,
			description:
			"Creadore is developing its own Metaverse and you will have access to it!! More info on this, features, released alongside Creadore's Roadmap. Metaverse itself will have its own Roadmap full of development and features.",
		},
	];

	return (
		<Container className='section' id='nfts'>
			<div className='titles'>
				<TitleSection content='Super rude' />
				<TitleSection content='Golems' />
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
