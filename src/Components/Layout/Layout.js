import React from 'react';
import './Layout.css';
import Sidebar from '../Sidebar/Sidebar';
import { Box, Container } from '@mui/system';
import Feeds from '../Feeds/Feeds';

function Layout() {
	return (
		<>
			<Box className='layout'>
				<Container>
					<Box display='flex' gap={2}>
						<Box flex='0.2'>
							<Sidebar />
						</Box>
						<Box flex='0.6'>
							<Feeds />
						</Box>
						<Box flex='0.2'>{/* Widgets */}</Box>
					</Box>
				</Container>
			</Box>
		</>
	);
}

export default Layout;
