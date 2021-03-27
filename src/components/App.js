import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactsList from './ContactsList';

// localStorage.setItem('contacts', JSON.stringify(
//   [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ]
// ));
// localStorage.removeItem('contacts')

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsInitial = JSON.parse(localStorage.getItem('contacts'));
    if (contactsInitial) {
      this.setState({ contacts: contactsInitial });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleInput = e => {
    const stateField = e.target.name;
    this.setState({ [stateField]: e.target.value });
  };

  addContact = contact => {
    const { name } = contact;
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
    }
  };

  deleteContact = contactID => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(contact => contact.id !== contactID),
    });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const filterNormalize = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterNormalize),
    );
  };

  render() {
    const { handleInput, addContact, filteredContacts, deleteContact } = this;
    const visibleContacts = filteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <Filter handleInput={handleInput} />
        <h2>Contacts</h2>
        <ContactsList
          contacts={visibleContacts}
          deleteContact={deleteContact}
        />
      </div>
    );
  }
}

export default App;
