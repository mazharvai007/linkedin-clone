import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';

function App() {
	return (
		<div className='App'>
			<Header />

			{/* App Body */}
			<div className='App_Body'>
				<Layout />
			</div>
		</div>
	);
}

export default App;
