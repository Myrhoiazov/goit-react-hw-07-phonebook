import { createSlice } from '@reduxjs/toolkit';
import initialContact from './initial-state.contact';
import { fetchAllContact } from '../contacts/operations-contact';

const itemsSlice = createSlice({
  name: 'contacts',
  initialState: initialContact,

  extraReducers: {
    [fetchAllContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchAllContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.contacts = payload;
    },
    [fetchAllContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const contactsReducer = itemsSlice.reducer;
