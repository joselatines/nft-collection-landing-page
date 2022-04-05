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

	return width < size;
};
