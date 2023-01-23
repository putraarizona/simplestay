import React, { useState, useEffect } from 'react';

import DatePicker from 'react-datepicker';
import { ImCalendar } from 'react-icons/im';

import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

import './HotelForm.css';

import 'react-datepicker/dist/react-datepicker.css';

const HotelForm = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date(new Date().setDate(new Date().getDate() + 1)));
	const [rooms, setRooms] = useState(1);
	const [guests, setGuests] = useState(1);

	const [isClicked, setIsClicked] = useState(false);

	const handleIncrement = (name) => {
		if (name == 'rooms') {
			if (rooms < 9) {
				setRooms(parseFloat(rooms + 1));
			} else if (rooms >= 9) {
				setRooms(parseFloat(9));
			}
		}
		if (name == 'guests') {
			if (guests < 99) {
				setGuests(parseFloat(guests + 1));
			}
		}
	};

	const handleDecrement = (name) => {
		if (name == 'rooms') {
			if (rooms > 1) {
				setRooms(parseFloat(rooms - 1));
			} else if (rooms <= 1) {
				setRooms(parseFloat(1));
			}
		}
		if (name == 'guests') {
			if (guests > 1) {
				setGuests(parseFloat(guests - 1));
			}
		}
	};

	const handleClickOutside = (event) => {
		if (event.target.closest('.input-rooms-guests')) return;
		setIsClicked(false);
	};
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, false);
		return () => {
			document.removeEventListener('click', handleClickOutside, false);
		};
	}, []);

	const handleInput = (event, name) => {
		if (name === 'rooms') {
			if (event === '') {
				setRooms('');
			} else {
				setRooms(parseFloat(event));
			}
		}
		if (name === 'guests') {
			if (event === '') {
				setGuests('');
			} else {
				setGuests(parseFloat(event));
			}
		}
	};
	useEffect(() => {
		document.addEventListener('click', handleDocumentClick);
		return () => {
			document.removeEventListener('click', handleDocumentClick);
		};
	}, [rooms, guests]);

	const handleDocumentClick = (event) => {
		if (!event.target.closest('.hide-spin-button')) {
			if (rooms > 9) {
				setRooms(9);
			} else if (rooms <= 0 || isNaN(rooms)) {
				setRooms(1);
			} else if (!Number.isInteger(parseFloat(rooms))) {
				setRooms(Math.floor(rooms));
			}
			if (guests > 99) {
				setGuests(99);
			} else if (guests <= 0 || isNaN(guests)) {
				setGuests(1);
			} else if (!Number.isInteger(parseFloat(guests))) {
				setGuests(Math.floor(guests));
			}
		}
	};

	return (
		<form action='' className='hotel-form'>
			<div className='form-content'>
				{/* Destination */}
				<label className='label-destination'>Destination</label>
				<input type='text' name='' id='' className='input-destination' placeholder='What is your destination?' />

				{/* Rooms & Guests */}
				<div className='form-row-container'>
					{/* Checkin */}
					<div className='form-col-container'>
						<label>Check-In</label>
						<div className='input-date'>
							<ImCalendar className='calendar-icon' />
							<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat='dd/MM/yyyy' />
						</div>
					</div>

					{/* CheckOut */}
					<div className='form-col-container'>
						<label>Check-Out</label>
						<div className='input-date'>
							<ImCalendar className='calendar-icon' />
							<DatePicker selected={endDate} onChange={(date) => setEndDate(date)} dateFormat='dd/MM/yyyy' />
						</div>
					</div>
				</div>

				{/* Rooms & Guests */}
				<div className='room-guest form-row-container '>
					<div className='form-col-container'>
						<label className='label-guests'>room & guests</label>
						<div type='text' className='input-rooms-guests' onClick={() => setIsClicked(!isClicked)}>
							<p>
								{rooms} Rooms, {guests} Guests
							</p>
							<IoIosArrowDown className='dropdown-icon' style={{ transform: isClicked ? 'rotate(180deg)' : 'rotate(0deg)' }} />
						</div>
						{isClicked && (
							<ul onClick={(event) => event.stopPropagation()}>
								{/* Rooms */}
								<li>
									<p>Rooms</p>
									<div className='room-container'>
										<AiFillMinusCircle className='minus-button button-room-guest' onClick={() => handleDecrement('rooms')} style={{ color: rooms == 1 ? '#D9C5BD' : '#B38B7A' }} />
										<input type='number' className='hide-spin-button' value={rooms} onChange={(event) => handleInput(event.target.value, 'rooms')} />
										<AiFillPlusCircle className='plus-button button-room-guest' onClick={() => handleIncrement('rooms')} style={{ color: rooms == 9 ? '#D9C5BD' : '#B38B7A' }} />
									</div>
								</li>

								{/* Guests */}
								<li>
									<p>Guests</p>
									<div className='guest-container'>
										<AiFillMinusCircle className='minus-button button-room-guest' onClick={() => handleDecrement('guests')} style={{ color: guests == 1 ? '#D9C5BD' : '#B38B7A' }} />
										<input type='number' value={guests} className='hide-spin-button' onChange={(event) => handleInput(event.target.value, 'guests')} />
										<AiFillPlusCircle className='plus-button button-room-guest' onClick={() => handleIncrement('guests')} style={{ color: guests == 99 ? '#D9C5BD' : '#B38B7A' }} />
									</div>
								</li>
							</ul>
						)}
					</div>

					{/* Rate Preference */}
					<div className='form-col-container'>
						<label className='label-rate'>rate preference</label>
						<select type='text' name='' id='' className='input-rate'>
							<option value='Best Available'>Best Available</option>
							<option value='Non-Refundable' disabled>
								Non-Refundable
							</option>
							<option value='Advance Purchase' disabled>
								Advance Purchase
							</option>
							<option value='Corporate/Business' disabled>
								Corporate/Business
							</option>
							<option value='Senior Citizen' disabled>
								Senior Citizen
							</option>
							<option value='Promotional/Package' disabled>
								Promotional/Package
							</option>
						</select>
					</div>
				</div>
			</div>

			{/* search */}
			<input type='submit' name='search' id='search' value='search' className='search' />
		</form>
	);
};

export default HotelForm;
