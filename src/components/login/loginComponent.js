import React, { useState } from 'react';
import './loginComponent.css';
import { Link } from 'react-router-dom';
import * as userService from '../../services/users/userService';
import { connect } from 'react-redux';

const Login = (props) => {

	const [email, changeEmail] = useState('');
	const [password, changePassword] = useState('')
	const [token, setToken] = useState(null);
	
	// const updateToken = (t) => {
	// 	console.log(t)
	// 	setToken(t)
	// 	console.log(token)
	// }


	const login = (e) => {
		// console.log(props);
		console.log(email, password, token)
		userService.default.login({email: email, password: window.btoa(password)})
		.then(res => {
			console.log(res);
			setToken(res.data.token)
			// updateToken(res.data.token);
			props.onLogin(res.data.token, res.data.user);
			setTimeout(() => console.log(token), 500)
		})
		e.preventDefault();
	}

	
	console.log(token)
  return (
	
	<div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form">
					<span className="login100-form-title p-b-34">
						Account Login
					</span>
					
					<div className="wrap-input100 rs1-wrap-input100 validate-input m-b-20" data-validate="Type user name">
						<input id="first-name" className="input100" type="text" name="username" placeholder="Email" value={email} onChange={($event) => changeEmail($event.target.value)}/>
						<span className="focus-input100"></span>
					</div>
					<div className="wrap-input100 rs2-wrap-input100 validate-input m-b-20" data-validate="Type password">
						<input className="input100" type="password" name="pass" placeholder="Password" value={password} onChange={($event) => changePassword($event.target.value)}/>
						<span className="focus-input100"></span>
					</div>
					
					<div className="container-login100-form-btn">
						<button className="login100-form-btn" onClick={($event) => login($event)}>
							Sign in
						</button>
					</div>

					{/* <div className="w-full text-center p-t-27 p-b-239">
						<span className="txt1">
							Forgot
						</span>

						<a href="#" className="txt2">
							User name / password?
						</a>
					</div> */}

					<div className="w-full text-center">
						<Link to='/signup' className="txt3">
							Sign Up
            </Link>
						
					</div>
				</form>

				<div className="login100-more bg-img"></div>
			</div>
		</div>
	</div>
	
  )
}

const mapDispatchToProps = (dispatch) => {
	return {
		onLogin: (token, user) => dispatch({type: 'LOGIN', token: token, user: user})
	}
}

export default connect(null, mapDispatchToProps)(Login);