import React from 'react';

const Radio = ({handleTrip}) => {
	return (
		<fieldset>
			<legend>Which type of mushroom trip do you prefer?</legend>
			<label>
				<input
					type="radio"
					name="trip"
					value="One-day trip"
					onChange={(e) => handleTrip(e)}/>
				A day trip
			</label>
			<label>
				<input
					type="radio"
					name="trip"
					value="Multi-day trip"
					onChange={(e) => handleTrip(e)}/>
				A multiple-day trip
			</label>
		</fieldset>
	)
}

export default Radio;