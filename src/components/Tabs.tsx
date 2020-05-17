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

const StyledOuter = styled.div`
	position: relative;

	+* {
		margin-top: 40px;
	}
`;

const Nav = styled.nav`
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
			margin-left: 25px;
		}
	}
`;

const Button = styled.button`
	color: ${({ theme }) => theme.color.text};
	font-family: ${({ theme }) => theme.font.display};
	text-transform: uppercase;
	font-size: 1.25rem;
	cursor: pointer;
`;

const SliderBg = styled(motion.div)`
	width: 47px;
	height: 4px;
	position: absolute;
	background: ${({ theme }) => theme.color.brand['500']};
`;

const Outer = motion.custom(StyledOuter);

const getPosition = ($container, $element) => {
	if(!$element) return;

	const {
		top: containerTop,
		left: containerLeft,
	} = $container.getBoundingClientRect();

	let {
		left,
		width,
	} = $element.getBoundingClientRect();

	return {
		left: left -= containerLeft,
		width,
	};
};

let resizeTimer;

const Tabs = React.forwardRef(({
	tabs, activeIndex, onChange, variants, animate,
}, ref: ITabsProps) => {
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
		<Outer
			ref={ref}
			variants={variants}
			animate={animate}
		>
			<Nav
				ref={$nav}
			>
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
						top: 27,
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
		</Outer>
	);
});

export default Tabs;
