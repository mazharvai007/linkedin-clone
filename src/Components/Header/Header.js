import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import styled from '@emotion/styled';
import HeaderOptions from '../HeaderOptions/HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Search = styled.div({
	position: 'relative',
});
const SearchIconWrapper = styled.div({
	position: 'absolute',
	zIndex: '1',
	top: '0',
	left: '0',
	borderRadius: '0 2px 2px 0',
	width: '40px',
	height: '34px',
	margin: '0',
	boxShadow: 'none',
	pointerEvents: 'none',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	transition: 'background-color .15s',
});
const SearchInputField = styled.input({
	width: '100%',
	backgroundColor: ' #eef3f8',
	color: 'rgba(0, 0, 0, 0.9)',
	border: 'none',
	boxShadow: 'none',
	padding: '0 0.8rem 0 35px',
	lineHeight: '1.75',
	height: '34px',
	fontSize: '14px',
	borderRadius: '5px',
});
function Header() {
	return (
		<>
			<AppBar className='header'>
				<Container maxWidth='lg'>
					<Toolbar
						disableGutters
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							minHeight: '48px !important',
						}}>
						<Box className='header_left'>
							<Typography
								variant='a'
								component='a'
								href='/'
								className='header_logo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									data-supported-dps='24x24'
									fill='currentColor'
									className='linkedin_logo'
									width='24'
									height='24'
									focusable='false'>
									<path d='M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z'></path>
								</svg>
							</Typography>
							<Search className='header_search'>
								<SearchIconWrapper>
									<SearchIcon
										sx={{
											width: '1.2rem',
											height: '1.2rem',
										}}
									/>
								</SearchIconWrapper>

								<SearchInputField
									type='text'
									name='search'
									id='search'
									placeholder='Search'
								/>
							</Search>
						</Box>
						<Box className='header_right'>
							<HeaderOptions Icon={HomeIcon} Title='Home' />
							<HeaderOptions
								Icon={SupervisorAccountIcon}
								Title='My Network'
							/>
							<HeaderOptions
								Icon={BusinessCenterIcon}
								Title='Jobs'
							/>
							<HeaderOptions Icon={ChatIcon} Title='Messaging' />
							<HeaderOptions
								Icon={NotificationsIcon}
								Title='Notifications'
							/>
							<HeaderOptions
								avatar='https://media-exp1.licdn.com/dms/image/C4E03AQGob0v3H2IlLg/profile-displayphoto-shrink_100_100/0/1516821177544?e=1666224000&v=beta&t=8oEohoUJrjoFulFuYGXd6c1j33BUbUWDZiXuBU1ugpA'
								Title='Me'
							/>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
}

export default Header;
