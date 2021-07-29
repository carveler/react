import React from 'react';

const Checkbox = ({check, handleCheck}) => {
	return (
		<section>
			<label>
				<input
					type="checkbox"
					checked={check}
					onChange={handleCheck}
					/>
				Send me notifications</label>
		</section>
	)
}

export default Checkbox;