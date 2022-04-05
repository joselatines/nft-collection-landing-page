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
    .gold {
        background: rgb(207,192,159);
        background: -moz-linear-gradient(180deg, rgba(207,192,159,1) 0%, rgba(255,236,179,1) 45%, rgba(174,127,34,1) 100%);
        background: -webkit-linear-gradient(180deg, rgba(207,192,159,1) 0%, rgba(255,236,179,1) 45%, rgba(174,127,34,1) 100%);
        background: linear-gradient(180deg, rgba(207,192,159,1) 0%, rgba(255,236,179,1) 45%, rgba(174,127,34,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#cfc09f",endColorstr="#ae7f22",GradientType=1);
        -webkit-background-clip: text; // To work in text
        -webkit-text-fill-color: transparent; // To work in text
        color: ${variables.colors.primary};
    }
    .section {
        padding: 5rem;
        @media only screen and (max-width: ${variables.mediaQueries.tablet}) {
            padding: 2rem 1rem ;
        }
    }
    .title {
        font-size: clamp(1.3rem, 15vw, 5rem);
        font-weight: ${variables.font.black};
    }
    .subtitle {
        font-size: clamp(.8rem, 4vw, 7rem);
        font-weight: ${variables.font.medium};
    }
  
`;
