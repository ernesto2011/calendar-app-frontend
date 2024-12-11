import { createSlice } from '@reduxjs/toolkit';

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        isLoadingEvents:true,
        events:[],
        activeEvent:null
    },
    reducers: {
        setActiveEvent:(state, {payload})=>{
            state.activeEvent = payload;
        },
        onAddNewEvent:(state, {payload})=>{
            state.events.push(payload);
            state.activeEvent = null
        },
        onUpdateEvent:(state, {payload})=>{
           state.events = state.events.map(event=>{
             if(event._id === payload._id){
                return payload;
             }
             return event;
           })
        },
        onDeletEvent:(state)=>{
            if(state.activeEvent){
                state.events = state.events.filter(event=>event._id!== state.activeEvent._id);
                state.activeEvent = null;
            }
        },
        onLoadEvents:(state, {payload =[]})=>{
            state.isLoadingEvents = false;
            // state.events = payload;
            // state.activeEvent = null;
            payload.forEach(event => {
                const exists = state.events.some(dbEvent => dbEvent._id === event._id);
                if(!exists){
                    state.events.push(event);
                }
            });
        },
        onLogoutCalendar:(state)=>{
            state.isLoadingEvents = true;
            state.events = [];
            state.activeEvent = null;
        }
    }
});
export const { setActiveEvent, onAddNewEvent, onUpdateEvent, onDeletEvent, onLoadEvents, onLogoutCalendar } = calendarSlice.actions;