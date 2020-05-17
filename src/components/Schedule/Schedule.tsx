import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import useInView from '../../hooks/useInView';

import ScheduleDay from './ScheduleDay';

const ScheduleStyles = styled.div`
	max-width: 100%;
	overflow-x: auto;
	scrollbar-width: thin;
	scrollbar-color: #aaa #cfcfcf;

	&:-webkit-scrollbar {
		width: 13px;
	}

	&:-webkit-scrollbar-track {
		background: #cfcfcf;
	}

	&:-webkit-scrollbar-thumb {
		background-color: #cfcfcf;
		border-radius: 12px;
		border: 3px solid #aaa;
	}
`;

const ScheduleStylesInner = styled.div`
	display: flex;
	justify-content: center;
	padding-bottom: 20px;

	@media (max-width: 1389px) {
		justify-content: flex-start;

		>* {
			&:first-of-type {
				margin-left: 25px;
			}
			&:last-of-type {
				margin-right: 25px;
			}
		}
	}
`;

const Inner = motion.custom(ScheduleStylesInner);

const D = styled(ScheduleDay)``;
const Day = motion.custom(D);


const days = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
];

const animation = {
	container: {
		show: {
			transition: {
				type: 'tween',
				// delay: 0.25,
				staggerChildren: 0.05,
				ease: 'linear',
			},
		},
	},
	day: {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
		},
	},
};

const Schedule = ({ schedule, type }) => {
	const [ ref, visible ] = useInView();

	return (
		<ScheduleStyles ref={ref}>
			<Inner
				initial="hidden"
				animate={visible ? 'show' : 'hidden'}
				variants={animation.container}
			>
				{ days.map((day) => {
					const classes = schedule[day.toLowerCase()];

					return (
						<Day
							day={day}
							key={`${type}-${day}`}
							classes={classes}
							variants={animation.day}
						/>
					);
				}) }
			</Inner>
		</ScheduleStyles>
	);
};

export default Schedule;
