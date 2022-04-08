import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { variables } from '../../../../shared/GlobalStyles';

export const TeamCard = ({ name, content, img }) => {
	const [isFlip, setIsFlip] = useState(false); // Delete this if you want to flip on hover

	const cardVar = {
		hidden: { scale: 0 },
		show: { scale: 1, transition: { duration: 1 } },
	};

	return (
		<motion.div variants={cardVar} initial='hidden' whileInView='show'>
			<Card onClick={() => setIsFlip(!isFlip)} isFlip={isFlip} img={img}>
				<div className='front'></div>

				<div className='back'>
					<p>
						<strong>{name}</strong> {content}
					</p>
				</div>
			</Card>
		</motion.div>
	);
};

const Card = styled.div`
	/* THE CARD HOLDS THE FRONT AND BACK FACES */
	width: 18rem;
	height: 10rem;
	border-radius: 15px;
	transform-style: preserve-3d;
	transition: all 0.8s ease;
	cursor: default;
	transform: ${({ isFlip }) => isFlip && 'rotateY(180deg)'};

	/* HE PSEUDO CLASS CONTROLS THE FLIP ON MOUSEOVER AND MOUSEOUT 
	&:hover {
		transform: rotateY(180deg);
	} */

	.front,
	.back {
		position: absolute;
		width: 100%;
		height: 100%;
		overflow: hidden;
		backface-visibility: hidden;
		border-radius: 10px;
	}

	/* THE FRONT FACE OF THE CARD, WHICH SHOWS BY DEFAULT */
	.front {
		background-color: ${variables.colors.bg_default};
		background-image: url(${({ img }) => img});
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	/* THE BACK FACE OF THE CARD, WHICH SHOWS ON MOUSEOVER */
	.back {
		background: transparent;
		color: ${variables.colors.gray};
		transform: rotateY(180deg);
		font-size: 0.8rem;
		padding: 1rem;
		text-align: center;
		display: grid;
		align-items: center;
		justify-content: center;
		strong {
			color: ${variables.colors.font_default};
		}
	}
`;
