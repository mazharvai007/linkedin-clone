import {
	Collapse,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';

function CommunityPanelItem({ Heading, ItemTitle }) {
	const [open, setOpen] = useState(true);

	const handleOpen = () => {
		setOpen(!open);
	};
	return (
		<>
			{Heading && (
				<ListItemButton onClick={handleOpen}>
					<ListItemText primary={Heading} />
					{open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
				</ListItemButton>
			)}
			<Collapse
				in={open}
				timeout='auto'
				unmountOnExit
				sx={{ width: '100%' }}>
				<List component='div' disablePadding>
					<ListItem component='div'>
						<ListItemButton
							component='a'
							href='#'
							sx={{
								padding: '4px 0',
							}}>
							<ListItemText primary={`# ${ItemTitle}`} />
						</ListItemButton>
					</ListItem>
				</List>
			</Collapse>
		</>
	);
}

export default CommunityPanelItem;
