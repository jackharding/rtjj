import React from 'react';
import styled from 'styled-components';

const ScheduleDayStyles = styled.div`

`;

const ScheduleDay = () => (
	<ScheduleDayStyles>
		<div className="day">Monday</div>

		<div className="classes">
			<div className="class">
				<p className="class-time">11:00</p>
				<p className="class-name">Brazilian Jiu Jitsu</p>
			</div>

			<div className="class">
				<p className="class-time">12:00</p>
				<p className="class-name">Live Training</p>
			</div>

			<div className="class">
				<p className="class-time">13:00</p>
				<p className="class-name">Strength &amp; Conditioning</p>
			</div>
		</div>
	</ScheduleDayStyles>
);

export default ScheduleDay;
