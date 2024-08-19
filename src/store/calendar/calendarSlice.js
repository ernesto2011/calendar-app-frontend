import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    _id: new Date().getTime(),
    title: "cumpleañode de jhon",
    notes: "comprar pastel",
    start: new Date(),
    end: addHours (new Date(), 2),
    bgColor: '#fafafa',
    user:{
        _id: "123",
        name: "John Doe",
    }
  }

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events:[tempEvent],
        activeEvent:null
    },
    reducers: {
        setActiveEvent:(state, {payload})=>{
            state.activeEvent = payload;
        }
    }
});
export const { setActiveEvent } = calendarSlice.actions;