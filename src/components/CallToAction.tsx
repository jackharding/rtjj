import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import useInView from '../hooks/useInView';

import Button from './Button';
import Container from './Container';
import T from './Title';

const CallToActionStyles = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	min-height: 433px;
	padding: 150px 0;
	margin-top: 15px;
	background-image: ${({ image }) => `url(${image})`};
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.7);
	}

	svg {
		position: absolute;
		width: 100%;
		height: auto;
		left: 0;

		&:nth-of-type(1),
		&:nth-of-type(3) {
			top: -2px;
		}

		&:nth-of-type(2),
		&:nth-of-type(4) {
			bottom: -2px;
			transform: scaleX(-1) scaleY(-1);
		}

		&:nth-of-type(n+3) {
			display: none;
		}
	}

	${Container} {
		position: relative;
		top: 14px;
	}

	p {
		max-width: 460px;
		color: ${({ theme }) => theme.color.textInverted};

		+*:not(p) {
			margin-top: 25px;
		}
	}

	@media (max-width: 849px) {
		padding: 90px 0;
		min-height: 407px;
		text-align: center;

		.content {
			margin-right: auto;
			margin-left: auto;
		}

		${Container} {
			top: initial;
		}

		svg {
			&:nth-of-type(1),
			&:nth-of-type(2) {
				display: none;
			}

			&:nth-of-type(3),
			&:nth-of-type(4) {
				display: block;
			}
		}
	}
`;

const Title = motion.custom(T);

const animation = {
	title: {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
		},
	},
	text: {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				delay: 0.25,
			},
		},
	},
	button: {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				delay: 0.5,
			},
		},
	},
};

const CallToAction = ({
	title, text, link, linkText, image,
}) => {
	const [ ref, visible ] = useInView();

	return (
		<CallToActionStyles
			image={image}
			ref={ref}
		>
			<svg
				width="1440"
				height="59"
				viewBox="0 0 1440 59"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="shape-lg"
			>
				<path
					d="M1440 0.5L0 59V0.5H1440Z"
					fill="white"
				/>
			</svg>

			<svg
				width="1440"
				height="59"
				viewBox="0 0 1440 59"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="shape-lg"
			>
				<path
					d="M1440 0.5L0 59V0.5H1440Z"
					fill="white"
				/>
			</svg>

			<svg
				width="375"
				height="28"
				viewBox="0 0 375 28"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="shape-sm"
			>
				<path
					d="M375 0L0 27.5V0H375Z"
					fill="white"
				/>
			</svg>

			<svg
				width="375"
				height="28"
				viewBox="0 0 375 28"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="shape-sm"
			>
				<path
					d="M375 0L0 27.5V0H375Z"
					fill="white"
				/>
			</svg>

			<Container size="sm">
				<Title
					white
					className="content"
					variants={animation.title}
					animate={visible ? 'show' : 'hidden'}
				>
					{ title }

				</Title>

				<motion.p
					className="content"
					variants={animation.title}
					animate={visible ? 'show' : 'hidden'}
				>
					{ text }

				</motion.p>

				<Button
					className="content"
					variants={animation.button}
					animate={visible ? 'show' : 'hidden'}
				>
					{ linkText }

				</Button>
			</Container>
		</CallToActionStyles>
	);
};

export default CallToAction;
