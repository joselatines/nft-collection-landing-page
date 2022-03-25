import styled from 'styled-components';
import { variables } from '../../shared/GlobalStyles';

export const Header = styled.header`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	padding-bottom: 5rem;
	position: relative;
	ion-icon {
		position: absolute;
		left: 45%;
		bottom: 0;
		font-size: 3rem;
	}
	@media only screen and (max-width: ${variables.mediaQueries.mobile_l}) {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto;
	}
`;
export const Left = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	h1.title {
		font-size: clamp(1rem, 10vw, 7rem);
	}
	p {
		font-size: 2rem;
		font-weight: 300;
	}
`;
export const Right = styled(Left)`
	flex-basis: 40%;
	img {
		width: 80%;
	}
`;

export const S2 = styled.section`
	text-align: center;
	.title.big {
		font-size: clamp(2rem, 12vw, 15rem);
		letter-spacing: 0.3rem;
	}
`;

export const S3 = styled.section`
	background-color: ${variables.colors.font_default};
	color: ${variables.colors.bg_default};
	padding: 3rem 0;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	position: relative;

	img {
		width: 40%;
		z-index: 2;
	}
	// lINE THROUGH
	&:before {
		content: '';
		border-bottom: 5px solid ${variables.colors.bg_default};
		position: absolute;
		width: 100%;
		top: 50%;
		margin-top: -1px;
		z-index: 1;
	}
	.title-container {
		position: relative;
		/* 		background: ${variables.colors.font_default}; */
		background: red;
		padding: 0 3rem;

		z-index: 2;
		h2 {
			font-size: 15rem;
		}
		span {
			font-weight: 400;
			font-size: 1.5rem;
			position: absolute;
			bottom: 20px;
			&.divitium-span {
				left: 65px;
			}
			&.chair-span {
				left: 240px;
			}
			&.collection-span {
				left: 370px;
			}
		}
		@media only screen and (max-width: ${variables.mediaQueries.tablet}) {
			h2 {
				font-size: 8rem;
			}
		}
		@media only screen and (max-width: ${variables.mediaQueries.mobile_l}) {
			h2 {
				font-size: 5rem;
			}
		}
	}
`;

export const S4 = styled.section`
	.title {
		margin-bottom: 3rem;
	}
	text-align: center;
	.rarity-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: flex-start;
		justify-content: space-around;
		gap: 1rem;
		.slider-container {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.rarity-content-container {
			text-align: left;
			display: flex;
			flex-direction: column;
			margin-top: 1rem;
		}
		@media only screen and (max-width: ${variables.mediaQueries.laptop}) {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
			align-items: center;
			justify-content: center;
			gap: 1rem;
			.rarity-content-container {
				text-align: center;
			}
		}
	}
`;

export const S5 = styled.section`
	.title {
		text-align: center;
	}
	.roadmap-container {
		display: grid;
		gap: 2rem;
	}
	.stage {
		display: grid;
		justify-content: center;
		grid-template-columns: auto 45%;
		grid-auto-flow: auto;
		gap: 5rem;
		.stage-title {
			font-size: 1.8rem;
		}
		ul {
			list-style-type: none;
		}
		@media only screen and (max-width: ${variables.mediaQueries.mobile_l}) {
			grid-template-columns: auto;
			gap: 1rem;
		}
	}
`;
