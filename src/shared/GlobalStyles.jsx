import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export const variables = {
	colors: {
		primary: '#963aff',
		secondary: '#3496ff',
		bg_default: '#060606',
		gray: '#bebebe',
		dark_gray: '#222',
		font_default: '#fff',
	},
	font: {
		size: '16px',
		light: 300,
		regular: 400,
		medium: 600,
		bold: 700,
		black: 900,
	},
	mediaQueries: {
		mobile_l: '425px',
		tablet: '768px',
		tablet_number: 768,
		laptop: '1024px',
	},
	transitions: {
		short: 'ease-in-out .5s',
	},
};

export const StyledLink = styled(Link)`
	all: unset;
	cursor: pointer;
`;

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Roboto', sans-serif, Helvetica, Arial ;
        background-color: ${variables.colors.bg_default};
        color:  ${variables.colors.font_default};
        font-size: ${variables.font.size};
        line-height: 1.1;
        letter-spacing: 1.1px;
    }
    img {
        width: 100%;
        object-fit: contain;
    }
    a{
        text-decoration: none;
        color:  ${variables.colors.secondary}
    }
    p {
        color: ${variables.font.gray};
    }

    .link {
        font-weight: 400;
        color: ${variables.colors.secondary}
    }
    .section {
        padding:  6rem 3rem;
    }
    .title {
        font-size: 4rem; 
        font-weight: ${variables.font.black};
    }
    .subtitle {
        font-size: 2rem; 
        font-weight: ${variables.font.medium};
    }
  
`;
