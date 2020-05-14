import React, { useEffect, useState } from 'react';

const getFromLocalStorage = async (key) => {
	if(typeof window === 'undefined') return null;

	const result = await window.localStorage.getItem(key);

	return result ? JSON.parse(result) : null;
};

const saveToLocalStorage = async (key, value) => {
	await window.localStorage.setItem(key, JSON.stringify(value));
};

const useLocalStorage = (initialValue, key) => {
	const [ value, _setValue ] = useState(initialValue);

	const updateStateFromLocal = async () => {
		const val = await getFromLocalStorage(key);

		if(val) {
			_setValue(val);
		}
	};

	const setValue = async (val) => {
		_setValue(val);
		await saveToLocalStorage(key, val);
	};

	useEffect(() => {
		if(typeof window === 'undefined') return;

		console.log('etting from local');
		updateStateFromLocal();
	}, [ window ]);

	return [
		value,
		setValue,
	];
};

export default useLocalStorage;
