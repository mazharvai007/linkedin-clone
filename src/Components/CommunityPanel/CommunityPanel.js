import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from '@mui/material';
import React, { useState } from 'react';
import './CommunityPanel.css';
// import CommunityPanelItem from './CommunityPanelItem';

const data = [
	{ id: 1, title: 'Web Site Development' },
	{ id: 2, title: 'Health Insurance' },
	{ id: 3, title: 'Productivity' },
	{ id: 4, title: 'Mental Health' },
	{ id: 5, title: 'Personal Finance' },
];

function CommunityPanel() {
	const [open, setOpen] = useState(true);
	return (
		<>
			<Box>
				<ListItemButton>
					<ListItemText
						primary='Recent'
						secondary='Web Site Development, Health Insurance, Productivity, Mental Health, Personal Finance'></ListItemText>
				</ListItemButton>
			</Box>
		</>
	);
}

export default CommunityPanel;
