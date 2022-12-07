import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrRoom:[]
}

const BookingReducer = createSlice({
  name: "BookingReducer",
  initialState,
  reducers: {

    getDetail:(state,action)=>{
    }
  }
});

export const {getDetail} = BookingReducer.actions

export default BookingReducer.reducer