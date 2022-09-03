import { Avatar, Typography } from '@mui/material';
import React from 'react';
import FeedInputOptions from '../FeedInputOptions/FeedInputOptions';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import './Feeds.css';
import Post from '../Post/Post';

function Feeds() {
	return (
		<>
			<div className='feeds'>
				<div className='feedInputContainer'>
					<div className='feedInputArea'>
						<div className='feedAvatar'>
							<Typography component='a' variant='a' href='#'>
								<Avatar
									sx={{ width: '50px', height: '50px' }}
									alt='Photo of Mazharul Islam'
									src='https://media-exp1.licdn.com/dms/image/C4E03AQGob0v3H2IlLg/profile-displayphoto-shrink_100_100/0/1516821177544?e=1667433600&v=beta&t=bJjQM-gRrjRhpF9180OTklxqIFv3AWTwuGHM5Dj5K2o'
								/>
							</Typography>
						</div>
						<div className='feedInput'>
							<form>
								<input
									type='text'
									name='feed'
									id='feed'
									aria-label='feed'
									placeholder='Start a post'
								/>
								<input
									type='submit'
									value='Send'
									aria-label='send'
								/>
							</form>
						</div>
					</div>
					<div className='feedInputOptions'>
						<FeedInputOptions
							Icon={ImageIcon}
							title='Photo'
							color='#378fe9'
						/>
						<FeedInputOptions
							Icon={YouTubeIcon}
							title='Video'
							color='#5f9b41'
						/>
						<FeedInputOptions
							Icon={EventIcon}
							title='Event'
							color='#c37d16'
						/>
						<FeedInputOptions
							Icon={FormatIndentIncreaseIcon}
							title='Write article'
							color='#e16745'
						/>
					</div>
				</div>
				<div className='feedPostsArea'>
					<Post
						authorName='Mazharul Islam'
						authorDescription='Play with JavaScript (React, Nextjs, Material UI, Nodejs, Tailwind CSS)'
						postMessage='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
						photoURL='https://media-exp1.licdn.com/dms/image/C4E03AQGob0v3H2IlLg/profile-displayphoto-shrink_100_100/0/1516821177544?e=1667433600&v=beta&t=bJjQM-gRrjRhpF9180OTklxqIFv3AWTwuGHM5Dj5K2o'
					/>
				</div>
			</div>
		</>
	);
}

export default Feeds;
