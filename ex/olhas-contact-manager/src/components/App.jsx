import React from 'react';
import ContactManager from './ContactManager';
import Header from './Header';
import MyProvider from '../context/MyProvider';
import '../assets/css/App.css';

const App = () => {

	return (
		<MyProvider>
			<main className="App">
				<Header />
				<ContactManager />
			</main>
		</MyProvider>
	);
}

export default App;
