import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
	threshold: number;
	as: string;
	id: string;
	className: string;
	delay: number;
	children: any;
}

const FadeIn: React.FC = ({
	threshold,
	as,
	className,
	id,
	delay,
	children,
}: FadeInProps) => {
	const [ appeared, setAppeared ] = useState(false);
	const [ ref, visible ] = useInView({
		threshold,
	});

	const Element = typeof as === 'string' ? motion[as] : motion.custom(as);

	useEffect(() => {
		if(visible && !appeared) {
			setAppeared(true);
		}
	}, [ visible ]);

	return (
		<Element
			animate={{
				opacity: appeared ? 1 : 0,
			}}
			initial={{
				opacity: 0,
			}}
			ref={ref}
			className={className}
			id={id}
			transition={{
				delay,
				duration: 1,
			}}
		>
			{children}
		</Element>
	);
};

FadeIn.defaultProps = {
	as: 'div',
	threshold: 0.25,
	delay: 0,
};

export default FadeIn;
