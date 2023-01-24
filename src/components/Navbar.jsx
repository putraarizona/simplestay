import React from 'react';

import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
	return (
		<div className='Navbar'>
			<div className='navbar-content'>
				<h2>SimpleStay</h2>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/deals' className='link'>
							Deals
						</Link>
					</li>
					<li>
						<Link to='/trips' className='link'>
							Trips
						</Link>
					</li>
					<li>
						<Link to='/alert' className='link'>
							Alert
						</Link>
					</li>
					<div className='button-container'>
						<button id='button-sign-in'>Sign In</button>
						<button id='button-sign-up'>Sign Up</button>
					</div>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
