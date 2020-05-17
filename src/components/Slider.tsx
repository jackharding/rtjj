import React from 'react';
import SlickSlider from 'react-slick';

interface SliderProps {
	children: React.ReactNode;
}

const config = {
	arrows: false,
	dots: true,
	fade: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: false,
};

const Slider = React.forwardRef<React.FC, { children: any; initialSlide: number }>(({ children, initialSlide, settings }, ref) => (
	<SlickSlider
		ref={ref}
		{...config}
		{...settings}
		initialSlide={initialSlide}
	>
		{children}
	</SlickSlider>
));

Slider.defaultProps = {
	initialSlide: 0,
	settings: {},
};

export default Slider;
