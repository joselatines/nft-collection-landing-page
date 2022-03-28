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
	left: 51%;
	transform: translate(-50%, -50%);
	font-weight: 600;
	font-size: 2.2rem;
`;
const Spinner = styled.div`
	position: relative;
	width: 10rem; // Variable
	height: 10rem; // Variable
	&:before,
	&:after {
		content: '';
		display: block;
		position: absolute;
		border-width: 1px;
		border-style: solid;
		border-radius: 50%;
		border-color: ${variables.colors.gray};
	
	}
	@keyframes scale-2 {
		0% {
			transform: scale(1);
			opacity: 0;
		}

		50% {
			transform: scale(1.1);
			opacity: 1;
		}

		100% {
			transform: scale(1.3);
			opacity: 0;
		}
	}

	&:before {
		width: 10rem; // Variable
		height: 10rem; // Variable
	
		top: 0px;
		left: 0px;
		animation: scale-2 2s linear 0s infinite;
	}

	&:after {
		width: 10rem; // Variable
		height: 10rem; // Variable
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
