import React, { useEffect, useState } from 'react';
import { useInView as inView } from 'react-intersection-observer';

const useInView = () => {
	const [ visible, setVisible ] = useState(false);

	const [ ref, _visible ] = inView({
		threshold: 0.5,
	});

	useEffect(() => {
		if(_visible && !visible) {
			setVisible(true);
		}
	}, [ _visible ]);

	return [
		ref,
		visible,
	];
};

useInView.defaultProps = {
	threshold: 0.35,
};

export default useInView;
