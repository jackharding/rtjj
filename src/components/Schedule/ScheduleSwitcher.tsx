import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import useLocalStorage from '../../hooks/useLocalStorage';

import Tabs from '../Tabs';
import Title from '../Title';
import Schedule from './Schedule';

const ScheduleStyles = styled.div`
	position: relative;
	margin-top: 35px;
	padding: 0 0 70px;

	svg {
		position: absolute;
		top: 16px;
		left: 0;
		width: 100%;
		height: auto;
		z-index: -1;
	}

	${Title} {
		text-align: center;
	}
`;

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

	const [ index, setIndex ] = useLocalStorage(0, 'rtjj-schedule');

	const schedule = index ? kids : adults;

	return (
		<ScheduleStyles>
			<Title>Schedule</Title>

			<Tabs
				activeIndex={index}
				onChange={(i) => setIndex(i)}
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
			/>

			<svg
				width="1440"
				height="520"
				viewBox="0 0 1440 520"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1443 395.956L0 520V0H1443V395.956Z"
					fill="#A164B7"
					fillOpacity="0.15"
				/>
			</svg>
		</ScheduleStyles>
	);
};

export default ScheduleSwitcher;
