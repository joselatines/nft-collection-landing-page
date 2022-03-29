import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export const variables = {
	colors: {
		primary: '#963aff',
		secondary: '#3461FF',
		bg_default: '#060606',
		gray: '#bebebe',
		dark_gray: '#222',
		font_default: '#fff',
	},
	font: {
		size: '16px',
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
        object-fit: cover;
    }
    a{
        text-decoration: none;
        color: unset;
    }
    p {
        color: ${variables.font.gray};
    }

    .link {
        font-weight: 400;
        color: ${variables.colors.secondary}
    }
    .gold {
        color:  #D5AD6D; /*if no support for background-clip*/ 
        background: -webkit-linear-gradient(transparent, transparent),
                    -webkit-linear-gradient(top, rgba(213,173,109,1) 0%, rgba(213,173,109,1) 26%, rgba(226,186,120,1) 35%, rgba(163,126,67,1) 45%, rgba(145,112,59,1) 61%, rgba(213,173,109,1) 100%);
        background: -o-linear-gradient(transparent, transparent);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
   }
    .section {
        padding:  5rem 3rem;
    }
    .title {
        font-size: 4rem; 
        font-weight: 900;
    }
  
`;
