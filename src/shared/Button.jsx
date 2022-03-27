import styled from 'styled-components';
import { variables } from './GlobalStyles';

export const Button = styled.button`
	all: unset;
	padding: 1rem 4rem;
	max-width: 2rem;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${variables.colors.primary};
	border-radius: 50px;
`;
