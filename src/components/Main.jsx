import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useInView } from 'framer-motion';

import HotelForm from './HotelForm';

import './Main.css';

import { RiStarFill } from 'react-icons/ri';
import { AiFillDollarCircle } from 'react-icons/ai';
import { BsStopwatchFill } from 'react-icons/bs';

import banneHotelVertical from '../assets/img/banner-hotel-vertical.jpg';
import banneHotelHorizontal from '../assets/img/banner-hotel-horizontal.jpg';

import profile1 from '../assets/img/profile1.jpg';
import profile2 from '../assets/img/profile2.jpg';
import profile3 from '../assets/img/profile3.jpg';

const Main = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<div className='Main'>
			<h2 className='main-heading'>Hotels, Resorts, Hostels & More</h2>
			<p className='main-text'>Get the best prices on 2,000,000+ properties, worldwide</p>
			<HotelForm />

			<h2 className='main-heading'>Why You Should Choose Us</h2>
			<p className='main-text'>We have sorted all the hotels here based on their equality</p>

			<div ref={ref} className='why-choose-us'>
				<ul
					className='col-1 reason-container'
					style={{
						transform: isInView ? 'none' : 'translateX(-200px)',
						opacity: isInView ? 1 : 0,
						transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)',
					}}
				>
					<li className='row-1 reason'>
						<RiStarFill className='icon-reason' />
						<h3>We provide the best choice of hotels for you to stay</h3>
						<p>We ensure your vacation is comfortable and enjoyable. That's why we prioritize customer comfort and satisfaction by only working with the best hotels in the industry.</p>
					</li>
					<li className='row-2 reason'>
						<AiFillDollarCircle className='icon-reason' />
						<h3>Unbeatable prices for top-notch accommodations</h3>
						<p>Rest easy knowing that our unbeatable prices for top-notch accommodations don't mean sacrificing quality, we guarantee top-notch service and luxurious stays at budget-friendly rates.</p>
					</li>
					<li className='row-3 reason'>
						<BsStopwatchFill className='icon-reason' />
						<h3>Our booking process is quick and simple.</h3>
						<p>Booking your dream vacation with just a few clicks and without complicated steps, in our streamlined booking process, to ensure a smooth and stress-free experience.</p>
					</li>
				</ul>
				<div
					className='col-2 banner-container'
					style={{
						transform: isInView ? 'none' : 'translateX(300px)',
						opacity: isInView ? 1 : 0,
						transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)',
					}}
				>
					<img src={banneHotelVertical} alt='' id='banner-vertical' />
					<img
						src={banneHotelHorizontal}
						alt=''
						id='banner-horizontal'
						style={{
							transform: isInView ? 'scale(1)' : 'scale(0)',
							opacity: isInView ? 1 : 0,
							transition: 'all 0.9s cubic-bezier(0.17, 0.33, 0.43, 1) 1s',
						}}
					/>
					<div
						className='review-card card-1'
						style={{
							transform: isInView ? 'none' : 'translateY(-100px)',
							opacity: isInView ? 1 : 0,
							transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
						}}
					>
						<img src={profile1} alt='' className='profile-photo' />
						<div className='text-container'>
							<p className='profile-name'>Andrew Tate</p>
							<p className='rating'>
								Give Rating <span>4.5</span>
							</p>
						</div>
					</div>
					<div
						className='review-card card-2'
						style={{
							transform: isInView ? 'none' : 'translateX(-100px)',
							opacity: isInView ? 1 : 0,
							transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s',
						}}
					>
						<img src={profile2} alt='' className='profile-photo' />
						<div className='text-container'>
							<p className='profile-name'>Arthur Morgan</p>
							<p className='rating'>
								Give Rating <span>4.7</span>
							</p>
						</div>
					</div>
					<div
						className='review-card card-3'
						style={{
							transform: isInView ? 'none' : 'translateX(100px)',
							opacity: isInView ? 1 : 0,
							transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s',
						}}
					>
						<img src={profile3} alt='' className='profile-photo' />
						<div className='text-container'>
							<p className='profile-name'>Robin Schulz</p>
							<p className='rating'>
								Give Rating <span>4.8</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
