import React from 'react';

const MultipleChoice = ({activities, handleActivities}) => {
	return (
		<fieldset>
			<legend>Which mushroom-related activities do you like the most?</legend>
			
			<label>
				<input
					type="checkbox"
					value="identification"
					name="activities"
					checked={activities.identification}
					onChange={(e) => handleActivities(e)} />
            Identification
          	</label>
			
			<label>
				<input
					type="checkbox"
					value="picking"
					name="activities"
					checked={activities.picking}
					onChange={(e) => handleActivities(e)} />
            Picking for consumption
          	</label>
			
			<label>
				<input
					type="checkbox"
					value="photography"
					name="activities"
					checked={activities.photography}
					onChange={(e) => handleActivities(e)} />
            Taking photos
          	</label>
			
			<label>
				<input
					type="checkbox"
					value="observation"
					name="activities"
					checked={activities.observation}
					onChange={(e) => handleActivities(e)} />
            Observation
          	</label>
			
			<label>
				<input
					type="checkbox"
					value="research"
					name="activities"
					checked={activities.research}
					onChange={(e) => handleActivities(e)} />
            Research (e.g. microscopic)
          	</label>
		</fieldset>
	)
}

export default MultipleChoice;