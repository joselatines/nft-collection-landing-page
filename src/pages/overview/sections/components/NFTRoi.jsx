import { motion } from 'framer-motion';
import styled from 'styled-components';
import { css } from 'styled-components';
import { variables } from '../../../../shared/GlobalStyles';

export const NFTRoi = ({
	img,
	name,
	rarity,
	supply,
	roi,
	supplyPercentage,
	roiPercentage,
}) => {
	const supplyVariants = {
		hidden: { width: '0%' },
		visible: {
			width: supplyPercentage - 10 + '%',
			transition: { duration: 2, ease: 'easeInOut' },
		},
	};
	const roiVariants = {
		hidden: { width: '0%', color: 'blue' },
		visible: {
			width: roiPercentage - 10 + '%',
			transition: { duration: 2, ease: 'easeInOut' },
		},
	};

	return (
		<Container>
			<Img>
				<img src={img} alt={name} />
			</Img>
			<Content>
				<Title>{name}</Title>
				<Subtitle className='gold' loading='lazy'>
					{rarity}
				</Subtitle>

				<Effect percentageType='supply' percentage={supplyPercentage}>
					<motion.span
						variants={supplyVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						className='bar'
					></motion.span>
					<span>{supply}</span>
				</Effect>

				<Effect percentageType='roi' percentage={roiPercentage}>
					<motion.span
						variants={roiVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						className='bar'
					></motion.span>
					<span className='gold'>{roi}</span>
				</Effect>
			</Content>
		</Container>
	);
};

const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 4rem 2rem; // Line through
	border-left: solid 2px ${variables.colors.dark_gray};
`;

const Img = styled.div`
	padding: 4rem 0;
`;

const Container = styled.div`
	display: grid;
	grid-template-columns: 13rem auto;
	gap: 2rem;

	@media only screen and (max-width: ${variables.mediaQueries.mobile_l}) {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto;
		gap: 0rem;
		padding: 0;
		margin-bottom: 2rem;
		${Img} {
			padding: 0;
		}
		${Content} {
			border: none;
		}
	}
`;

const Title = styled.span`
	font-size: 1.3rem;
	font-weight: ${variables.font.regular};
`;
const Subtitle = styled(Title)`
	font-size: 1.2rem;
	font-weight: ${variables.font.medium};
`;
const Effect = styled.div`
	display: flex;
	align-items: baseline;
	gap: 0.5rem;
	.bar {
		height: 2px;
		display: block;
		background-color: ${variables.colors.font_default};
		${props =>
			props.percentageType === 'roi' &&
			css`
				background: rgb(207, 192, 159);
				background: -moz-linear-gradient(
					80deg,
					rgba(207, 192, 159, 1) 22%,
					rgba(255, 236, 179, 1) 40%,
					rgba(174, 127, 34, 1) 78%
				);
				background: -webkit-linear-gradient(
					80deg,
					rgba(207, 192, 159, 1) 22%,
					rgba(255, 236, 179, 1) 40%,
					rgba(174, 127, 34, 1) 78%
				);
				background: linear-gradient(
					80deg,
					rgba(207, 192, 159, 1) 22%,
					rgba(255, 236, 179, 1) 40%,
					rgba(174, 127, 34, 1) 78%
				);
				filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#cfc09f",endColorstr="#ae7f22",GradientType=1);
			`}
	}
`;
