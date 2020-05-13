import React, { useState } from 'react';
import styled from 'styled-components';

import Tabs from '../Tabs';
import Title from '../Title';
import Schedule from './Schedule';

const ScheduleStyles = styled.div`
	padding: 70px 0;
`;
// const ScheduleStyles = styled.div`
// 	max-width: 100vw;
// 	overflow-x: auto;
// `;

const Day = styled.div`

`;

const ScheduleSwitcher = () => {
	const [ index, setIndex ] = useState(0);

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
				schedule={null}
			/>
		</ScheduleStyles>
	);
};

export default ScheduleSwitcher;
