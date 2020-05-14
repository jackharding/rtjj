import React from 'react';
import styled from 'styled-components';

import ScheduleDay from './ScheduleDay';

const ScheduleStyles = styled.div`
	display: flex;
	justify-content: center;
	max-width: 100%;
	overflow-x: auto;
`;

const days = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
];

const Schedule = ({ schedule }) => (
	<ScheduleStyles>
		{ days.map((day) => {
			const classes = schedule[day.toLowerCase()];

			return (
				<ScheduleDay
					day={day}
					classes={classes}
				/>
			);
		}) }
	</ScheduleStyles>
);

export default Schedule;
