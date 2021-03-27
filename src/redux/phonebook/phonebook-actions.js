import types from './phonedook-types';

const addContact = contact => ({
  type: types.ADD,
  payload: contact,
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
