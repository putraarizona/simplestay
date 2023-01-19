import React, { useState } from 'react';

import HotelForm from './HotelForm';

import './Main.css';

const Main = () => {
	return (
		<div className='Main'>
			<h2 className='main-heading'>Hotels, Resorts, Hostels & More</h2>
			<p className='main-text'>Get the best prices on 2,000,000+ properties, worldwide</p>

			<HotelForm />
		</div>
	);
};

export default Main;
