import epic from './assets/epic.png';
import radical from './assets/radical.png';
import legendary from './assets/legendary.png';
import supreme from './assets/supreme.jpg';
import { NFTRoi } from './components/NFTRoi';
import { TitleSection } from '../../../shared/GlobalStyles';

export const NFTSRoi = () => {
	const nfts = [
		{
			img: radical,
			name: 'Divitium Solidum',
			rarity: 'Radical',
			supply: '500 pcs',
			supplyPercentage: 100, // This is for css
			roi: '2x',
			roiPercentage: 20, // This value has to be higher than 10
		},
		{
			img: epic,
			name: 'Divitium Liquidum',
			rarity: 'Epic',
			supply: '50 pcs',
			supplyPercentage: 80,
			roi: '5x',
			roiPercentage: 50,
		},
		{
			img: legendary,
			name: 'Divitium Aurum',
			rarity: 'Epic',
			supply: '191 pcs',
			supplyPercentage: 30,
			roi: '8x',
			roiPercentage: 80,
		},
		{
			img: supreme,
			name: 'Divitium Flamium',
			rarity: 'Epic',
			supply: '20 pcs',
			supplyPercentage: 20,
			roi: '5x',
			roiPercentage: 100,
		},
	];

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
