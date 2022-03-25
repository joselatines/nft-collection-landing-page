

import { Header, Left, Right,S2, S3, S4, S5 } from './styles';
import { Slider } from '../../shared/Slider';
import divitiumAcronym from '../../shared/assets/divitiumAcronym.svg';

export const Home = () => {
	return (
		<main>
			<Header className='section'>
				<Left>
					<h1 className='title'>Divitium</h1>
					<p> An NFT collection like never seen before</p>
				</Left>
				<Right>
					<img
						src='https://i.ibb.co/FhhYj7C/Screenshot-5.png'
						alt='DC01 nft Divitium'
					/>
				</Right>
				<ion-icon name='chevron-down-outline'></ion-icon>
			</Header>
			<S2 className='section'>
				<span className='title big'>1111</span>
				<h2 className='title'>Limited NFTs</h2>
				<p>
					Cada NFT está emparejado 1 a 1 con 1111 dispositivos físicos que serán
					fabricados y comercializados como resultado del minteo de la
					colección, de esta forma cada Holder recibirá notables recompensa
				</p>
			</S2>
			<S3>
				<img src={divitiumAcronym} alt='Divitium-letters' />
			</S3>
			<S4 className='section'>
				<h2 className='title'>Rarity</h2>
				<div className='rarity-container'>
					<div className='slider-container'>
						<Slider />
					</div>
					<div className='rarity-content-container'>
						<h3>Divitium Flamium </h3>
						<p>
							Cada rareza se caracteriza por un estilo único acompañado del
							super poder de devolver al holder el valor de su inversión
							multiplicado por una cantidad dependiendo de la rareza de su NFT.
						</p>
						<div className='rarity-content-container'>
							<span className='gold-txt'>Rarity</span>
							<span>Supreme</span>
						</div>
					</div>
				</div>
			</S4>
			<S5 className='section'>
				<h2 className='title'>Rarity</h2>
				<div className='roadmap-container'>
					<div className='stage'>
						<h2 className='gold-txt'>Stage 1</h2>
						<ul className='stage-content'>
							<h3 className='stage-title gold-txt'>The foundation</h3>
							<li>Project Incubation </li>
							<li>Next-Gen Medical Device Concept</li>
							<li>State-Of-The-Art Legal And Business Structure</li>
							<li>Highest Quality NFT Art And Value Proposition</li>
							<li>Brand Development And Exposure</li>
							<li>Utility NFT DC01 Collection Released And Public Sale</li>
						</ul>
					</div>
					<div className='stage'>
						<h2 className='gold-txt'>Stage 2</h2>
						<ul className='stage-content'>
							<h3 className='stage-title gold-txt'>The foundation</h3>
							<li>Project Incubation </li>
							<li>Project Incubation </li>
							<li>Project Incubation </li>
							<li>Project Incubation </li>
							<li>Project Incubation </li>
							<li>Project Incubation </li>
						</ul>
					</div>
					<div className='stage'>
						<h2 className='gold-txt'>Stage 2.1</h2>
						<ul className='stage-content'>
							<h3 className='stage-title gold-txt'>The foundation</h3>
							<li>Project Incubation </li>
							<li>Project Incubation </li>
							<li>Project Incubation </li>
							<li>Project Incubation </li>
							<li>Project Incubation </li>
							<li>Project Incubation </li>
						</ul>
					</div>
					<div className='stage'>
						<h2 className='gold-txt'>Stage 3</h2>
						<ul className='stage-content'>
							<h3 className='stage-title gold-txt'>The foundation</h3>
							<li>Project Incubation </li>
							<li>Project Incubation </li>
							<li>Project Incubation </li>
							<li>Project Incubation </li>
							<li>Project Incubation </li>
							<li>Project Incubation </li>
						</ul>
					</div>
				</div>
			</S5>
		</main>
	);
};
