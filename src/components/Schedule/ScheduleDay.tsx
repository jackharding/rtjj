import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const ScheduleDayStyles = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 185px;
	flex-shrink: 0;

	+* {
		margin-left: 11px;
	}

	.day,
	.classes {
		padding: 23px 15px;
		background: #FFFFFF;
		box-shadow: ${({ theme }) => theme.shadow.card};
	}

	.day {
		margin: 0;
		color: ${({ theme }) => theme.color.brand[900]};
		text-align: center;
		font-size: 1.625rem;
	}

	.classes {
		flex: 1;
		margin-top: 10px;
	}

	.class {
		display: flex;

		&-time {
			width: 34px;
			margin-right: 8px;
			font-family: ${({ theme }) => theme.font.display};
			font-size: 1rem;
			color: ${({ theme }) => theme.color.brand[500]};
		}

		&-name {
			position: relative;
			top: 2px;
			font-size: 0.9375rem;
		}

		+* {
			margin-top: 10px;
		}
	}
`;

const ScheduleDay = React.forwardRef(({ day, classes, className }, ref) => (
	<ScheduleDayStyles
		className={className}
		ref={ref}
	>
		<h5 className="day">{ day }</h5>

		<div className="classes">
			{ classes.map(({ time, class: lesson }) => (
				<div
					className="class"
					key={`${day}-${time}-${lesson ? lesson.name : ''}`}
				>
					<p className="class-time">{ moment(time).format('HH:mm') }</p>
					<p className="class-name">{ lesson && lesson.name }</p>
				</div>
			)) }
		</div>
	</ScheduleDayStyles>
));

ScheduleDay.defaultProps = {
	classes: [],
};

export default ScheduleDay;
