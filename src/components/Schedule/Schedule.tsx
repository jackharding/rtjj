import React from 'react';
import styled from 'styled-components';

import ScheduleDay from './ScheduleDay';

const ScheduleStyles = styled.div`
	max-width: 100%;
	overflow-x: auto;
`;

const Schedule = ({ schedule }) => (
	<ScheduleStyles>
		<ScheduleDay />
	</ScheduleStyles>
);

export default Schedule;
