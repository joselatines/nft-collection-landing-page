import { useEffect } from 'react';
import { useState } from 'react';

export const useWindowWidth = size => {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);

		window.addEventListener('resize', handleResize);

		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, [setWidth]);

	console.log('width:', width, ' mi valor:', size);

	return width < size;
};

/* 
export const useWindowWidth = size => {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}

		window.addEventListener('resize', handleResize);



		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [setWidth]);

	console.log('width:',width, ' mi valor:', size);

	return width < size;
}; */
