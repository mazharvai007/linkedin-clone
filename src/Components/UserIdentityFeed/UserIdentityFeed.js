import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';

function UserIdentityFeed({ Text1, Text2 }) {
	return (
		<>
			<ListItem disableGutters disablePadding>
				<ListItemButton
					component='a'
					disableGutters
					sx={{
						paddingTop: '0',
						paddingBottom: '0',
						paddingLeft: '15px',
						paddingRight: '15px',
						fontSize: '13px',
					}}>
					<ListItemText primary={Text1} />
					<ListItemText align='right' primary={Text2} />
				</ListItemButton>
			</ListItem>
		</>
	);
}

export default UserIdentityFeed;
