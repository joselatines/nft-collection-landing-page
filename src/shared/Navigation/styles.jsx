import styled from 'styled-components';
import { variables } from '../GlobalStyles';

export const Container = styled.nav`
	padding: 15px;
	position: fixed;
	width: 100%;
`;

export const LinksContainer = styled.ul`
	list-style-type: none;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	font-weight: 600;
`;

export const Logo = styled.div`
	width: 1rem;
`;
