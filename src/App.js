import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import { selectUser } from './features/userSlice';

function App() {
	const user = useSelector(selectUser);
	return (
		<div className='App'>
			<Header />
			{!user ? (
				<Login />
			) : (
				<div className='App_Body'>
					<Layout />
				</div>
			)}
		</div>
	);
}

export default App;
