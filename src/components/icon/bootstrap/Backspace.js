import * as React from 'react';

function SvgBackspace(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M5.83 5.146a.5.5 0 000 .708L7.975 8l-2.147 2.146a.5.5 0 00.707.708l2.147-2.147 2.146 2.147a.5.5 0 00.707-.708L9.39 8l2.146-2.146a.5.5 0 00-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 00-.707 0z' />
			<path d='M13.683 1a2 2 0 012 2v10a2 2 0 01-2 2h-7.08a2 2 0 01-1.519-.698L.241 8.65a1 1 0 010-1.302L5.084 1.7A2 2 0 016.603 1h7.08zm-7.08 1a1 1 0 00-.76.35L1 8l4.844 5.65a1 1 0 00.759.35h7.08a1 1 0 001-1V3a1 1 0 00-1-1h-7.08z' />
		</svg>
	);
}

export default SvgBackspace;