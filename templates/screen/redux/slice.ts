import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import initialState from './initialState';
import {RootState} from '../../../common/redux/store';

const Slice = createSlice({
  name: 'Name',
  initialState,
  reducers: {},
});

export default Slice.reducer;

export const {} = Slice.actions;
