import { Button } from '@mui/material';
import React from 'react';
import './FeedInputOptions.css';

function FeedInputOptions({ Icon, title, color }) {
	return (
		<>
			<Button className='feedInputOption'>
				<Icon style={{ color: color }} />
				<h4>{title}</h4>
			</Button>
		</>
	);
}

export default FeedInputOptions;
