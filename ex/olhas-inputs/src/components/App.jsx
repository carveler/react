import React, {useState} from 'react';
import Form from './Form';
import DisplayInfo from './DisplayInfo';
import {GiMushroomGills} from 'react-icons/gi';
import '../assets/css/App.css';

const App = () => {
	const [about, setAbout] = useState({name: '', city: '', 'favorite mushroom': ''});

	const [favSeason, setFavSeason] = useState('Winter');
	
	const [trip, setTrip] = useState('One-day trip');
	
	const [activities, setActivities] = useState({identification: false, picking: false, photography: false, observation: false, research: false});
	
	const [checkNotifs, setCheckNotifs] = useState(false);
	
	const [display, setDisplay] = useState(false);
	
	const handleInput = (e) => {
		setAbout({...about, [e.target.name]: e.target.value})
	}

	const handleSeason = (e) => {
		setFavSeason(e.target.value);
	}
	const handleCheckNotifs = (e) => {
		setCheckNotifs(prevCheckNotifs => !prevCheckNotifs);
	}

	const handleTrip = (e) => {
		setTrip(e.target.value);
	}

	const handleActivities = (e) => {
		setActivities({...activities, [e.target.value]: e.target.checked})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setDisplay(true);
	}

	return (
		<main className="App">
			<h1>
				<GiMushroomGills/>
				Mushroom Questionnaire</h1>
			<Form
				name={about.name}
				city={about.city}
				mushroom={about['favorite mushroom']}
				handleInput={handleInput}
				
				season={favSeason}
				handleSeason={handleSeason}
				
				trip={trip}
				handleTrip={handleTrip}
				
				activities={activities}
				handleActivities= {handleActivities}
				
				check={checkNotifs}
				handleCheck={handleCheckNotifs}
				
				handleSubmit={handleSubmit}
				/>
			
			{display && <DisplayInfo
				name={about.name}
				city={about.city}
				mushroom={about['favorite mushroom']}
				season={favSeason}
				trip={trip}
				activities={activities}
				check={checkNotifs}
				/>}
			
		</main>
	);
}

export default App;
