import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface TabNode {
	text: string;
}

interface ITabsProps {
	tabs: TabNode[];
	activeIndex: number;
	onChange: Function;
	children: any;
}

interface IMenuNodeDimensions {
	width: number;
	height: number;
	top: number;
	left: number;
}

const Nav = styled.nav`
	position: relative;

	+* {
		margin-top: 25px;
	}

	ul {
		position: relative;
		display: flex;
		justify-content: center;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	li {
		+li {
			margin-left: 5px;
		}
	}
`;

const Button = styled.button`
	padding: 10px 15px;
	border: 0;
	background: none;
	text-transform: uppercase;
	font-size: 14px;
	cursor: pointer;
`;

const SliderBg = styled(motion.div)`
	width: 47px;
	height: 4px;
	position: absolute;
	background: ${({ theme }) => theme.color.brand};
`;

const getPosition = ($container, $element) => {
	const {
		top: containerTop,
		left: containerLeft,
	} = $container.getBoundingClientRect();

	let {
		top,
		left,
		width,
	} = $element.getBoundingClientRect();

	return {
		top: containerTop + top + 5,
		left: left -= containerLeft,
		width,
	};
};

let resizeTimer;

const Tabs: React.FC = ({
	tabs, activeIndex, onChange,
}: ITabsProps) => {
	const [ sliderDimensions, setSliderDimensions ] = useState<IMenuNodeDimensions>({});

	const $nav = useRef<HTMLElement>(null!);

	const handleResize = () => {
		clearTimeout(resizeTimer);

		resizeTimer = setTimeout(() => {
			console.log($nav.current.querySelector(`li:nth-child(${activeIndex + 1})`));
			setSliderDimensions(getPosition($nav.current, $nav.current.querySelector('li[data-active=true]')));
		}, 250);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		if(!$nav.current) return;

		setSliderDimensions(getPosition($nav.current, $nav.current.querySelector('li[data-active=true]')));
	}, [ activeIndex ]);

	return (
		<>
			<Nav ref={$nav}>
				<SliderBg
					positionTransition={{
						type: 'tween',
						damping: 70,
						duration: 0.125,
					}}
					animate={{
						width: sliderDimensions.width,
						height: sliderDimensions.height,
					}}
					style={{
						left: sliderDimensions.left,
					}}
				/>

				<ul>
					{tabs.map(({ text }, i) => (
						<li
							data-active={i === activeIndex}
							key={`tab${i}`}
						>
							<Button
								active={i === activeIndex}
								onClick={() => {
									onChange(i);
								}}
							>
								{text}
							</Button>
						</li>
					))}
				</ul>
			</Nav>
		</>
	);
};

export default Tabs;
