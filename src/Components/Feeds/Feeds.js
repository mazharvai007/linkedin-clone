import { Avatar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FeedInputOptions from '../FeedInputOptions/FeedInputOptions';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import './Feeds.css';
import Post from '../Post/Post';
import { collection, getDocs, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase';

function Feeds() {
	const [input, setInput] = useState('');
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function fetchData() {
			/**
			 * Fetch data from firestore
			 * both functions are working same pattern
			 */

			const postRef = collection(db, 'posts');
			const postSnap = await getDocs(postRef);
			const newPosts = postSnap.docs.map((doc) => {
				return {
					id: doc.id,
					...doc.data(),
				};
			});

			setPosts(newPosts);

			// const querySnapshot = await getDocs(collection(db, 'posts'));
			// setPosts(
			// 	querySnapshot.docs.map((doc) => {
			// 		return {
			// 			id: doc.id,
			// 			...doc.data(),
			// 		};
			// 	})
			// );
		}
		fetchData();
	}, []);

	posts.map((post) => console.log(post));

	const sendPost = async (e) => {
		e.preventDefault();

		try {
			await addDoc(collection(db, 'posts'), {
				name: 'Karim',
				description: 'My name is Karim',
				message: input,
				photoURL: '',
				timestamp: Timestamp.now(),
			});
		} catch (err) {
			console.error(`Error adding document: ${err}`);
		}
	};
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
									value={input}
									onChange={(e) => setInput(e.target.value)}
								/>
								<input
									onClick={sendPost}
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
					{posts.map((post) => {
						return (
							<Post
								key={post.id}
								authorName={post.name}
								authorDescription={post.description}
								postMessage={post.message}
								photoURL={post.photoURL}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Feeds;
