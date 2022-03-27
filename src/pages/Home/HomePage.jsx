import styled from 'styled-components';
import { motion } from 'framer-motion';

import { StyledLink, variables } from '../../shared/GlobalStyles';

export const HomePage = () => {


	return (
		<Container>
			<StyledLink to='overview'>
				<SpinnerBlock className='spinner-block'>
					<SpinnerTitle>DC01</SpinnerTitle>
					<Spinner className='spinner spinner-3'></Spinner>
				</SpinnerBlock>
			</StyledLink>
		</Container>
	);
};

const SpinnerBlock = styled.div`
	position: relative;
`;
const SpinnerTitle = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	font-weight: 600;
	font-size: 2.3rem;
`;
const Spinner = styled.div`
	position: relative;
	width: 200px; // Variable
	height: 200px; // Variable
	&:before,
	&:after {
		content: '';
		display: block;
		position: absolute;
		border-width: 4px;
		border-style: solid;
		border-radius: 50%;
	}
	@keyframes scale-2 {
		0% {
			transform: scale(0);
			opacity: 0;
		}

		50% {
			transform: scale(0.7);
			opacity: 1;
		}

		100% {
			transform: scale(1);
			opacity: 0;
		}
	}

	&:before {
		width: 200px;
		height: 200px;
		border-color: red solid 1px;
		top: 0px;
		left: 0px;
		animation: scale-2 2s linear 0s infinite;
	}

	&:after {
		width: 200px;
		height: 200px;
		border-color: red solid 1px;
		top: 0;
		left: 0;
		opacity: 0;
		animation: scale-2 2s linear 0.5s infinite;
	}
`;

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	height: 90vh;
	img {
		width: 1rem;
	}
`;

