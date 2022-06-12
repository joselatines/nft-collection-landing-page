import orange from './assets/orange-min.jpg';
import purple from './assets/purple-min.jpg';
import yellow from './assets/yellow-min.jpg';
import blue from './assets/blue-min.jpg';
import { NFTRoi } from './components/NFTRoi';
import { TitleSection } from '../../../shared/GlobalStyles';

const nfts = [
	{
		img: purple,
		name: 'NFT Purple',
		rarity: 'Radical',
		supply: '500 ETH',
		supplyPercentage: 100, // This is for css
		roi: '2x',
		roiPercentage: 20, // This value has to be higher than 10
	},
	{
		img: orange,
		name: 'NFT Orange',
		rarity: 'Supreme',
		supply: '50 ETH',
		supplyPercentage: 80,
		roi: '5x',
		roiPercentage: 50,
	},
	{
		img: yellow,
		name: 'NFT Yellow',
		rarity: 'VIP',
		supply: '191 ETH',
		supplyPercentage: 30,
		roi: '8x',
		roiPercentage: 80,
	},
	{
		img: blue,
		name: 'NFT Blue',
		rarity: 'Elite',
		supply: '20 ETH',
		supplyPercentage: 20,
		roi: '5x',
		roiPercentage: 100,
	},
];
export const NFTSRoi = () => {
	return (
		<section className='section'>
			<div style={{ textAlign: 'center', marginBottom: '2rem' }}>
				<TitleSection content='NFT main specs' />
			</div>
			{nfts.map(
				({
					img,
					name,
					rarity,
					supply,
					roi,
					supplyPercentage,
					roiPercentage,
				}) => (
					<NFTRoi
						key={name}
						img={img}
						name={name}
						rarity={rarity}
						supply={supply}
						roi={roi}
						supplyPercentage={supplyPercentage}
						roiPercentage={roiPercentage}
					/>
				)
			)}
		</section>
	);
};
