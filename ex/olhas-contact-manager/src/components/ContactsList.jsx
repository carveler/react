import React, {useContext} from 'react';
import {ContactCard} from './ContactCard';
import MyContext from '../context/MyContext';

const ContactsList = () => {
	const context = useContext(MyContext);
	const {contacts} = context;

	return (
		<ul className="contacts-list">
			{contacts.map((contact, idx) => {
				return <ContactCard key={idx} name={contact} />
			})}
		</ul>
	)
}

export default ContactsList;