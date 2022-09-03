import { Avatar } from '@mui/material';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import './Post.css';
import FeedInputOptions from '../FeedInputOptions/FeedInputOptions';

function Post({
	authorName,
	authorDescription,
	postMessage,
	photoURL,
	postImage,
}) {
	return (
		<>
			<div className='post'>
				<div className='postHeader'>
					<div className='postAvatar'>
						<Avatar alt={authorName} src={photoURL} />
					</div>
					<div className='postInfo'>
						<h2>{authorName}</h2>
						<p>{authorDescription}</p>
					</div>
					<div className='postActionButton'>
						<IconButton>
							<MoreHorizIcon />
						</IconButton>
					</div>
				</div>
				<div className='postBody'>
					{postMessage && <p>{postMessage}</p>}
					{postImage && <img src={postImage} alt={authorName} />}
				</div>
				<div className='postButtons'>
					<FeedInputOptions
						Icon={ThumbUpOffAltIcon}
						title='Like'
						color='rgba(0,0,0,0.6)'
					/>
					<FeedInputOptions
						Icon={CommentIcon}
						title='Comment'
						color='rgba(0,0,0,0.6)'
					/>
					<FeedInputOptions
						Icon={ShareIcon}
						title='Share'
						color='rgba(0,0,0,0.6)'
					/>
					<FeedInputOptions
						Icon={SendIcon}
						title='Send'
						color='rgba(0,0,0,0.6)'
					/>
				</div>
			</div>
		</>
	);
}

export default Post;
