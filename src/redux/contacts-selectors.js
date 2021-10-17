import { createSelector } from '@reduxjs/toolkit';
const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => {
  return state.contacts.filter;
};

const getAllContacts = (state) => {
  return state.contacts.items;
};

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export { getLoading, getFilter, getAllContacts, getVisibleContacts };
