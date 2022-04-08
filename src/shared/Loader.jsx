import styled from 'styled-components';

export const Loader = () => {
	return (
		<Container className='spinner'>
			<div className='loader l1'></div>
			<div className='loader l2'></div>
		</Container>
	);
};

const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	/* From cssbuttons.io by @gagan-gv */

	border: 0 solid transparent;
	border-radius: 50%;
	width: 50px;
	height: 50px;

	.loader {
		width: inherit;
		height: inherit;
		position: absolute;
	}

	.loader::before,
	.loader::after {
		content: '';
		border: 2px solid #fff;
		border-radius: 50%;
		width: inherit;
		height: inherit;
		position: absolute;
		opacity: 1;
	}

	.l1::before,
	.l1::after {
		animation: clockwiseZ 2.5s infinite;
	}

	.l2::after,
	.l2::before {
		animation: anticlockwiseZ 2.5s infinite;
	}

	@keyframes clockwiseZ {
		0%,
		100% {
			transform: rotateY(0);
		}

		50% {
			transform: rotateY(180deg) skew(-10deg, -5deg);
		}
	}

	@keyframes anticlockwiseZ {
		0%,
		100% {
			transform: rotateX(0);
		}

		50% {
			transform: rotateX(-180deg) skew(10deg, 5deg);
		}
	}
`;
