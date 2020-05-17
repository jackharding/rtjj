import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BlockContent from '@sanity/block-content-to-react';

import Container from './Container';
import Title from './Title';

import useInView from '../hooks/useInView';

const AboutStyles = styled.div`
	+* {
		margin-top: 75px;
	}
`;

const About = ({
	title,
	text,
	image,
}) => {
	const [ ref, visible ] = useInView();

	return (
		<AboutStyles>
			<Container size="lg">
				<Title as="h2">{ title }</Title>
				<BlockContent blocks={text} />
			</Container>
		</AboutStyles>
	);
};

export default About;
