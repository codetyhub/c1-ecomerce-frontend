import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    name: '../public/tshirts/t1.svg',
    id: nanoid(),
  },
  { name: '../tshirts/t2.svg', id: nanoid() },
  { name: '../tshirts/t3.svg', id: nanoid() },
  { name: '../tshirts/t4.svg', id: nanoid() },
  { name: '../tshirts/t5.svg', id: nanoid() },
  { name: '../tshirts/t6.svg', id: nanoid() },
];

export const mensTshirt = createSlice({
  name: 'mensTshirt',
  initialState,
  reducers: {},
});
export const { findImage } = mensTshirt.actions;
export default mensTshirt.reducer;
