import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Button from './Button';
import Container from './Container';
import Title from './Title';

const CallToActionStyles = styled.div``;

const CallToAction = ({
	title, text, link, linkText, image,
}) => (
	<CallToActionStyles image={image}>
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

		<Container size="sm">
			<Title white>{ title }</Title>
			<motion.p>{ text }</motion.p>
			<Button>{ linkText }</Button>
		</Container>
	</CallToActionStyles>
);

export default CallToAction;
