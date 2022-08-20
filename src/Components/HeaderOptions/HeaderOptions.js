import { Avatar } from '@mui/material';
import React from 'react';
import './HeaderOptions.css';

function HeaderOptions({ Icon, Title, avatar }) {
	return (
		<>
			<div className='headerOption'>
				{Icon && <Icon className='headerOption_icon' />}
				{avatar && (
					<Avatar
						className='headerOption_icon'
						src={avatar}
						alt='me'
					/>
				)}
				<h3 className='headerOption_title'>{Title}</h3>
			</div>
		</>
	);
}

export default HeaderOptions;
