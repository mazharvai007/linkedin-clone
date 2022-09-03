import {
	Avatar,
	Card,
	CardContent,
	CardMedia,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Sidebar.css';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CommunityPanel from '../CommunityPanel/CommunityPanel';
import UserIdentityFeed from '../UserIdentityFeed/UserIdentityFeed';

function Sidebar() {
	return (
		<>
			<Box className='sidebar'>
				<Card
					className='userIdentityPanel'
					sx={{
						borderRadius: '.8rem',
						border: '1px rgba(0, 0, 0, 0.08) solid',
						boxShadow: 'none',
					}}>
					<CardMedia
						component='img'
						image='https://static-exp1.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq'
					/>
					<CardContent
						className='userIdentityWidget'
						sx={{ padding: '1.2rem 1.2rem 1.6rem' }}>
						<Avatar
							sx={{
								width: '68px',
								height: '68px',
								backgroundColor: '#fff',
								border: '2px solid #fff',
								borderRadius: '50%',
								margin: '-38px auto 0',
							}}
							src='https://media-exp1.licdn.com/dms/image/C4E03AQGob0v3H2IlLg/profile-displayphoto-shrink_100_100/0/1516821177544?e=1666224000&v=beta&t=8oEohoUJrjoFulFuYGXd6c1j33BUbUWDZiXuBU1ugpA'
							alt='Photo of Mazharul Islam'
						/>
						<CardContent
							sx={{
								textAlign: 'center',
								padding: '0',
								'&:last-child': {
									paddingBottom: '0',
								},
							}}>
							<Typography component='h3' variant='h3'>
								Mazharul Islam
							</Typography>
							<Typography
								component='p'
								variant='body1'
								sx={{ marginTop: '5px', fontWeight: '300' }}>
								Play with JavaScript (React, Nextjs, Material
								UI, Nodejs, Tailwind CSS)
							</Typography>
						</CardContent>
					</CardContent>

					<CardContent
						className='userIdentityFeed'
						sx={{
							padding: '0',
							borderTop: '1px solid rgba(0,0,0,0.08)',
							borderBottom: '1px solid rgba(0,0,0,0.08)',
						}}>
						<List>
							<UserIdentityFeed
								Text1="Who's viewed your profile"
								Text2='10'
							/>
							<UserIdentityFeed
								Text1='Impressions of your post'
								Text2='55'
							/>
						</List>
					</CardContent>
					<CardContent sx={{ padding: '0 !important' }}>
						<List>
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
									<ListItemText
										primary='Access exclusive tools & insights'
										secondary='Try Premium for free'
									/>
								</ListItemButton>
							</ListItem>
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
									<ListItemIcon sx={{ minWidth: '20px' }}>
										<BookmarkIcon />
									</ListItemIcon>
									<ListItemText primary='My items' />
								</ListItemButton>
							</ListItem>
						</List>
					</CardContent>
				</Card>
				<Card
					className='communityPanel'
					sx={{
						padding: '0.8rem 0 0',
						borderRadius: '.8rem',
						border: '1px rgba(0, 0, 0, 0.08) solid',
						boxShadow: 'none',
					}}>
					<CardContent sx={{ padding: '0 !important' }}>
						<CommunityPanel />
						<Typography
							className='discoverMore'
							component='a'
							variant='a'
							href='#'>
							Discover More
						</Typography>
					</CardContent>
				</Card>
			</Box>
		</>
	);
}

export default Sidebar;
