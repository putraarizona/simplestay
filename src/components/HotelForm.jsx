import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import { ImCalendar } from 'react-icons/im';
// import { BsPlusSquareFill } from 'react-icons/bs';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

import './HotelForm.css';

import 'react-datepicker/dist/react-datepicker.css';

const HotelForm = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date(new Date().setDate(new Date().getDate() + 1)));
	const [dropdown, setDropdown] = useState(false);

	return (
		<form action='' className='hotel-form'>
			<div className='form-content'>
				<label className='label-destination'>Destination</label>
				<input type='text' name='' id='' className='input-destination' placeholder='What is your destination?' />

				<div className='form-row-container'>
					<div className='form-col-container'>
						<label>Check-In</label>
						<div className='input-date'>
							<ImCalendar className='calendar-icon' />
							<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat='dd/MM/yyyy' />
						</div>
					</div>
					<div className='form-col-container'>
						<label>Check-Out</label>
						<div className='input-date'>
							<ImCalendar className='calendar-icon' />
							<DatePicker selected={endDate} onChange={(date) => setEndDate(date)} dateFormat='dd/MM/yyyy' className='halo' />
						</div>
					</div>
				</div>

				<div className='form-row-container'>
					<div className='form-col-container'>
						<label className='label-guests'>room & guests</label>
						<select name='' id='' className='input-guests' onClick={() => setDropdown(!dropdown)}></select>
						{dropdown && (
							<div className='input-room-guest'>
								<div className='room-container'>
									<p>Rooms</p>
									<div className='room-input-container'>
										<AiFillMinusCircle className='minus-button button-room-guest' />
										<input type='text' name='' id='' className='input-room' placeholder='1' />
										<AiFillPlusCircle className='plus-button button-room-guest' />
									</div>
								</div>
							</div>
						)}
					</div>
					<div className='form-col-container'>
						<label className='label-rate'>rate preference</label>
						<select type='text' name='' id='' className='input-rate'>
							<option value='Best Available'>Best Available</option>
						</select>
					</div>
				</div>
			</div>
			{/* <label htmlFor='search' className='label-rate'></label> */}

			<input type='submit' name='search' id='search' value='search' className='search' />
		</form>
	);
};

export default HotelForm;
