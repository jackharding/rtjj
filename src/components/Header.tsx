import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import HeadRoom from 'react-headroom';

import Button from './Button';
import Container from './Container';
import SocialLink from './SocialLink';

interface HeaderProps {
	logo: string;
}

const HeaderStyles = styled.header`
	position: absolute;
	z-index: 10;
	width: 100%;
    padding: 15px 0;
    background: rgba(255, 255, 255, 0.85);

	.headroom {
		&--unfixed {
			position: absolute;
		}
	}

	img {
		width: 108px;
	}

	${Container} {
		display: flex;
		align-items: center;
		justify-content: flex-end;

		>* {
			&:first-child {
				margin-right: auto;
			}
		}
	}

	nav {
		+* {
			margin-left: 35px;
		}
	}

	ul {
		display: flex;
		align-items: center;

		li {
			+li {
				margin-left: 25px;
			}
		}

		a {
			color: ${({ theme }) => theme.color.brand[900]};
			font-family: ${({ theme }) => theme.font.display};
			font-size: 1.125rem;
			text-transform: uppercase;
			
			&:hover {
				color: ${({ theme }) => theme.color.brand[700]};
			}
		}
	}

	${SocialLink} {
		&:last-child {
			margin-right: -13px;
		}
	}

	@media (min-width: 700px) {
		.hamburger {
			display: none;
		}
	}

	@media (max-width: 699px) {
		background: none;
		padding: 24px 0;

		img {
			width: 82px;
		}

		nav,
		nav~* {
			display: none;
		}
	}
`;

const menu = [
	{
		link: '#schedule',
		text: 'Schedule',
	},
	{
		link: '#classes',
		text: 'Classes',
	},
	{
		link: '#about',
		text: 'About RTJJ',
	},
	{
		link: '#sign-up',
		text: 'Sign up',
	},
	{
		link: '#contact',
		text: 'Contact',
	},
];

const Header: React.FC = ({ logo, instagramUrl, facebookUrl }: HeaderProps) => (
	<HeaderStyles>
		<Container size="lg">
			<img
				src={logo}
				alt="RTJJ logo"
			/>

			<button
				className="hamburger"
				type="button"
			>
				<span className="sr-only">Toggle menu</span>
				<svg
					width="29"
					height="22"
					viewBox="0 0 29 22"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						width="29"
						height="4"
						fill="#E5E2E5"
					/>
					<rect
						y="9"
						width="29"
						height="4"
						fill="#E5E2E5"
					/>
					<rect
						y="18"
						width="29"
						height="4"
						fill="#E5E2E5"
					/>
				</svg>
			</button>

			<nav>
				<ul>
					{ menu.map(({ text, link }) => (
						<li key={`link-${link}`}>
							<Button
								as="a"
								href={link}
							>
								{ text }

							</Button>
						</li>
					)) }
				</ul>
			</nav>

			{ facebookUrl ? (
				<SocialLink
					href={facebookUrl}
					target="_blank"
					small
				>
					<span className="sr-only">View our Facebook page</span>
					<svg
						width="26"
						height="30"
						viewBox="0 0 26 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M26 4.8125V25.4375C26 26.9902 24.7522 28.25 23.2143 28.25H18.2638V17.8672H21.7808L22.2857 13.9062H18.2638V11.375C18.2638 10.2266 18.5772 9.44727 20.208 9.44727H22.2857V5.9082C21.9259 5.86133 20.6955 5.75 19.2562 5.75C16.2616 5.75 14.2071 7.5957 14.2071 10.9883V13.9121H10.6786V17.873H14.2129V28.25H2.78571C1.24777 28.25 0 26.9902 0 25.4375V4.8125C0 3.25977 1.24777 2 2.78571 2H23.2143C24.7522 2 26 3.25977 26 4.8125Z"
						/>
					</svg>
				</SocialLink>
			) : null }

			{ instagramUrl ? (
				<SocialLink
					href={instagramUrl}
					target="_blank"
					small
				>
					<span className="sr-only">View our Instagram page</span>
					<svg
						width="26"
						height="28"
						viewBox="0 0 26 28"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M13.0058 7.26172C9.31469 7.26172 6.33746 10.2676 6.33746 13.9941C6.33746 17.7207 9.31469 20.7266 13.0058 20.7266C16.6968 20.7266 19.6741 17.7207 19.6741 13.9941C19.6741 10.2676 16.6968 7.26172 13.0058 7.26172ZM13.0058 18.3711C10.6205 18.3711 8.67049 16.4082 8.67049 13.9941C8.67049 11.5801 10.6147 9.61719 13.0058 9.61719C15.3968 9.61719 17.341 11.5801 17.341 13.9941C17.341 16.4082 15.391 18.3711 13.0058 18.3711ZM21.5022 6.98633C21.5022 7.85937 20.8058 8.55664 19.9468 8.55664C19.0821 8.55664 18.3915 7.85352 18.3915 6.98633C18.3915 6.11914 19.0879 5.41602 19.9468 5.41602C20.8058 5.41602 21.5022 6.11914 21.5022 6.98633ZM25.9187 8.58008C25.82 6.47656 25.3442 4.61328 23.8178 3.07812C22.2973 1.54297 20.4517 1.0625 18.3683 0.957031C16.2209 0.833984 9.78478 0.833984 7.63746 0.957031C5.55978 1.05664 3.71424 1.53711 2.1879 3.07227C0.661565 4.60742 0.191476 6.4707 0.0870117 8.57422C-0.0348633 10.7422 -0.0348633 17.2402 0.0870117 19.4082C0.185672 21.5117 0.661565 23.375 2.1879 24.9102C3.71424 26.4453 5.55398 26.9258 7.63746 27.0312C9.78478 27.1543 16.2209 27.1543 18.3683 27.0312C20.4517 26.9316 22.2973 26.4512 23.8178 24.9102C25.3384 23.375 25.8142 21.5117 25.9187 19.4082C26.0406 17.2402 26.0406 10.748 25.9187 8.58008ZM23.1446 21.7344C22.6919 22.8828 21.8156 23.7676 20.6723 24.2305C18.9602 24.916 14.8977 24.7578 13.0058 24.7578C11.1138 24.7578 7.04549 24.9102 5.33924 24.2305C4.20174 23.7734 3.3254 22.8887 2.86692 21.7344C2.1879 20.0059 2.3446 15.9043 2.3446 13.9941C2.3446 12.084 2.19371 7.97656 2.86692 6.25391C3.3196 5.10547 4.19594 4.2207 5.33924 3.75781C7.0513 3.07227 11.1138 3.23047 13.0058 3.23047C14.8977 3.23047 18.966 3.07812 20.6723 3.75781C21.8098 4.21484 22.6861 5.09961 23.1446 6.25391C23.8236 7.98242 23.6669 12.084 23.6669 13.9941C23.6669 15.9043 23.8236 20.0117 23.1446 21.7344Z"
						/>
					</svg>
				</SocialLink>
			) : null }
		</Container>
	</HeaderStyles>
);

export default Header;
