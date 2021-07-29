import React, {useContext} from 'react';
import MyContext from '../context/MyContext';

const AddContactForm = () => {
	const context = useContext(MyContext);
	const {contact, setContact, addContact} = context;

	const handleChange = (e) => {
		setContact(e.target.value);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		addContact(contact);
		setContact('');
	}

	return (
		<form className="contacts-form" onSubmit={handleSubmit}>
			<label
				htmlFor="nameInput">
					Name
			</label>
			
			<input
				type="text"
				name="contact_name"
				id="nameInput"
				placeholder="Contact's Name"
				value={contact}
				onChange={handleChange}/>
			
			<button>Add</button>
		</form>
	)
}

export default AddContactForm;