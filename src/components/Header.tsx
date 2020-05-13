import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import HeadRoom from 'react-headroom';

import Button from './Button';
import Container from './Container';

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
		justify-content: space-between;
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

	@media (min-width: 600px) {
		.hamburger {
			display: none;
		}
	}

	@media (max-width: 599px) {
		background: none;
		padding: 24px 0;

		img {
			width: 82px;
		}

		nav {
			display: none;
		}
	}
`;

const menu = [
	{
		link: '#schedule',
		text: 'Schedule'
	},
	{
		link: '#classes',
		text: 'Classes'
	},
	{
		link: '#about',
		text: 'About RTJJ'
	},
	{
		link: '#sign-up',
		text: 'Sign up'
	},
	{
		link: '#contact',
		text: 'Contact'
	},
]

const Header: React.FC = ({ logo }: HeaderProps) => (
	<HeaderStyles>
		<Container size="lg">
			<img src={logo} alt="RTJJ logo" />

			<button className="hamburger">
				<span className="sr-only">Toggle menu</span>
				<svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="29" height="4" fill="#E5E2E5"/>
					<rect y="9" width="29" height="4" fill="#E5E2E5"/>
					<rect y="18" width="29" height="4" fill="#E5E2E5"/>
				</svg>
			</button>

			<nav>
				<ul>
					{ menu.map(({ text, link }) => (
						<li key={`link-${link}`}>
							<Button
								as={'a'}
								href={link}
							>{ text }</Button>
						</li>
					)) }
				</ul>
			</nav>
		</Container>
	</HeaderStyles>
);

export default Header;
