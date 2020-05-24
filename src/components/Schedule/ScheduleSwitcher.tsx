import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';

import useInView from '../../hooks/useInView';
import useLocalStorage from '../../hooks/useLocalStorage';

import FadeIn from '../FadeIn';
import Tabs from '../Tabs';
import T from '../Title';
import Schedule from './Schedule';

const Title = motion.custom(T);

const ScheduleStyles = styled.div`
	position: relative;
	margin-top: 35px;
	padding: 0 0 190px;

	svg {
		position: absolute;
		top: 16px;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	${T} {
		text-align: center;
	}

	+* {
		margin-top: -100px;
	}

	@media (max-width: 599px) {
		svg {
			top: 13px;
		}
	}
`;

const animation = {
	title: {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
		},
	},
	tabs: {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
		},
	},
};

const ScheduleSwitcher = () => {
	const { adults, kids } = useStaticQuery(graphql`
		fragment classFields on SanityClassTime {
			time
			class {
				name
				description
			}
		}
		
		fragment scheduleFields on SanitySchedule {
			monday {
				...classFields
			}
			tuesday {
				...classFields
			}
			wednesday {
				...classFields
			}
			thursday {
				...classFields
			}
			friday {
				...classFields
			}
			saturday {
				...classFields
			}
			sunday {
				...classFields
			}
		}
		
		query schedules {
			kids: sanityScheduleKids(id: {eq: "aa479184-7b31-5dc1-9c2b-1f61bdcad85f"}) {
				schedule {
					...scheduleFields
				}
			}
			adults: sanityScheduleAdults(id: {eq: "26274659-3ff1-5d0e-bfc3-164df0cd4050"}) {
				schedule {
					...scheduleFields
				}
			}
		}	  
	`);

	const [ ref, visible ] = useInView();

	const [ index, setIndex ] = useLocalStorage(0, 'rtjj-schedule');

	const schedule = index ? kids : adults;

	return (
		<ScheduleStyles
			ref={ref}
			initial="hidden"
			animate={visible ? 'show' : 'hidden'}
		>
			<Title
				variants={animation.title}
				animate={visible ? 'show' : 'hidden'}
			>
				Schedule
			</Title>

			<Tabs
				activeIndex={index}
				onChange={(i) => setIndex(i)}
				variants={animation.tabs}
				animate={visible ? 'show' : 'hidden'}
				tabs={[
					{
						text: 'Adults',
					},
					{
						text: 'Kids',
					},
				]}
			/>

			<Schedule
				schedule={schedule.schedule}
				type={index ? 'kids' : 'adults'}
			/>

			<svg
				width="1440"
				height="641"
				viewBox="0 0 1440 641"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
			>
				<path
					d="M1443 488.092L0 641V0H1443V488.092Z"
					fill="#A164B7"
					fillOpacity="0.15"
				/>
			</svg>

		</ScheduleStyles>
	);
};

export default ScheduleSwitcher;
