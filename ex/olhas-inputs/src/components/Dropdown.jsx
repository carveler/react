import React from 'react';

const Dropdown = ({handleSeason}) => {
	return (
		<label>
			<span>When is your favorite mushroom season?</span>
			<select onChange={(e) => handleSeason(e)}>
				<option value="Winter">Winter</option>
				<option value="Spring">Spring</option>
				<option value="Summer">Summer</option>
				<option value="Fall">Fall</option>
			</select>
		</label>
	)
}

export default Dropdown;