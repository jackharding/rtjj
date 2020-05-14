import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BlockContent from '@sanity/block-content-to-react';

import Container from './Container';
import T from './Title';

const Title = motion.custom(T);

const IntroStyles = styled(motion.div)`
	padding: 70px 0;
	text-align: center;
`;

const animation = {
	container: {
		show: {
			transition: {
				delayChildren: 1,
			},
		},
	},
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
		},
	},
};

const Intro = ({ title, text }) => (
	<IntroStyles
		initial="hidden"
		animate="show"
		variants={animation.container}
	>
		<Container size="sm">
			<Title
				as="h2"
				variants={animation.title}
			>
				{ title }
			</Title>

			<motion.div>
				<BlockContent blocks={text} />
			</motion.div>
		</Container>
	</IntroStyles>
);

export default Intro;
