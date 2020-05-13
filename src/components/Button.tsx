import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// TODO: TS
// interface ButtonProps {
// 	onClick: Function;
// }

const ButtonStyles = styled(motion.button)`
	position: relative;
	padding: 13px 28px 14px;
	overflow: hidden;
	background: ${({ theme }) => theme.color.brand['500']};
	color: #fff;
	text-transform: uppercase;

	>* {
		position: relative;
	}

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		transform: translateX(-100%);
		width: 100%;
		height: 100%;
		background: ${({ theme }) => theme.color.brand['400']};
		transition: .125s;
	}

	&:hover {
		&:before {
			transform: translateX(0);
		}
	}
`;

const Btn = ({ children, className, ...props }) => (
	<ButtonStyles
		className={className}
		{...props}
	>
		<span>
			{ children }
		</span>
	</ButtonStyles>
);

const Button = styled(Btn)``;

export default Button;