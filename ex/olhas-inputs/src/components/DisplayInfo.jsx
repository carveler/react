import React from 'react';

const DisplayInfo = ({name, city, mushroom, season, trip, activities, check}) => {
	
	return (
		<section className="displayed-info">
			{/* from Form: */}
			<p>
				<span>Name:</span>
				<span>{name}</span>
			</p>
			<p>
				<span>City:</span>
				<span>{city}</span>
			</p>
			<p>
				<span>Favorite mushroom:</span>
				<span>{mushroom}</span>
			</p>

			{/* from Dropdown */}
			<p>
				<span>Favorite mushroom season:</span>
				<span>{season}</span>
			</p>

			{/* from Radio */}
			<p>
				<span>Your type of a mushroom trip:</span>
				<span>{trip}</span>
			</p>

			{/* from Multiple Choice */}
			<div>
				<span>Favorite mushroom-related activities:</span>
				<ul>
					{Object.keys(activities).map((act, id) => activities[act] && <li key={id}>{act}</li>)}
				</ul>
			</div>

			{/* from Checkbox */}
			<p>
				<span>Receive notifications:</span>
				<span>{check ? 'true' : 'false'}</span>
			</p>

		</section>
	)
}

export default DisplayInfo;