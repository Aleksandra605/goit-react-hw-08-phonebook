import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  featchContactRequest,
  featchContactSuccess,
  featchContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const fetchContacts = () => dispatch => {
  dispatch(featchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(featchContactSuccess(data)))
    .catch(error => dispatch(featchContactError(error)));
};

const addContact = data => dispatch => {
  const contact = {
    name: data.name,
    number: data.number,
  };

  dispatch(addContactRequest());

  return axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

// const addContact =
//   ({ name, number }) =>
//   dispatch => {
//     const contact = {
//       name,
//       number,
//     };

//     dispatch(addContactRequest());

//     axios
//       .post('/contacts', contact)
//       .then(({ data }) => dispatch(addContactSuccess(data)))
//       .catch(error => dispatch(addContactError(error)));
//   };

const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};

export { addContact, deleteContact, fetchContacts };
