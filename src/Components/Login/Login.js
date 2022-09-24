import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../../firebase';
import './Login.css';

function Login() {
	const [name, setName] = useState('');
	const [profilePic, setProfilePic] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const loginToApp = (e) => {
		e.preventDefault();
	};
	const register = (e) => {
		e.preventDefault();

		if (!email) {
			alert('Please enter a valid email');
		}

		createUserWithEmailAndPassword(auth, email, password)
			.then((userAuth) => {
				updateProfile(auth.currentUser, {
					displayName: name,
					photoURL: profilePic,
				}).then(
					dispatch(
						login({
							email: userAuth.user.email,
							uid: userAuth.user.uid,
							displayName: name,
							photoURL: profilePic,
						})
					)
				);
			})
			.catch((err) => {
				alert(err.code + ' ' + err.message);
			});
	};
	const forgotPassword = () => {
		alert('Forgot Password');
	};
	return (
		<>
			<div className='login'>
				<div className='loginWrapper'>
					<div className='loginFormHeader'>
						<h1 className='loginFormHeaderTitle'>Sign in</h1>
						<p className='loginFormHeaderSubTitle'>
							Stay updated on your professional world
						</p>
					</div>
					<form action='' className='loginForm'>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<input
							type='password'
							name='userPassword'
							id='userPassword'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<div
							className='forgotPassword'
							onClick={forgotPassword}>
							Forgot Password?
						</div>
						<button type='submit' onClick={loginToApp}>
							Sign In
						</button>
					</form>
				</div>
				<p className='joinNow'>
					New to LinkedIn?
					<span className='loginRegister' onClick={register}>
						Join Now
					</span>
				</p>
			</div>
		</>
	);
}

export default Login;
