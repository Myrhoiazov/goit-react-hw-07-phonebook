import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllContact } from '../../services/contactApi';

export const fetchAllContact = createAsyncThunk(
  'contacts/fetchAllContact',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllContact();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        status: error.response.status,
      });
    }
  }
);
