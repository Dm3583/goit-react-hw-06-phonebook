import { createAction } from '@reduxjs/toolkit';
import types from './contacts-types';

const addContact = createAction(types.ADD);
const deleteContact = createAction(types.DELETE);
const changeFilter = createAction(types.CHANGE_FILTER);

export default { addContact, deleteContact, changeFilter };
