import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/phonebook/phonebook-actions';
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

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
