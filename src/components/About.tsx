import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BlockContent from '@sanity/block-content-to-react';

import Container, { padding } from './Container';
import Title from './Title';

import useInView from '../hooks/useInView';

const AboutStyles = styled.div`
	position: relative;

	${Container} {
		padding-left: 450px;

		@media (max-width: 1515px) {
			padding-left: 500px;
		}
	}

	.text {
		column-count: 2;
		column-gap: 50px;
	}

	.img {
		position: absolute;
		width: 35vw;
		height: 100%;

		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	+* {
		margin-top: 75px;
	}

	@media (max-width: 1269px) {
		.img {
			width: 29vw;
		}

		${Container} {
			padding-left: 32vw;
		}
	}

	@media (max-width: 991px) {
		.img {
			position: relative;
			width: calc(100% - ${padding} - ${padding});
			height: 67vw;
			margin: 0 auto 35px;
		}

		${Container} {
			padding-left: ${padding};
		}
	}

	@media (max-width: 699px) {
		.text {
			column-count: 1;
		}
	}

	@media (max-width: 699px) {
		text-align: center;
	}
`;

const About = ({
	title,
	text,
	image,
}) => {
	const [ ref, visible ] = useInView();

	console.log(image);

	return (
		<AboutStyles>
			<div className="img">
				<img
					src={image}
					alt=""
				/>
			</div>

			<Container size="lg">
				<div className="content">
					<Title as="h2">{ title }</Title>
					<BlockContent
						blocks={text}
						className="text"
					/>
				</div>
			</Container>
		</AboutStyles>
	);
};

export default About;
