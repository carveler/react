import React, {useContext} from 'react';
import MyContext from '../context/MyContext'

const Header = () => {
	const context = useContext(MyContext);
	const {title, contactLogo} = context;

	return (
		<header className="App-header">
			<img src={contactLogo} className="App-logo" alt="logo" />
			<h1>{title}</h1>
		</header>
	)
}

export default Header;