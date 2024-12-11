import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { onAddNewEvent, onDeletEvent, onLoadEvents, onUpdateEvent, setActiveEvent } from "../store";
import { calendarApi } from "../api";
import { convertToDate } from "../helpers";
import Swal from "sweetalert2";

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const {events, activeEvent} = useSelector(state => state.calendar);
    const {user} = useSelector(state => state.auth);
    
    const setActiveCalendarEvent = (calendarEvent) => {
        dispatch(setActiveEvent(calendarEvent));
    }
    const startSavingEvent = async(calendarEvent)=>{
      try {
        if(calendarEvent._id){
          await calendarApi.put(`/events/${calendarEvent._id}`,calendarEvent)
          dispatch(onUpdateEvent({...calendarEvent, user}))
          return;
        }
          const {data}= await calendarApi.post('/events',calendarEvent)
          dispatch(onAddNewEvent({...calendarEvent,id: data.event?._id, user }))
      } catch (error) {
        Swal.fire('Error al guardar', error.response.data?.msg, 'error'); 
      }
      
    }
    const startDeletetingEvent = async()=>{
      try {
        await calendarApi.delete(`/events/${activeEvent._id}`)
        dispatch(onDeletEvent())
      } catch (error) {
        Swal.fire('Error al eliminar', error.response.data?.msg, 'error');
      }
    }
    const startLoadingEvents = async()=>{
      try {
        const {data} = await calendarApi.get('/events')
        const events = convertToDate(data.events)
        dispatch(onLoadEvents(events))
        
      } catch (error) {
        console.log(error)
      }
    }
  return{
    //Propiedades
    events, 
    activeEvent,
    haSEventSelected: !!activeEvent,
    //Métodos
    setActiveCalendarEvent,
    startSavingEvent,
    startDeletetingEvent,
    startLoadingEvents
  }
}
