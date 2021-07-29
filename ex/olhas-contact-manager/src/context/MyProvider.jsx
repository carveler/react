import React, {useState} from 'react';
import MyContext from './MyContext';
import logo from '../assets/img/contacts.png';

const MyProvider = (props) => {
	const [contacts, setContacts] = useState(["Warren Ellis", "Jim O'Rourke", "Jim Jarmusch"]);
	const [contact, setContact] = useState('');
	const title = "Contact Manager";
	const contactLogo = logo;
	const addContact = (name) => {
		setContacts([...contacts, name]);
	}

	return (
		<MyContext.Provider value={{
			contacts, setContacts, contact, setContact, title, contactLogo, addContact
		}}>
			{props.children}
		</MyContext.Provider>
	)
}

export default MyProvider;