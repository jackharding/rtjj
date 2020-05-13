import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Container from "./Container";
import T from "./Title";

const Title = motion.custom(T);

const IntroStyles = styled(motion.div)`
	padding: 70px 0;
	text-align: center;
`;

const animation = {
	container: {
		show: {
			transition: {
				delayChildren: 1
			}
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
		}
	},
}

const Intro = () => {
	return (
		<IntroStyles
			initial="hidden" 
			animate="show"
			variants={animation.container}
		>
			<Container size="sm">
				<Title 
					as="h2"
					variants={animation.title}
				>Rob Taylor Jiu Jitsu Academy</Title>
				<motion.p variants={animation.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis optio minima quaerat quos, ratione eaque magnam corporis alias voluptatum eius est voluptate sint nobis autem deserunt, eum libero officia tenetur?</motion.p>
			</Container>
		</IntroStyles>
	);
}

export default Intro
