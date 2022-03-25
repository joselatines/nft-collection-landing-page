import { createGlobalStyle } from 'styled-components';

export const variables = {
	colors: {
		primary: '#735DFF',
		secondary: '#3461FF',
		bg_default: '#060606',
		font_default: '#fff',
	},
	font: {
		size: '24px',
	},
	mediaQueries: {
		mobile_l: '425px',
		tablet: '768px',
		laptop: '1024px',
	},
	transitions: {
		short: 'ease-in-out .5s',
	},
};

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Source Sans Pro', sans-serif, Helvetica, Arial ;
        background-color: ${variables.colors.bg_default};
        color:  ${variables.colors.font_default};
        font-size: ${variables.font.size};
    }
    img {
        width: 100%;
        object-fit: contain;
    }
    a{
        text-decoration: none;
        color: unset;
    }

    .section {
        padding:  5rem 3rem;
    }
    .title {
        font-size: clamp(1rem, 10vw, 6rem); 
        font-weight: 900;
    }
    .gold-txt {
        font-weight: 600;
        background: linear-gradient(to bottom, #cfc09f 22%,#634f2c 24%, #cfc09f 26%, #cfc09f 27%,#ffecb3 40%,#3a2c0f 78%); 
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: #fff;
        position: relative;
        text-transform: uppercase;	
        font-weight: 400;
        &:after {
        background: none;
        content: attr(data-heading);
        left: 0;
        top: 0;
        z-index: -1;
        position: absolute;
        text-shadow: 
            -1px 0 1px #c6bb9f, 
            0 1px 1px #c6bb9f, 
            5px 5px 10px rgba(0, 0, 0, 0.4),
            -5px -5px 10px rgba(0, 0, 0, 0.4);
}
    }
    @media only screen and (max-width: ${variables.mediaQueries.mobile_l}) {
        body {
            text-align: center;
        }

    }
`;
