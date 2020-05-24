import { normalize } from 'polished';
import { css } from 'styled-components';

import theme from '../config/theme';

export default css`
	${normalize};

	html {
		font-size: 16px;
		box-sizing: border-box;
	}

	*,*:before,*:after {
		box-sizing: inherit;
	}

	body {
		padding: 0;
		margin: 0;
		font-family: 'Work Sans', sans-serif;
		line-height: 1.5;
		overflow-x: hidden;
		color: ${theme.color.text};
	}

	h1,h2,h3,h4,h5 {
		text-transform: uppercase;
		font-family: 'Squada One', sans-serif;
		line-height: 1;
	}

	button {
		padding: 0;
		border: 0;
		background: none;

		&:not([disabled]) {
			cursor: pointer;
		}
	}

	ul {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	a {
		color: ${theme.color.brand['500']};
		text-decoration: none;
		transition: .3s;

		&:hover {
			color: ${theme.color.brand['400']};
		}
	}

	p {
		margin: 0;
		font-size: 1.125rem;

		@media (max-width: 599px) {
			font-size: 0.9375rem;
		}
	}

	svg {
		display: block;
		fill: currentColor;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0,0,0,0);
		border: 0;
	}

	.slick-dots.slick-dots {
		display: flex!important;
		justify-content: center;
		margin-top: 15px;

		li {
			+li {
				margin-left: 6px;
			}

			button {
				width: 10px;
				height: 10px;
				padding: 0;
				border-radius: 5px;
				background: ${theme.dots.inactive};
			}

			&.slick-active {
				button {
					background: ${theme.dots.active};
				}
			}
		}
	}
`;
