import React from 'react';
import Dropdown from './Dropdown';
import Radio from './Radio';
import MultipleChoice from './MultipleChoice';
import Checkbox from './Checkbox';


const Form = ({name, city, mushroom, handleInput, season, handleSeason, trip, handleTrip, activities, handleActivities, check, handleCheck, handleSubmit}) => {
	
	return (
		<form>
			<label>Name
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => handleInput(e)}
					placeholder="Your Name"
					autoComplete="off"/>
			</label>

			<label>City
				<input
					type="text"
					name="city"
					value={city}
					onChange={(e) => handleInput(e)}
					placeholder="City or Town"
					autoComplete="off"/>
			</label>
			
			<label>Favorite mushroom
				<input
					type="text"
					name="favorite mushroom"
					value={mushroom}
					onChange={(e) => handleInput(e)}
					placeholder="Favorite Mushroom"
					autoComplete="off"/>
			</label>

			<Dropdown
				season={season}
				handleSeason={handleSeason}/>
			<Radio
				trip={trip}
				handleTrip={handleTrip}/>
			<MultipleChoice
				activities={activities}
				handleActivities= {handleActivities}/>
			<Checkbox
				check={check}
				handleCheck={handleCheck}/>

			<button onClick={handleSubmit}>Display info</button>
		</form>
	)
}

export default Form;