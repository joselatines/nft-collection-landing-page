import styled from 'styled-components';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Slider = () => {
	const [position, setPosition] = useState(0);
	const toLeft = () => {
		if (position > 0) {
			setPosition(position - 1);
		}
	};
	const toRight = () => position < obj.length - 1 && setPosition(position + 1);

	const obj = [
		{
			img: 'https://lh3.googleusercontent.com/oTJE2ManmMMl4TBw-Ao0QjSFXwNQZBuphqyQ216KIqG3HYHl5U1DDdrIK6riZR1fo_smw35WmgcGvgNllpquk_fCSwTaXkIjo4XFCQ=w1400-k',
			content: 'Primero',
		},
		{
			img: 'https://watcher.guru/news/wp-content/uploads/2021/10/unnamed.png',
			content: 'Segundo',
		},
		{
			img: 'https://lh3.googleusercontent.com/A4oJaaGed6XFjsTSzEPH-_beC46j44qlB7kysjPiYxBQmfei1Rg0COmLIVsyH4iKt1xmEwZeoKvXD5RKt-T_gdp8Xv2xm5f2cv0S5w=w1400-k',
			content: 'Tercero',
		},
		{
			img: 'https://observer.com/wp-content/uploads/sites/2/2021/08/Yuga-Labs-Bored-Ape-Yacht-Club-5812.jpg?quality=80',
			content: 'Cuarto',
		},
	];
	return (
		<Container>
			<div className='slider'>
				{obj.map(({ img }, i) => (
					<motion.div
						animate={{
							// The 400 value means 400px (each image size)
							left: `${(i - position) * 400}px`,
						}}
						key={i}
						className='slide'
					>
						<img src={img} alt='NFT nft NFT' />
					</motion.div>
				))}
			</div>
			<div className='btns'>
				<div className='left' onClick={toLeft}>
					<ion-icon name='chevron-back-outline'></ion-icon>
				</div>

				<div className='right' onClick={toRight}>
					<ion-icon name='chevron-forward-outline'></ion-icon>
				</div>
			</div>
		</Container>
	);
};

const Container = styled.div`
	justify-content: center;
	align-items: center;
	display: flex;
	position: relative;
	width: 18rem; // left: i - position * 300px
	height: 18rem; // left: i - position * 300px
	.slider {
		// Slider effect
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		.slide {
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
		}
	}
	.btns {
		.left,
		.right {
			position: absolute;
			z-index: 10;
			cursor: pointer;
			top: 50%;
			font-size: 40px;
		}
		.left {
			left: -50px;
		}
		.right {
			right: -50px;
		}
	}
`;
