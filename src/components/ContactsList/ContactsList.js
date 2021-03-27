import React from 'react';
import ListItem from './ListItem';
import PropTypes from 'prop-types';
import './ContactsList.scss';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul className="ContactsList">
      {contacts.map(contact => (
        <ListItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
