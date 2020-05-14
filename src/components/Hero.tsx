import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Button from './Button';
import Ctainer from './Container';

interface HeroProps {
	titleParts: Array;
	image: string;
	link?: string;
	linkText?: string;
}

const Heading = styled(motion.h1)``;

const Container = motion.custom(Ctainer);

const HeroStyles = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	height: 592px;
	padding-top: 72px;
	background-image: ${({ image }) => `url(${image})`};
	background-size: cover;
	background-position: center;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
	}

	>* {
		position: relative;
	}

	svg {
		position: absolute;
		bottom: -1px;
		left: 0;
		width: 100%;
		height: auto;
	}

	${Button} {
		margin-top: 25px;
	}

	${Heading} {
		max-width: 600px;
		color: #fff;

		span {
			display: block;
			line-height: 1;
			font-size: 3.125rem;

			&:last-of-type {
				font-size: 7.75rem;
				line-height: 0.825;
			}
		}
	}

	@media (min-width: 600px) {
		.shape-sm {
			display: none;
		}
	}

	@media (max-width: 599px) {
		height: 100vh;
		min-height: 610px;
		padding-top: 20vh;
		align-items: flex-start;
		text-align: center;

		.shape-lg {
			display: none;
		}

		@media (max-height: 470px) {
			padding-top: 120px;
		}
	}

	@media (max-width: 479px) {
		${Heading} {
			span {
				font-size: 2.125rem;

				&:last-of-type {
					font-size: 5.375rem;
				}
			}
		}
	}
`;

const animation = {
	heading: {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				type: 'tween',
				delay: 0.25,
				staggerChildren: 0.5,
				ease: 'linear',
			},
		},
	},
	headingWord: {
		hidden: {
			opacity: 0,
			x: -10,
		},
		show: {
			opacity: 1,
			x: 0,
		},
	},
	button: {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delay: 1,
			},
		},
	},
};

const Hero = ({
	titleParts, image, link, linkText,
}: HeroProps) => (
	<HeroStyles image={image}>
		<Container
			initial="hidden"
			animate="show"
			size="md"
		>
			{ titleParts ? (
				<Heading
					variants={animation.heading}
				>
					{ titleParts.map((t) => (
						<motion.span variants={animation.headingWord}>{ t }</motion.span>
					)) }
				</Heading>
			) : null }

			{ link ? (
				<Button variants={animation.button}>{ linkText || 'Sign up' }</Button>
			) : null }
		</Container>

		<svg
			width="1442"
			height="74"
			viewBox="0 0 1442 74"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="shape-lg"
		>
			<path
				d="M1441.5 1V73.5H1L1441.5 1Z"
				fill="#fff"
			/>
		</svg>

		<svg
			width="375"
			height="37"
			viewBox="0 0 375 37"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="shape-sm"
		>
			<path
				d="M375 0V37H0L375 0Z"
				fill="white"
			/>
		</svg>

		{/* TODO: Go down button? */}
		{/* <svg width="33" height="15" viewBox="0 0 33 15" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M31.5306 0.333008L16.5 11.606L1.46936 0.333008L0 2.29216L16.5 14.6671L33 2.29216L31.5306 0.333008Z" fill="#E5E2E5"/>
			</svg> */}
	</HeroStyles>
);

export default Hero;
