import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { variables } from './GlobalStyles';

export const Button = ({ content, icon, link }) => {
	return (
		<Container>
			<a href={link} target='_blank' rel='noopener noreferrer'>
				{content}
				{icon && icon}
			</a>
		</Container>
	);
};

Button.defaultProps = {
	content: 'Button',
};
Button.propTypes = {
	content: PropTypes.string.isRequired,
	type: PropTypes.string,
};

const Container = styled.button`
	width: fit-content;
	border-radius: 50px;
	cursor: pointer;
	outline: none;
	color: ${variables.colors.gray};

	a {
		transition: all 0.5s ease;
		color: inherit;
	}

	/* From cssbuttons.io by @nikk7007 */
	padding: 0.8em 1.8em;
	border: 1px solid ${variables.colors.font_default};
	position: relative;
	overflow: hidden;
	background-color: transparent;
	text-align: center;
	font-size: 16px;
	transition: 0.3s;
	z-index: 1;

	&::before {
		content: '';
		width: 0;
		height: 500%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
		background: ${variables.colors.font_default};
		transition: 0.5s ease;
		display: block;
		z-index: -1;
	}

	&:hover:before {
		width: 105%;
	}

	&:hover {
		color: ${variables.colors.bg_default};
	}
`;
